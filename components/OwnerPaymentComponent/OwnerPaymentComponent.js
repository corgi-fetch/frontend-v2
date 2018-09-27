import React, { Component } from "react";
import PropTypes from 'prop-types'

import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import {StackNavigator, DrawerNavigator, HeaderBackButton } from 'react-navigation';

import { List, ListItem } from "react-native-elements";

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Hamburger from 'react-native-hamburger';

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

function OwnerPaymentScreenComponent ({
  post,
  serviceGivenPress
}) {
  var interestedQueueText = "";

  var CreateIconCheck = <Icon
    name="md-checkmark-circle-outline"
    style={styles.actionButtonIcon}
  />

  var CreateIconX = <Icon
    name="md-close-circle"
    style={styles.actionButtonIcon}
  />

  var completeButton = <View
                      style={{
                          padding: 20
                      }}
                      >
                          <Button
                              title="JOB COMPLETED"
                              color="white"
                              onPress={serviceGivenPress}
                              buttonStyle={{
                                  backgroundColor: "green",
                              }}
                          />
                      </View>

  var waitingConfirmationButton = <View
                              style={{
                                  padding: 20
                              }}
                              >
                                  <Button
                                      title="AWAITING CONFIRMATION"
                                      color="white"
                                      //onPress
                                      disabled
                                      buttonStyle={{
                                          backgroundColor: "lightgray",
                                      }}
                                  />
                              </View>

  var button;

  //console.log("are we here " + post)
  if (post) {

    console.log("here is after we retrieve post " + JSON.stringify(post))
    if (post.serviceGiven) {
      button = waitingConfirmationButton;
      console.log("we here or nah")
    } else {
      //button = completeButton;
      button = completeButton;
      console.log("are we here")
    }

    interestedQueueText = post.interestedQueue.length.toString() + " users interested"

      return (
      <View style={ styles.mainContainer }>
          <View style={ styles.topContainer }>
            <View style={ styles.postHeaderContainer }>
              <View style={ styles.postImage }>
                <Image source={{ uri: 'http://graph.facebook.com/' + post.owner.userId + '/picture?type=square' }}
                  style={{borderRadius:25, height:50, width:50 }}
                />
              </View>
              <View style={ styles.textContainer }>
                <Text style={ styles.textBoxTitle }>
                  {post.title}
                </Text>
              </View>
            </View>
            <View style={ styles.textContainer }>
              <Text style={ styles.textPriceBox }>
                ${post.payment}
              </Text>
            </View>
            <View style={ styles.textContainer }>
              <Text style={ styles.textBox }>
                {post.description}
              </Text>
            </View>
          </View>
          <View style={ styles.bottomContainer }>
            {button}
            {/* <ActionButtonComponent
              position='center'
              offsetX={-40}
              offsetY={150}
            /> */}
          </View>
      </View>
      );
  } else {
      return (
          <View>
              <Text
                style={{
                  fontStyle: "italic"
                }}
              >
                We are still loading!
              </Text>
          </View>
      )
  }
}


export default OwnerPaymentScreenComponent
