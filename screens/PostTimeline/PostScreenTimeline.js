import React, { Component } from "react";
import PropTypes from 'prop-types'

import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar, RefreshControl } from "react-native";
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

class PostScreenTimeline extends Component {

    static navigationOptions = ({ navigation, screenProps }) => {
        return {
          title: "POSTS"
        }
      }

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            userStub: null,
            refreshing: false
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
      fetch(this.props.navigation.state.params.url, {
        credentials: "same-origin"
      })
          .then((res) => res.json())
          .then((res) => {
              console.log(JSON.stringify(res))
              this.setState({
                  data: [...res.posts],
                  refreshing: false
              })

          })
          .catch(error => {
              console.log('this is an error ' + error)
          })
    }

    _onRefresh = () => {
      this.setState({refreshing: true});
      this.fetchData();
    }

    handleClick = (id, state, ownerId) => {
      var retrievePostsUrl = global.urlBase + '/api/' + global.id + '/post/' + id

      console.log("This is owner in PostScreenTimeline " + ownerId);
      this.props.navigation.navigate('PostHandlerScreen', {
          owner: ownerId,
          state: state,
          url: retrievePostsUrl
      })
    }


    actionButtonOnClick = () => {
      this.props.navigation.navigate('TempCreatePostScreen', {
        groupId: this.props.navigation.state.params.groupId
      })
      // console.log("hello")
    }

    render() {

      var CreateIcon = <Icon
                          name="md-create"
                          style={styles.actionButtonIcon}
                        />

        return (
            <TimelineComponent
                data={this.state.data}
                listOfPosts={true}
                onClick={this.handleClick}
                actionButtonIcon={CreateIcon}
                actionButtonOnClick={this.actionButtonOnClick}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                  />
                }
            />
        )
    }
}
export default PostScreenTimeline
