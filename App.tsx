import React from 'react'
import { NativeBaseProvider, Box, StatusBar } from 'native-base'

import { THEME } from './src/styles/theme'

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Box>Hello world</Box>
    </NativeBaseProvider>
  )
}
