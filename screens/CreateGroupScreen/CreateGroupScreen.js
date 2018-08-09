import React, { Component } from 'react';
import { FlatList, ListView, StyleSheet, View, Text, Image, TextInput, StatusBar, KeyboardAvoidingView, TouchableHighlight, Button, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { FormLabel, FormInput, SearchBar, List, ListItem } from 'react-native-elements';
import TimelineComponent from '../../components/TimelineComponent/TimelineComponent'



const styles = StyleSheet.create({
    button: {
      borderColor: '#9FDDED',
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: 'white'
    },
    buttonPress: {
      borderColor: '#9FDDED',
      backgroundColor: '#9FDDED',
      borderWidth: 1,
      borderRadius: 10,
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });

class CreateGroupScreen extends Component {

    static navigationOptions = ({ navigation, screenProps }) => {
        return {
            title: "CREATE NEW GROUP"
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            data: []
        }

    }

    componentDidMount() {
        var retrieveUsersUrl = global.urlBase + '/api/master/user' 
        fetch(retrieveUsersUrl)
            .then(res => res.json())
            .then(res => {
                
            })
    }

    render () {
        return (
            <View>
                <Text>Texting </Text>
                <TimelineComponent
                />
            </View>
        )
    }
  }

  export default CreateGroupScreen