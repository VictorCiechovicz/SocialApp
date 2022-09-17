import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import * as firebase from 'firebase'

export default class RegisterScreen extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    erroMenssage: null
  }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name
        })
      })
      .catch(error => this.setState({ errorMassage: error.message }))
  }

  render() {
    return (
      <View style={estilos.container}>
        <Text
          style={estilos.greeting}
        >{`Olá/nRegistre-se para começar!.`}</Text>

        <View style={estilos.erroMenssage}>
          {this.state.erroMenssage && (
            <Text style={estilos.erroMenssage}>{this.state.erroMenssage}</Text>
          )}
        </View>

        <View style={estilos.form}>
          <View>
            <Text style={estilos.inputTitle}>Nome</Text>
            <TextInput
              style={estilos.input}
              autoCapitalize="none"
              onChangeText={nome => this.setState({ nome })}
              value={this.state.nome}
            ></TextInput>
          </View>
          <View style={{ marginTop: 32 }}>
            <Text style={estilos.inputTitle}>Email Address</Text>
            <TextInput
              style={estilos.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={estilos.inputTitle}>Password</Text>
            <TextInput
              style={estilos.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={email => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={estilos.button} onPress={this.handleSignUp}>
          <Text style={{ color: '#fff', fontWeight: '500' }}> Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }}>
          <Text style={{ color: '#414959', fontSize: 13 }}>
            New to SocialApp?
            <Text style={{ fontWeight: '500', color: '#e9446a' }}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  },
  erroMenssage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  error: {
    color: '#e9446a',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center'
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: '#8a8f9e',
    fontSize: 10,
    textTransform: 'uppercase'
  },
  input: {
    borderBottomColor: '#8a8f9e',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161f3d'
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#e9446a',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
