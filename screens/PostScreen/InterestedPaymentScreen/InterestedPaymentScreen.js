import React, { Component } from "react";
import PropTypes from 'prop-types'

import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import {StackNavigator, DrawerNavigator, HeaderBackButton } from 'react-navigation';

import { List, ListItem } from "react-native-elements";

import AddPostView from '../AddPostView';
import UserProfile from '../UserProfile';
import PostView from '../PostView';
import UserPosts from '../UserPosts';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Hamburger from 'react-native-hamburger';

import TimelineItem from '../../components/TimelineItem/TimelineItem.js'
import TimelineComponent from '../../components/TimelineComponent/TimelineComponent.js'

import CustomActionButton from '../../components/CustomActionButton';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    priceContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    rowContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    columnContainer: {
      flex: 1,
      padding: 7,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    titleText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 16,
    },
    photo: {
      height: 40,
      width: 40,
      borderRadius: 20,
      padding: 10,
      margin: 5
    },
    separator: {
      flex: 1,
    },
    buttonContainer: {
      flexDirection : 'row',
    },
    item: {
      backgroundColor: '#ffffff'
    },
  
    FlatList: {
      backgroundColor: '#ffffff',
      borderTopWidth: 0,
      borderBottomWidth: 0
    },
  
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  
  });