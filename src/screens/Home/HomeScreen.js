import React from 'react';
import {
  Image, StyleSheet,
} from 'react-native';
import { customParagraph } from '../../components/customParagraph';
import { Screen } from '../../components/Screen';
import { SecondaryButton } from '../../components/SecondaryButton';

const pokeTitle = require('../../assets/poketitle.png');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
  image: {
    maxWidth: '100%',
    height: 100,
    alignSelf: 'stretch',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export const HomeScreen = ({ navigation }) => {
  const Welcome = customParagraph('Welcome!', styles.subtitle);
  const Description = customParagraph('In this app you will be able to see all the pokemons and their abilities.');
  const LetsGo = customParagraph('Go to the pokemons section to get started.');

  return (
    <Screen style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={pokeTitle}
      />
      <Welcome />
      <Description />
      <LetsGo />
      <SecondaryButton onPress={() => navigation.navigate('Login')} title="Log out" />
    </Screen>
  );
};
