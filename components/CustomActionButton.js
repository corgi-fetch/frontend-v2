import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
});

class CustomActionButton extends Component {

    constructor(props) {
        super(props);
    

        this.state = {};

    }

    componentWillMount() {
        this.setState({'groupBoolean' : this.props.groupBoolean});
        this.setState({'groupId' : this.props.groupId});
        this.setState({'refreshFunction': this.props.onNavigateBack});

    }


    render() {
        // console.log("this is cab " + JSON.stringify(this));
        console.log("cab props " + JSON.stringify(this.props));

        if (this.state.groupBoolean) {
            return (
                <ActionButton fixNativeFeedbackRadius={true} buttonColor='#9FDDED' onPress={() => {
                    console.log(this.state.groupId);
                    this.props.navigation.navigate('AddPost', {groupId: this.state.groupId, refresh: this.state.refreshFunction});
                }} degrees={0}
                    renderIcon={() => <Icon name="md-create" style={styles.actionButtonIcon} />} >
                </ActionButton>
            );
        } else {
            return (
                <ActionButton fixNativeFeedbackRadius={true} buttonColor='#9FDDED' onPress={() => {
                    // console.log(JSON.stringify(this.props));
                    this.props.navigation.navigate('AddGroup');
                }}
                    renderIcon={() => <Icon name="md-people" style={styles.actionButtonIcon} />} degrees={0}>
                    
                </ActionButton>

            );
        }

    }

}

export default CustomActionButton;