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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function UserScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = "home"
          } else if (route.name === 'Listing') {
            iconName = "shoppingcart"
          }
          else {
            iconName = "profile"
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',

      })}
    >
      <Tab.Screen name="Feed" options={{
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,

        }
      }} component={UserFeed} />
      <Tab.Screen name="Listing" options={{
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,

        }
      }} component={UserListing} />
      <Tab.Screen name="Profile" options={{
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,

        }
      }} component={UserProfile} />
    </Tab.Navigator>
  );
}

function SellerScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = "home"
          } else if (route.name === 'Listing') {
            iconName = "shoppingcart"
          }
          else {
            iconName = "profile"
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',

      })}
    >
      <Tab.Screen name="Feed" options={{
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,

        }
      }} component={SellerFeed} />
      <Tab.Screen name="Listing" options={{
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,

        }
      }} component={SellerListing} />
      <Tab.Screen name="Profile" options={{
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,

        }
      }} component={SellerProfile} />
    </Tab.Navigator>
  );
}


function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 200); // 1 sec

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
      <Stack.Screen name="UserScreens" component={UserScreens} />
      <Stack.Screen name="SellerScreens" component={SellerScreens} />
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