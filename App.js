import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux'
import { Store } from './src/store/Store';
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
    //<Provider store={Store}>
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
    <AppNavigation />
    </PaperProvider>
   //</Provider>
  );
}



