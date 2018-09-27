import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, StatusBar} from 'react-native';
import {StackNavigator, DrawerNavigator, HeaderBackButton } from 'react-navigation';

import TimelineComponent from '../../components/TimelineComponent/TimelineComponent'

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

class InterestedQueueScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => {
    
        return {
            title: "Interested Queue",
            headerLeft: (<HeaderBackButton tintColor='#9FDDED' onPress={() => navigation.goBack(null) } />) 
        };
        
    };

    constructor(props) {
        super(props);
        //console.log(JSON.stringify(this.props.navigation))
        this.state = {
            data: this.props.navigation.state.params.data,
            postId: this.props.navigation.state.params.postId
            
        };
    }

    handleClick = (id, state, userStub) => {
      fetch(global.urlBase + '/api/' + global.id + '/post/' + this.state.postId, {
        method: "post",
        credentials: "same-origin",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        body: JSON.stringify(userStub)
      })
      .then((response) => response.json())
      .then( (responseData) => {
        console.log(responseData)
        
      });
    }

    render () {
        console.log("testing " + JSON.stringify(this.state.data))
        return (
            <TimelineComponent
                listOfUsers
                data={this.state.data}
                onClick={this.handleClick}
            />
            
        )

    }
  
}

export default InterestedQueueScreen