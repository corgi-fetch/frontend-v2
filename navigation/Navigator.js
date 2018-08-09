import React, { Component } from "react";

import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native"
import {StackNavigator, DrawerNavigator} from 'react-navigation';

// import TimelineNavigator from './TimelineNavigator';
import StartScreen from '../screens/StartScreen/StartScreen';
// import SideBar from './SideBarNavigator';
import CreateUser from '../screens/CreateUserScreen/CreateUserScreen';
//import TimelineNavigator from './TimelineNavigator'
import MainSideBarNavigator from './MainSideBarNavigator';
import CustomTabNavigator from './CustomTabNavigator';
import GroupTimeline from "../screens/GroupTimeline/GroupTimeline";
import PostTimeline from "../screens/PostTimeline/PostTimeline";
import PostScreen from "../screens/PostScreen/PostScreen"
import Icon from 'react-native-vector-icons/Ionicons';
import CreateGroupScreen from '../screens/CreateGroupScreen/CreateGroupScreen'
import UserFetchScreen from '../screens/UserFetchScreen/UserFetchScreen'
import AddGroupView from '../screens/AddGroupView'
import AddPostView from '../screens/AddPostView'

const Navigator = StackNavigator({
    StartScreen: {screen: StartScreen},
    CreateUser: {screen: CreateUser},
    GroupTimeline: {screen: GroupTimeline},
    PostTimeline: {screen: PostTimeline},
    PostScreen: {screen: PostScreen},
    CreateGroupScreen: {screen: CreateGroupScreen},
    TempCreateGroupScreen: {screen: AddGroupView},
    TempCreatePostScreen: {screen: AddPostView},
    UserFetchScreen: {screen: UserFetchScreen}
}, {
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            paddingTop: StatusBar.currentHeight,
            height: 85,
            borderBottomWidth: 0,
            backgroundColor: '#fff',
            elevation: 0,
            justifyContent: 'center'
        },
        headerTitleStyle: {
            fontWeight: 'normal',
            color: '#4f4e4e'
        },
    })
})

export default Navigator