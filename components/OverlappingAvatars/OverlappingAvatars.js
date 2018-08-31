import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, StatusBar} from 'react-native';
import {StackNavigator, DrawerNavigator, HeaderBackButton } from 'react-navigation';

import FacePile from 'react-native-face-pile'


function OverlappingAvatars ({
    avatar_one,
    avatar_two,
    avatar_three,
    handleClick,
    clickable
}) {

    const FACES = [
        {
            id: 0,
            imageUrl: 'http://graph.facebook.com/' + avatar_one + '/picture?type=square',
        }, 
        {
            id: 1,
            imageUrl: 'http://graph.facebook.com/' + avatar_two + '/picture?type=square',
        },
        {
            id: 2,
            imageUrl: 'http://graph.facebook.com/' + avatar_three + '/picture?type=square',
        }
    ]
    

    if (clickable) {
        return (
            <View>
                <TouchableOpacity
                    onPress={handleClick}
                >
                    <FacePile
                        numFaces={2}
                        faces={FACES}
                        circleSize={30}
                    />
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <View>
                <FacePile
                        numFaces={2}
                        faces={FACES}
                        circleSize={30}
                    />
            </View>
        )
    }
}

export default OverlappingAvatars