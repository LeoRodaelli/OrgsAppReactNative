import React from 'react';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/screens/Cesta';
import mock from './src/mocks/cesta';

import Home from './src/screens/Home';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  //
  //debaixo do statusBAr
  // <Home />

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} /> 
    </SafeAreaView>
  );
}
