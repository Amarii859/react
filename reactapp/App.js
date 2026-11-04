/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigator/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/*<StackNavigator />*//*}
     /* <BottomTabNavigator/>
    </NavigationContainer>
  );
}*/


import React from "react";
import { StatusBar } from "expo-status-bar";
import ChallangeScreen from "./screens/ChallangeScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#343E52" />
      <ChallangeScreen />
    </>
  );
}
