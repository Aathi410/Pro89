import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class BookDonateScreen extends React.Component{
    constructor() {
        super();
        this.state = {
          allRequests: []
        };
        this.requestRef = null;
    }
        
    getallRequests = () => {
        this.requestRef = db.collection("exchange_requests")
        .onSnapshot((snapshot) => {
                var allRequests = snapshot.docs.map(document => document.data());
                this.setState({
                    allRequests : allRequests
                });
        })
    }

    componentDidMount(){
        this.getallRequests();
    }

    keyExtractor = (item, index) => index.toString();
    
    renderItem = ({ item, i }) => {
        console.log(item.item_name)
        return (
          <ListItem
            key={i}
            title={item.item_name}
            subtitle={item.description}
            titleStyle={{ color: "black", fontWeight: "bold" }}
            rightElement={
              <TouchableOpacity style={styles.button}>
                <Text style={{color:"#ffff"}}>Exchange</Text>
              </TouchableOpacity>
            }
            bottomDivider
          />
        );
    }

    componentWillUnmount() {
        this.requestRef();
    }

    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title = "Exchange Items"/>
                <View style={{flex:1}}>
                    {
                        this.state.allRequests.length === 0
                        ?(
                            <View style={styles.subContainer}>
                                <Text style={{fontSize:20,}}>List Of All Items</Text>    
                            </View>
                        )
                        :(
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.allRequests}
                                renderItem={this.renderItem}
                            />
                        )
                    }    
                </View>   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })