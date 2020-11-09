import * as React from 'react';
import {Text,View,TouchableOpacity, StyleSheet, Alert} from 'react-native';
import SignUpAndLoginScreen from './screens/SignUpAndLoginScreen.js';


export default class App extends React.Component{
  render(){
    return(
      <SignUpAndLoginScreen/>
    );
  }
}