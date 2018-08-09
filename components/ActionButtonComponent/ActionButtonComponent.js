import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";

import ActionButton from 'react-native-action-button';


const styles = StyleSheet.create({
    
});

function ActionButtonComponent ({
    onClick,
    icon
}) {

    return (
        <ActionButton
            fixNativeFeedbackRadius={true}
            buttonColor='#9FDDED'
            renderIcon={() => icon}
            onPress={onClick}
        />
    )
}

ActionButtonComponent.PropTypes = {

}

ActionButtonComponent.defaultProps = {

}

export default ActionButtonComponent