import React from 'react'

import Text from '../components/Text'
import { View, Text, StyleSheet } from 'react-native'

export default SignInScreen = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.main}>
        <Text>Welcome back</Text>
      </View>
      <View style={estilos.HeaderGraphic}>
        <RightCicle />
        <LeftCicle />
      </View>

      <Statusbar barStyle="light-content" />
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    marginTop: 192
  },
  HeaderGraphic: {
    position: 'absolute',
    width: '100%',
    top: -50,
    zIndex: -100
  }
})

const RightCicle = styled.View`
background-color:#8022d9
position: absolute;
width:400px;
height:400px;
border-radius:100px;
right:-100px;
top:-200px;

`
const LeftCicle = styled.View`

background-color:#23a6d5
position: absolute;
width:200px;
height:200px;
border-radius:100px;
left:-50px;
top:-50px;

`
