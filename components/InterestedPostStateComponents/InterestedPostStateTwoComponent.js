import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, StatusBar} from 'react-native';
import {StackNavigator, DrawerNavigator, HeaderBackButton } from 'react-navigation';

import OverlappingAvatars from '../../components/OverlappingAvatars/OverlappingAvatars'

import ActionButtonComponent from '../../components/ActionButtonComponent/ActionButtonComponent'
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 3
  },
  topContainer: {
    flex: 4,
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

});

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
      if (list[i].userId === obj.userId) {
          return true;
      }
  }

  return false;
}

function InterestedPostStateTwoComponent ({
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

export default InterestedPostStateTwoComponent
