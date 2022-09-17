import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyADR4shdim2x3LieqU7glcgzSq95Aiox5c',
  authDomain: 'socialmidia-4d516.firebaseapp.com',
  projectId: 'socialmidia-4d516',
  storageBucket: 'socialmidia-4d516.appspot.com',
  messagingSenderId: '513395852045',
  appId: '1:513395852045:web:751560b6ad9e73ecca2644'
}
const app = initializeApp(firebaseConfig)

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AppStack
    },
    {
      initialRouteName: 'Loading'
    }
  )
)
