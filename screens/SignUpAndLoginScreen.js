import * as React from 'react';
import {Text,View,TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignUpAndLoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
        }
    }
    
    userLogin = (username,password) => {
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then(()=>{
          return Alert.alert('User Login Successful');
        })
        .catch((error)=>{
          var errorCode = error.code
          var errorMessage = error.message
          return Alert.alert(errorMessage)
        })
      }

    userSignUp = (username,password) => {
      firebase.auth().createUserWithEmailAndPassword(username,password)
      .then((response)=>{
        return Alert.alert('User Successfully SignedUp');
      })
      .catch(function (error){
        var errorCode = error.code
        var errorMessage = error.message
        return Alert.alert(errorMessage)
      })
    }

    render(){
        return(
            <View style={styles.container}>
              
                <Text style={styles.title}>Barter App</Text>
            
                <View style={styles.profileContainer}>
                    <Text style={{color:'#ff5722', fontSize:19, fontWeight:'bold', marginRight:213,}}>UserName</Text>    
                    <TextInput
                        style={styles.loginBox}
                        keyboardType="email-address"
                        onChangeText={(text)=>{
                            this.setState({
                                username:text,
                            })
                        }}
                    />

                    <Text style={{marginTop:20,color:'#ff5722', fontSize:19, fontWeight:'bold', marginRight:215,}}>Password</Text>
                    <TextInput
                        style={styles.loginBox}
                        secureTextEntry={true}
                        onChangeText={(text)=>{
                            this.setState({
                                password:text,
                            })
                        }}
                    />

                    <TouchableOpacity
                      style={[styles.button,{marginBottom:20,marginTop:20}]}
                      onPress={()=>{
                        this.userLogin(this.state.username,this.state.password)
                      }}>
                      <Text style={styles.buttonText}>Login</Text>  
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={()=>{
                        this.userSignUp(this.state.username,this.state.password)
                      }}>
                      <Text style={styles.buttonText}>Sign Up</Text>  
                    </TouchableOpacity>                                           
                </View>
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      marginTop:30,
      alignSelf:'center',
      fontSize:65,
      fontWeight:'bold',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 3,
      borderColor : '#000000',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    }
  })