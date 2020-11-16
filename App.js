import * as React from 'react';
import {Text,View,TouchableOpacity, StyleSheet, Alert} from 'react-native';
import SignUpAndLoginScreen from './screens/SignUpAndLoginScreen.js';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Exchange: {screen: ExchangeScreen},
})

const switchNavigator = createSwitchNavigator({
  Login : {screen:SignUpAndLoginScreen},
  TabNavigator : {screen:TabNavigator},
})

const AppContainer = createAppContainer(switchNavigator);