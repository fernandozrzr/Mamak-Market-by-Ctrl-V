import React from 'react';

import splashscreen from './screens/splashscreen';
import loginBusinessOwner from './screens/loginBusinessOwner';
import loginUser from './screens/loginUser';
import signupUser from './screens/signupUser';
import signupBusinessOwner from './screens/signupBusinessOwner';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="loginUser" component={loginUser} />
      <Stack.Screen name="loginBusinessOwner" component={loginBusinessOwner} />
      <Stack.Screen name="signupBusinessOwner" component={signupBusinessOwner} />
      <Stack.Screen name="signupUser" component={signupUser} />
    </Stack.Navigator>
  );
}


export default () => {
  return (
    <NavigationContainer>
     
        <App />
      
    </NavigationContainer>
  )
}