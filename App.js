import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import Provider from '@reduxjs/toolkit';
import AppNavigation from './src/navigation/AppNavigation';


const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: "white",
      primary: "white",
    },
  roundness: 10,
};


export default function App() {

  return (
    <SafeAreaProvider>
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
    <AppNavigation />
    </PaperProvider>
    </SafeAreaProvider>
  );
}



