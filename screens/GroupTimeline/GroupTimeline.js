import React, { Component } from "react";
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

class GroupTimeline extends Component {


    static navigationOptions = ({ navigation, screenProps }) => {
      return {
        title: "GROUPS"
      }
    }

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {

        fetch(this.props.navigation.state.params.url, {
          credentials: "same-origin"
        })
            .then(res => res.json())
            .then(res => {
              console.log("this is the res in GROUP TIMELINE")
              console.log(res);
                this.setState({
                    data: []
                })
                this.setState({
                    data: [...this.state.data, ...res.groups]
                })

            })
    }

    handleClick = (id) => {
      var retrievePostsUrl = global.urlBase + '/api/' + global.id + '/group/' + id
      this.props.navigation.navigate('PostTimeline', {
        url: retrievePostsUrl,
        groupId: id
      })
    }

    actionButtonOnClick = () => {
      this.props.navigation.navigate('TempCreateGroupScreen')
    }

    render() {
        // console.log(this.state.data)
        // urlParam = this.props.navigation.state.params.url
        var GroupIcon = <Icon
                          name="md-people"
                          style={styles.actionButtonIcon}
                        />

        return (
            <TimelineComponent
                data={this.state.data}
                listOfGroups
                onClick={this.handleClick}
                actionButtonIcon={GroupIcon}
                actionButtonOnClick={this.actionButtonOnClick}
            />
        )
    }
}
export default GroupTimeline
