import React from 'react'
import { TouchableOpacity } from 'react-native'
import { VStack, Text, HStack } from 'native-base'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function SingIn() {
  return (
    <VStack mx="10">
      <HStack justifyContent="center" mt="150" mb="100">
        <Text fontSize="20">Ola, Seja bem vindo!</Text>
      </HStack>

      <Input placeholder="E-mail" mb="10" />
      <Input mb="10" placeholder="Senha" />
      <Button title="Login" mb="10" />
      <TouchableOpacity>
        <Text textAlign="center">
          Nao possui conta? <Text color="primary.700">Registre-se</Text>
        </Text>
      </TouchableOpacity>
    </VStack>
  )
}
