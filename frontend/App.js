import React from 'react';
import { useState, useEffect } from 'react';

import SplashScreen from './screens/splashscreen';
import loginBusinessOwner from './screens/loginBusinessOwner';
import loginUser from './screens/loginUser';
import signupUser from './screens/signupUser';
import signupBusinessOwner from './screens/signupBusinessOwner';
import UserFeed from './screens2/UserFeed';
import UserListing from './screens2/UserListing';
import UserProfile from './screens2/UserProfile';
import SellerFeed from './screens2/SellerFeed';
import SellerListing from './screens2/SellerListing';
import SellerProfile from './screens2/SellerProfile';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 1000); // 1 sec

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
      <Stack.Screen name="UserFeed" component={UserFeed} />
      <Stack.Screen name="UserListing" component={UserListing} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="SellerFeed" component={SellerFeed} />
      <Stack.Screen name="SellerListing" component={SellerListing} />
      <Stack.Screen name="SellerProfile" component={SellerProfile} />
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