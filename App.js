import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Home from './screens/Home';
import LocationScreen from './screens/LocationScreen';
import ListingScreen from './screens/ListingScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Listing" component={ListingScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


