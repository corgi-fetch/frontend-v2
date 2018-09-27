import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";

import ActionButton from 'react-native-action-button';


const styles = StyleSheet.create({
    
});

function ActionButtonComponent ({
    onClick,
    icon,
    position,
    offsetX,
    offsetY,
    size,
    buttonColor,
    hideShadow
}) {
    if (!position) {
        position = 'right'
    }

    if (!buttonColor) {
        buttonColor = '#9FDDED'
    }

    return (
        <ActionButton
            fixNativeFeedbackRadius={true}
            // useNativeFeedback={false}
            buttonColor={buttonColor}
            renderIcon={() => icon}
            onPress={onClick}
            position={position}
            offsetX={offsetX}
            offsetY={offsetY}
            size={size}
            hideShadow={hideShadow}
        />
    )
}

// ActionButtonComponent.PropTypes = {

// }

ActionButtonComponent.defaultProps = {

}

export default ActionButtonComponent