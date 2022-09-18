import React from 'react'
import { VStack } from 'native-base'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SingIn } from '../screen/SingIn'
import { SignUp } from '../screen/SignUp'

const Stack = createNativeStackNavigator()

export function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SingIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}
