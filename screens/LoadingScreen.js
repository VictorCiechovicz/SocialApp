import React from 'react'
import { Text, View, StyleSheet,ActivityIndicator } from 'react-native'
import * as firebase from 'firebase'





export default class LoadingScreen extends React.Component {
componentDidMount(){

  firebase.auth().onAuthStateChange(user=>{

    this.props.navigation.navigate(user? "App":"Auth")
  })





}



  render() {
    return (
      <View style={estilos.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    )
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
