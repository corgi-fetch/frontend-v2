import React, { Component } from "react";

import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native"
import {StackNavigator, DrawerNavigator} from 'react-navigation';

// import TimelineNavigator from './TimelineNavigator';
import StartScreen from '../screens/StartScreen/StartScreen';
// import SideBar from './SideBarNavigator';
import CreateUser from '../screens/CreateUserScreen/CreateUserScreen';
//import TimelineNavigator from './TimelineNavigator'
import GroupTimeline from "../screens/GroupTimeline/GroupTimeline";
import PostTimeline from "../screens/PostTimeline/PostTimeline";
import PostScreen from "../screens/PostScreen/PostScreen"
import CreateGroupScreen from '../screens/CreateGroupScreen/CreateGroupScreen'
import UserFetchScreen from '../screens/UserFetchScreen/UserFetchScreen'
import AddGroupView from '../screens/AddGroupView'
import AddPostView from '../screens/AddPostView'
import InterestedQueueScreen from '../screens/InterestedQueueScreen/InterestedQueueScreen'

import InterestedPostStateOne from '../screens/PostScreen/InterestedPostStates/InterestedPostStateOne'
import InterestedPostStateTwo from '../screens/PostScreen/InterestedPostStates/InterestedPostStateTwo'
import InterestedPostStateThree from '../screens/PostScreen/InterestedPostStates/InterestedPostStateThree'
import OwnerPostStateTwo from '../screens/PostScreen/OwnerPostStates/OwnerPostStateTwo'

import OwnerPaymentScreen from '../screens/PostScreen/OwnerPaymentScreen/OwnerPaymentScreen'

import PostScreenTimeline from '../screens/PostTimeline/PostScreenTimeline'
import PostHandlerScreen from '../screens/PostHandlerScreen/PostHandlerScreen'

const Navigator = StackNavigator({
    StartScreen: {screen: StartScreen},
    CreateUser: {screen: CreateUser},
    GroupTimeline: {screen: GroupTimeline},
    PostTimeline: {screen: PostTimeline},
    PostScreen: {screen: PostScreen},
    CreateGroupScreen: {screen: CreateGroupScreen},
    TempCreateGroupScreen: {screen: AddGroupView},
    TempCreatePostScreen: {screen: AddPostView},
    UserFetchScreen: {screen: UserFetchScreen},
    InterestedQueueScreen: {screen: InterestedQueueScreen},
    InterestedPostStateOne: {screen: InterestedPostStateOne},
    InterestedPostStateTwo: {screen: InterestedPostStateTwo},
    InterestedPostStateThree: {screen: InterestedPostStateThree},
    OwnerPostStateTwo: {screen: OwnerPostStateTwo},
    OwnerPaymentScreen: {screen: OwnerPaymentScreen},
    PostScreenTimeline: {screen: PostScreenTimeline},
    PostHandlerScreen: {screen: PostHandlerScreen}
}, {
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            paddingTop: StatusBar.currentHeight,
            height: 60,
            borderBottomWidth: 0,
            backgroundColor: '#fff',
            elevation: 0,
        },
        headerTitleStyle: {
            fontWeight: 'normal',
            color: '#4f4e4e'
        },
    })
})

export default Navigator
