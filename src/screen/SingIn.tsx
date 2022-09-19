import React, { useState } from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import { VStack, Text, HStack } from 'native-base'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

import auth from '@react-native-firebase/auth'

import { useNavigation } from '@react-navigation/native'

export function SingIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSingIn() {
    if (!email || !password) {
      Alert.alert('Entrar', 'informe E-mail e Senha!')
    }
  }

  const navigation = useNavigation()
  return (
    <VStack mx="10">
      <HStack justifyContent="center" mt="150" mb="100">
        <Text fontSize="20">Ola, Seja bem vindo!</Text>
      </HStack>

      <Input onChangeText={setEmail} placeholder="E-mail" mb="10" />
      <Input onChangeText={setPassword} placeholder="Senha" mb="10" />
      <Button title="Login" mb="10" onPress={handleSingIn} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text textAlign="center">
          Nao possui conta? <Text color="primary.700">Registre-se</Text>
        </Text>
      </TouchableOpacity>
    </VStack>
  )
}
