// navigation.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen.js';
import DetailsCrypto from './screen/DetailsCrypto'


const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsCrypto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
