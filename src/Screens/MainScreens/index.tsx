import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'native-base';
import React from 'react';
import HomeScreen from './HomeScreen';

const MainStack = createNativeStackNavigator();
const MainTabs = createBottomTabNavigator();
const MainTabsScreens = () => {
  return (
    <MainTabs.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false }}>
        
      <MainTabs.Screen name="home" component={HomeScreen} />
    </MainTabs.Navigator>
  );
};
const MainScreens = () => {
  return (
    <MainStack.Navigator
      initialRouteName="main"
      screenOptions={{headerShown: false, animation: 'slide_from_left'}}>
      <MainStack.Screen name="main" component={MainTabsScreens} />
    </MainStack.Navigator>
  );
};

export default MainScreens;
