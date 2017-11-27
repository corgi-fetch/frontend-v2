import React, { Component } from "react";

import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import {StackNavigator, DrawerNavigator} from 'react-navigation';

//import Timeline from '../Timeline';
import UserProfile from '../screens/UserProfile';
import UserPosts from '../screens/UserPosts';
import Icon from 'react-native-vector-icons/Ionicons';
//import Hamburger from 'react-native-hamburger';
//import HomeScreen from '../screens/Homescreen';
import TimelineNavigator from './TimelineNavigator';

const SideBar = DrawerNavigator ({
    // Home: {
    //   screen: HomeScreen
    // },
    TimelineNavigator: {
      screen: TimelineNavigator
    },
    UserProfile: {
      screen: UserProfile
    },
    UserPosts: {
      screen: UserPosts
    },

},
{
  // navigationOptions: ({navigation}) => ({
  //   headerLeft: <Icon name="md-menu" size={35} style={{padding: 20, color: '#9FDDED'}} onPress= {() => {navigation.navigate('DrawerOpen'); }}/>,
  //   headerStyle: {
  //        paddingTop: StatusBar.currentHeight,
  //        //backgroundColor: '#9FDDED',
  //        height: 85,
  //        borderBottomWidth: 0,
  //        backgroundColor: '#fff',
  //        elevation: 0,
  //        justifyContent: 'center'
  //
  //
  //
  //      },
  //  headerTitleStyle: {
  //    //alignSelf: 'center',
  //    fontFamily: 'Roboto',
  //    fontWeight: 'normal',
  //    color: '#4f4e4e'
  //  },
  // })
  // drawerPosition: 'left',
  // navigationOptions: ({navigation}) => ({
  //   headerTitleStyle: {
  //     //alignSelf: 'center',
  //     fontFamily: 'Roboto',
  //     fontWeight: 'normal',
  //     color: '#4f4e4e'
  //   },
  // })
  // navigationOptions: ({navigation}) => ({
  //   headerLeft: <Icon name="md-menu" size={35} style={{padding: 20, color: '#9FDDED'}} onPress= {() => {navigation.navigate('DrawerOpen'); console.log(navigation); }}/>,
  // })
});

export default SideBar
