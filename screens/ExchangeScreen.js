import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,KeyboardAvoidingView,Alert} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class BookRequestScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId : firebase.auth().currentUser.email,
            itemName:'',
            description:'',

        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }

    addItem = (itemName,description)=>{
        var userId = this.state.userId
        var randomRequestId = this.createUniqueId();
        db.collection('exchange_requests').add({
            'username':userId,
            'item_name':itemName,
            'description':description,
        })
        this.setState({
            itemName:'',
            description:'',
        })
        return Alert.alert(
            'Item Ready To Exchange',
            '',
            [
                {text: 'OK', onPress: () => {
                    this.props.navigation.navigate('Home')
                }}
            ]
        );
    }
    
    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title = "Add Item"/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Item Name'
                        onChangeText={(text)=>{
                            this.setState({itemName:text})
                        }}
                        value = {this.state.itemName}
                    />

                    <TextInput
                        style={[styles.formTextInput,{height:300,}]}
                        multiline
                        numberOfLines = {8} 
                        placeholder='Descripition'
                        onChangeText={(text)=>{
                            this.setState({description:text})
                        }}
                        value = {this.state.description}
                    />

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>{
                            this.addItem(this.state.itemName,this.state.description)
                        }}>
                        <Text style={{color: '#ffff', fontSize:18, fontWeight:"bold"}}>Add Item</Text>
                    </TouchableOpacity>   
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )