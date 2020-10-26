import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { CustomLoading } from '../../components/CustomLoading';
import { ErrorText } from '../../components/ErrorText';
import { Screen } from '../../components/Screen';
import { useFetchAPI } from '../../hook/useFetchAPI';
import { PokemonItem } from './components/PokemonItem';

export const PokemonList = ({ navigation }) => {
  const {
    loading,
    error,
    pokemonData,
    fetchMore,
  } = useFetchAPI('https://pokeapi.co/api/v2/pokemon?limit=60');

  return (
    <Screen>
      {!!error && <ErrorText>{error}</ErrorText>}
      <FlatList
        onEndReached={fetchMore}
        onEndReachedThreshold={0.1}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        data={pokemonData.results}
        renderItem={({ item, index }) => (
          <PokemonItem
            item={item}
            index={index}
            onPress={() => navigation.navigate('Detail', {
              name: item.name,
            })}
          />
        )}
      />
      {loading && <CustomLoading size="large" color="red" />}
    </Screen>
  );
};
