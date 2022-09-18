import React from 'react'
import { NativeBaseProvider, Box, StatusBar } from 'native-base'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { THEME } from './src/styles/theme'

import { Loading } from './src/components/Loading'
//import { Routes } from './src/routes'
import { SingIn } from './src/screen/SingIn'
import { SignUp } from './src/screen/SignUp'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  )
}
