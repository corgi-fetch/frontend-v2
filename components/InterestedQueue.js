import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import {StackNavigator, DrawerNavigator, HeaderBackButton } from 'react-navigation';

import { List, ListItem } from "react-native-elements";

import RatingStar from '../RatingStar';

import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    FlatList: {
        backgroundColor: '#ffffff',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
});

class InterestedQueue extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                // 1, 2, 3, 4, 5
                {
                    userId: 1419599851427889,
                    rating: 5,
                    name: "Daniel"
                }, 
                {
                    userId: 1230838117060267,
                    rating: 5,
                    name: "Rhea"
                }, 
                {
                    userId: 100002189792673,
                    rating: 5,
                    name: "Jason"
                }, 
                {
                    userId: 100000857115595,
                    rating: 5,
                    name: "Isaac"
                }, 
                {
                    userId: 1562054263,
                    rating: 5, 
                    name: "Cody"
                },
                {
                    userId: 100002455254316,
                    rating: 5, 
                    name: "Anthony"
                }
            ]
        };
    }

    renderSeparator = () => {
        return (
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 0.5,
              width: '95%',
              alignSelf: 'center'
            }}
          />
        );
    }

    render() {
        console.log("this is the queue in this.state.data " + JSON.stringify(this.state.data));
        
        return(
            <View>
                <FlatList
                    style={styles.FlatList}
                    data={this.state.data}
                    ItemSeparatorComponent={this.renderSeparator}
                    renderItem={({item}) => {
                        console.log("this is the item " + JSON.stringify(item));
                        return (
                            <View>
                                <ListItem
                                    // title={}
                                    avatar = {
                                        <Image source={{ uri: 'http://graph.facebook.com/' + item.userId + '/picture?type=square' }}
                                        style={{borderRadius:25, height:50, width:50 }}
                                        />
                                    }
                                    containerStyle={{borderBottomWidth: 0}}
                                />
                            </View>
                    )}}
                    keyExtractor={item => item.userId}
                />

            </View>
        );
    }
}

export default InterestedQueue;