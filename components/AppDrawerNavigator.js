import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'; 
import {AppTabNavigator} from './AppTabNavigator.js'; 
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyBartersScreen from '../screens/MyBartersScreen';
import NotificationScreen from '../screens/NotificationScreen'
import MyReceivedItemScreen from '../screens/MyReceivedItemScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    MyBarters:{
        screen:MyBartersScreen
    },
    Notifications:{
        screen:NotificationScreen
    },
    MyReceivedBooks:{
        screen:MyReceivedItemScreen
    },
    Setting:{
        screen:SettingScreen
    },
},
    {
        contentComponent:CustomSideBarMenu
    },
    {
        initialRouteName:"Home"
    }
);