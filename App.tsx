/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CustomHeader } from './app/components';
import { AllContest, MyContest } from './app/screens';

const Tab = createMaterialTopTabNavigator();

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="#BA271B" />
      <CustomHeader />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {fontSize: 12},
            tabBarIndicatorStyle: {backgroundColor: 'white', height: 0},
            tabBarActiveTintColor: '#F52015',
            tabBarInactiveTintColor: '#666666',
          }}>
          <Tab.Screen name="All Contests" component={AllContest} />
          <Tab.Screen name="My Contests (8)" component={MyContest} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
