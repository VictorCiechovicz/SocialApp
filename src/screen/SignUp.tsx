import React from 'react'
import { TouchableOpacity } from 'react-native'
import { VStack, HStack, Text } from 'native-base'
import { Input } from '../components/Input'
import { Button } from '../components/Button'


import { useNavigation } from '@react-navigation/native'

export function SignUp() {

  const navigation = useNavigation()
  return (
    <VStack mx="10">
      <HStack justifyContent="center" mt="100" mb="100">
        <Text fontSize="20">Cadastro</Text>
      </HStack>
      <Input placeholder="Nome" mb="10" />
      <Input placeholder="E-mail" mb="10" />
      <Input mb="10" placeholder="Senha" />
      <Button title="Login" mb="10" />
      <TouchableOpacity>
        <Text textAlign="center" onPress={() => {navigation.goBack()}}>
          Já possuo uma conta!
        </Text>
      </TouchableOpacity>
    </VStack>
  )
}
