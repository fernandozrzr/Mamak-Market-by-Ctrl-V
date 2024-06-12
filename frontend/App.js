import React from 'react';
import { useState, useEffect } from 'react';

import SplashScreen from './screens/splashscreen';
import loginBusinessOwner from './screens/loginBusinessOwner';
import loginUser from './screens/loginUser';
import signupUser from './screens/signupUser';
import signupBusinessOwner from './screens/signupBusinessOwner';
import UserFeed from './screens2/UserFeed';
import Listing from './screens2/Listing';
import UserProfile from './screens2/UserProfile';
import SellerFeed from './screens2/SellerFeed';

import AddListing from './screens2/AddListing';
import SellerProfile from './screens2/SellerProfile';
import ShopPage from './screens2/ShopPage';
import ShopPageItem from './screens2/ShopPageItem';
import postCreation from './screens2/postCreation';
import StoreFeedPage from './screens2/StoreFeedPage';
import ShopPageItemEdit from './screens2/ShopPageItemEdit';

import OrdersList from './screens (modals)/ordersList';
import ChatsList from './screens (modals)/chatsList';
import ChatScreen from './screens (modals)/chatScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function UserMarketPlaceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listing" options={{ headerShown: false }} component={Listing} />
      <Stack.Screen name="ShopPage" options={{ headerShown: false }} component={ShopPage} />
      <Stack.Screen name="ShopPageItem" options={{ headerShown: false }} component={ShopPageItem} />
    </Stack.Navigator>
  );
}
function UserFeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserFeed" options={{ headerShown: false }} component={UserFeed} />
      <Stack.Screen name="StoreFeedPage" options={{ headerShown: false }} component={StoreFeedPage} />
    </Stack.Navigator>
  );
}
function SellerProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SellerProfile" options={{ headerShown: false }} component={SellerProfile} />
      <Stack.Screen name="ShopPageItemEdit" options={{ headerShown: false }} component={ShopPageItemEdit} />
      <Stack.Screen name="AddListing" options={{ headerShown: false }} component={AddListing} />
    </Stack.Navigator>
  );
}
function SellerFeedStack(){
    return(
      <Stack.Navigator>
       <Stack.Screen name="postCreation" options={{ headerShown: false }} component={postCreation}/>
        <Stack.Screen name="SellerFeed" options={{ headerShown: false }} component={SellerFeed}/>
      </Stack.Navigator>
    );
}

export function UserScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Marketplace') {
            iconName = "home"
          } else if (route.name === 'Feed') {
            iconName = "database"
          }
          else {
            iconName = "user"
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',

      })}
    >
      <Tab.Screen name="Marketplace" options={{
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,

        },
        headerShown: false,
      }} component={UserMarketPlaceStack} />
      <Tab.Screen name="Feed" options={{
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,

        },
        headerShown: false,
      }} component={UserFeedStack} />
      <Tab.Screen name="You" options={{
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,

        },
        headerShown: false,
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

          if (route.name === 'Marketplace') {
            iconName = "home"
          } else if (route.name === 'Feed') {
            iconName = "database"
          }
          else {
            iconName = "user"
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',

      })}
    >
      <Tab.Screen name="Marketplace" options={{
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,

        },
        headerShown: false,
      }} component={UserMarketPlaceStack} />
      <Tab.Screen name="Feed" options={{
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,

        },
        headerShown: false,
      }} component={SellerFeedStack} />
      <Tab.Screen name="You" options={{
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,

        },
        headerShown: false,
      }} component={SellerProfileStack} />

    </Tab.Navigator>
  );
}


function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 5000); // 1 sec

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
      <Stack.Screen name="SellerProfile" component={SellerProfile} />
      
      <Stack.Group screenOptions={{ presentation: 'modal', }}>
        <Stack.Screen name="OrdersList" component={OrdersList} />
        <Stack.Screen name="ChatsList" component={ChatsList} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Group>
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