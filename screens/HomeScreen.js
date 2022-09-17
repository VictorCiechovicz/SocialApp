import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import * as firebase from 'firebase'

export default class HomeScreen extends React.Component {
  state = {
    email: '',
    displayName: ''
  }

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser

    this.setState({ email, displayName })
  }

  signOutUser = () => {
    firebase.auth().signOut()
  }

  render() {
    return (
      <View style={estilos.container}>
        <Text>Olá {this.state.email}!</Text>

        <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
          <Text>Logout</Text>
        </TouchableOpacity>
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
