import React, { Component } from "react";

import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Timeline from '../screens/Timeline';
//import RatingStar from '../RatingStar';
import AddPostView from '../screens/AddPostView';
import UserProfile from '../screens/UserProfile';
//import ModalExample from '../ModalExample';
//import Login from '../Login';
import PostView from '../screens/PostView';
import PostInterested from '../screens/PostInterested';
import AddGroupView from '../screens/AddGroupView';
//import FlatListDemo from '../FlatListDemo';
//import PostInterested from '../PostInterested';
//import ConfirmJobView from '../ConfirmJobView';
//import ConfirmPaymentView from '../ConfirmPaymentView';
//import AcceptPaymentView from '../AcceptPaymentView';
//import DemoFBLogin from '../DemoFBLogin';
//import SideBar from './SideBarNavigator';
//import Homescreen from '../screens/Homescreen';



import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
//import Hamburger from 'react-native-hamburger';




const TimelineNavigator = StackNavigator({
  Home: {screen: Timeline},
  AddPost: { screen: AddPostView },
  UserProfile: {screen: UserProfile},
  Post: {screen: PostView},
  PostInterested: {screen: PostInterested},
  AddGroup: {screen: AddGroupView},
  // Drawer: {screen: SideBar}
  },
  {
    //headerMode: 'none'
    //headerMode : 'none',
    navigationOptions: ({navigation}) => ({
      headerLeft: <Icon name="md-menu" size={35} style={{padding: 20, color: '#9FDDED'}} onPress= {() => {navigation.navigate('DrawerOpen'); }}/>,
      headerStyle: {
           paddingTop: StatusBar.currentHeight,
           //backgroundColor: '#9FDDED',
           height: 85,
           borderBottomWidth: 0,
           backgroundColor: '#fff',
           elevation: 0,
           justifyContent: 'center'



         },
     headerTitleStyle: {
       //alignSelf: 'center',
       //fontFamily: 'Roboto',
       fontWeight: 'normal',
       color: '#4f4e4e'
     },
    })
  }
);



export default TimelineNavigator
