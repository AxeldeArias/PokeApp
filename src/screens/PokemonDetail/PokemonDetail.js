import React from 'react';
import {
  View, StyleSheet, ScrollView,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import { CustomLoading } from '../../components/CustomLoading';
import { CustomText } from '../../components/CustomText';
import { Screen } from '../../components/Screen';
import { useFetchAPI } from '../../hook/useFetchAPI';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '100%',
    paddingBottom: 10,
  },
  titleContainer: {
    width: 100,
    height: 300,
    backgroundColor: 'blue',
  },
  title: {
    fontFamily: 'fantasy',
    fontSize: 23,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  paragraph: {
    width: '100%',
    marginTop: 15,
  },
});

export const PokemonDetail = ({ route }) => {
  const { loading: loadingImage, pokemonData: pokeImage } = useFetchAPI(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
  const { loading, pokemonData } = useFetchAPI(`https://pokeapi.co/api/v2/pokemon-species/${route.params.name}/`);
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        { loadingImage ? (
          <CustomLoading />
        ) : (
          <>
            <View styles={styles.titleContainer}>
              <CustomText style={styles.title}>{capitalizeFirstLetter(pokeImage?.name)}</CustomText>
            </View>
            <SvgUri
              width={300}
              uri={pokeImage?.sprites?.other?.dream_world?.front_default}
            />
          </>
        )}
        { loading ? (
          <CustomLoading />
        ) : (
          <>
            {pokemonData?.flavor_text_entries?.filter(({ language }) => language.name === 'en').map(({ flavor_text: flavorText }, index) => (
              <View style={styles.paragraph} key={String(index)}>
                <CustomText>
                  {capitalizeFirstLetter(flavorText)}
                </CustomText>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </Screen>
  );
};
