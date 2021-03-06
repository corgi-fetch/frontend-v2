import React, { Component } from "react";

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

  class OwnerPaymentScreen extends Component {

    static navigationOptions = ({ navigation, screenProps }) => {

      const {params = {}} = navigation.state;
      //console.log("this is params " + JSON.stringify(params))
      var title = "Loading"
      if (params.userStub) {
        var title = params.userStub.name + "'s Post"
      }
      return {
        title: title,
        headerLeft: (<HeaderBackButton tintColor='#9FDDED' onPress={() => navigation.goBack(null) } />)
      };

    };

    constructor(props) {
        super(props);
        this.state = {
          post: props.navigation.state.params.post,
        };
    }

    fetchPost = () => {
      const url = this.props.navigation.state.params.url;


      fetch(url, {
        credentials: "same-origin"
      })
        .then((response) => response.json())
        .then((responseData) => {
          //console.log("testing" + JSON.stringify(responseData))
          this.props.navigation.setParams({
            userStub: responseData.owner,
          })
          this.setState({
            post: responseData
          })


        })
        .done()

    }

    componentDidMount() {
      this.fetchPost();
    }


    serviceGivenPress = () => {
      fetch(global.urlBase + '/api/' + global.id + '/confirmation/' + this.state.post.id, {
        method: "put",
        credentials: "same-origin",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then( (responseData) => {
        console.log(JSON.stringify(responseData))
        this.setState({
          post: responseData
        })
      });
    }





    render() {
      const { navigate } = this.props.navigation;
      post = this.state.post;

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
                                          //onPress
                                          disabled
                                          buttonStyle={{
                                              backgroundColor: "lightgray",
                                          }}
                                      />
                                  </View>

      // var actionButtons = []
      // actionButtons.push(<ActionButtonComponent
      //   position='center'
      //   offsetX={-50}
      //   offsetY={130}
      //   size={84}
      //   buttonColor='lightgrey'
      //   icon={CreateIconCheck}
      //   hideShadow={true}
      //   key={2}
      // />)
      // actionButtons.push(<ActionButtonComponent
      //   position='center'
      //   offsetX={50}
      //   offsetY={130}
      //   size={84}
      //   buttonColor='#f44259'
      //   icon={CreateIconX}
      //   key={1}
      //   onClick={this.removeInterestedQueueOnClick}
      // />)



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
      }


      if (post) {
        interestedQueueText = post.interestedQueue.length.toString() + " users interested"
      }

      //console.log("this is post " + JSON.stringify(post))



      //console.log("are we here " + post)
      if (post) {
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
  }

  export default OwnerPaymentScreen
