import React, { Component } from "react";
import PropTypes from 'prop-types'

import { Button } from 'react-native-elements';
import { View, Text, FlatList, StyleSheet, Image, AppRegistry, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import {StackNavigator, DrawerNavigator, HeaderBackButton } from 'react-navigation';

import { List, ListItem } from "react-native-elements";

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Hamburger from 'react-native-hamburger';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 3
  },
  topContainer: {
    flex: 4,
    flexDirection: 'column',
    paddingTop: 100
  },
  bottomContainer: {
    flex: 6,
    padding: 5,
    alignItems: 'center'
  },
  textContainer: {
    paddingLeft: 10,
    flexDirection: 'row',

  },
  postHeaderContainer: {
    flexDirection: 'row',
    padding: 5,
    paddingBottom: 12.5,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  textBox: {
    // fontSize: 16
  },
  textPriceBox: {
    color: '#29a329'
  },
  textBoxHeader: {
    paddingRight: 5,
    // fontSize: 16
    fontWeight: 'bold'

  },
  textBoxTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  postImage: {
    paddingLeft: 5,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  }


});

function OwnerPaymentScreenComponent ({
  post,
  serviceGivenPress,
  paymentInfo
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
                                  title="PAYMENT COMPLETED"
                                  color="white"
                                  onPress={this.serviceGivenPress}
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
                                      onPress={() => {console.log("printing stuff")}}
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
      button = completeButton;
      console.log("we here or nah")
    } else {
      //button = completeButton;
      button = waitingConfirmationButton;
      console.log("are we here")
    }

    interestedQueueText = post.interestedQueue.length.toString() + " users interested"

      return (
      <View style={ styles.mainContainer }>
          <View style={ styles.topContainer }>
            <View style={styles.paymentContainer}>
              <View style={styles.column}>
                <View >
                  <Text>
                    Please venmo {post.responderUserId.bankAccount}
                  </Text>
                </View>
                <View style={styles.paymentContainer}>
                  <Image source={{ uri: 'http://graph.facebook.com/' + post.owner.userId + '/picture?type=square' }}
                    style={{borderRadius:25, height:50, width:50 }}
                  />
                </View>
                <View style={styles.paymentContainer}>
                  <Text>
                    ${post.payment}
                  </Text>
                </View>
              </View>
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
