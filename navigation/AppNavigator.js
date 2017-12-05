import React, { Component } from "react";

import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import {StackNavigator, DrawerNavigator} from 'react-navigation';

import HomeScreen from '../screens/Homescreen';
import SideBar from './SideBarNavigator';
import CreateUser from '../screens/CreateUser';
//import TimelineNavigator from './TimelineNavigator'
import MainSideBarNavigator from './MainSideBarNavigator';


const AppNavigator = StackNavigator({
  Home: {screen: HomeScreen},
  TimelineNavigator: {screen: SideBar},
  MainSideBarNavigator: {screen: MainSideBarNavigator},
  CreateUser: {screen: CreateUser}
  // AddPost: { screen: AddPostView },
  // UserProfile: {screen: UserProfile},
  // Post: {screen: PostView},
  // Drawer: {screen: SideBar}

}, {
  headerMode: 'none'
}
);

export default AppNavigator
