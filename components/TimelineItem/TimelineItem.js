import React from 'react'
import PropTypes from 'prop-types'

import { ListItem } from 'react-native-elements'
import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from 'react-native'

// import styles from './TimelineItem.css'

function TimelineItem({
    title,
    description,
    owner,
    payment,
    id,
    listOfGroups,
    listOfPosts,
    onClick
}) {
    var TitleField = (
        <View style={{ flexDirection: 'row', flex: 1}}>
            <View style={{flex: 3}}>
                <Text style={{paddingLeft: 10}}>{title}</Text>
            </View>
            <View style={{flex: 1}}>
                <View style={{alignSelf: 'flex-end'}}>
                    <Text>{payment}</Text>
                </View>
            </View>
        </View>
    )

    var SubtitleField = (
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{flex: 7}}>
                <Text numberOfLines={1} style={{paddingLeft: 10, color: 'grey' }}>{description}</Text>
            </View>
            <View style={{flex: 1}} />
        </View>
    )

    var PostListAvatarField = (
        <Image 
            source={{ uri: 'http://graph.facebook.com/' + owner + '/picture?type=square' }}
            style={{borderRadius:25, height:50, width:50 }}
        />
    )

    var GroupListAvatarField = (
        <Image
            source={{ uri: 'https://loremflickr.com/320/320'}}
            style={{borderRadius:25, height:50, width:50 }}
        />
    )

    if (listOfGroups == true) {
        AvatarField = GroupListAvatarField
    } else if (listOfPosts == true) {
        AvatarField = PostListAvatarField
    } 

    return (
        <TouchableOpacity
            onPress={() => onClick(id)}
            underlayColor='black'
        >
            <ListItem
                title={TitleField}
                subtitle={SubtitleField}
                avatar={AvatarField}
                containerStyle={{borderBottomWidth: 0}}
            />
        </TouchableOpacity>

    )
}

TimelineItem.PropTypes = {
    title: PropTypes.string,

    description: PropTypes.string,

    owner: PropTypes.string,

    payment: PropTypes.number,

    id: PropTypes.string,

    listOfGroups: PropTypes.bool,

    listOfPosts: PropTypes.bool
}

TimelineItem.defaultProps = {
    title: '',

    description: '',

    owner: null,

    payment: '',

    id: null,

    listOfGroups: false,

    listOfPosts: false
}

export default TimelineItem