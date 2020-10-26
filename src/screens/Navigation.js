import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './Login';
import { PokemonList } from './PokemonList';
import { PokemonDetail } from './PokemonDetail';
import { HomeScreen } from './Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const PokemonStack = ({ navigation }) => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="List"
      component={PokemonList}
      options={{
        title: 'Pokemons',
        headerLeft: () => (
          <HeaderBackButton
            onPress={() => navigation.navigate('Home')}
          />
        ),
      }}

    />
    <Stack.Screen
      name="Detail"
      component={PokemonDetail}
      options={{
        title: 'Pokemon Detail',
        headerLeft: () => (
          <HeaderBackButton
            onPress={() => navigation.navigate('List')}
          />
        ),
      }}
    />

  </Stack.Navigator>
);

export const PokemonTab = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelStyle: {
        fontSize: 20,
        padding: 10,
      },
    }}
    initialRouteName="Home"
  >
    <Tab.Screen name="Home" options={{ title: 'Home' }} component={HomeScreen} />
    <Tab.Screen name="Pokemon" options={{ title: 'Pokemons' }} component={PokemonStack} />
  </Tab.Navigator>
);

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" options={{ title: 'PokeApp' }} component={LoginScreen} />
      <Stack.Screen name="Home" options={{ headerShown: false }} component={PokemonTab} />
    </Stack.Navigator>
  </NavigationContainer>
);
