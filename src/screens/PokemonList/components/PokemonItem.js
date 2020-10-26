import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomText } from '../../../components/CustomText';
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomColor: '#A9A9A9',
    borderBottomWidth: 0.2,
    alignItems: 'flex-end',
  },
  number: {
    marginRight: 10,
  },
  pokemonName: {
    fontSize: 24,
    fontFamily: 'fantasy',
  },
});

export const PokemonItem = React.memo(({ item, index, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <View style={styles.number}>
      <CustomText style={styles.pokemonName}>{`${index + 1}-`}</CustomText>
    </View>
    <View>
      <CustomText style={styles.pokemonName}>{capitalizeFirstLetter(item.name)}</CustomText>
    </View>
  </TouchableOpacity>
));
