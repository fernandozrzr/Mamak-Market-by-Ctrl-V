import React from 'react';
import { useState, useEffect } from 'react';

import SplashScreen from './screens/splashscreen';
import loginBusinessOwner from './screens/loginBusinessOwner';
import loginUser from './screens/loginUser';
import signupUser from './screens/signupUser';
import signupBusinessOwner from './screens/signupBusinessOwner';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 1000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
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