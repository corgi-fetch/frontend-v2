import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";


class UserFetchScreen extends Component {
    constructor(props) {
        super(props);
    }

    
    existingUser = () => {
        const url = global.urlBase + '/api/master/principal';

        console.log("we are in existing user")
    
        fetch(url)
          .then((response) => response.json())
          .then((responseData) => {
            global.id = responseData

            
            var userStubUrl = global.urlBase + '/api/' + global.id + '/user/' + global.id
            // this.fetchUser()

            fetch(userStubUrl)
                .then((response) => response.json())
                .then((responseData) => {
                    global.userStub = responseData
                    var retrieveGroupsUrl = global.urlBase + '/api/' + global.id + '/group/'
                    this.props.navigation.navigate('GroupTimeline', {
                        url: retrieveGroupsUrl
                    })

                })

            
          })
    }
    
    componentDidMount() {
        this.existingUser()
    }

    render() {
        return (
            <Text>Loading</Text>
        )
    }

}

export default UserFetchScreen