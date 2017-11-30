import React, { Component } from 'react';
import { TouchableWithoutFeedback, ListView, StyleSheet, View, Text, TextInput, StatusBar, KeyboardAvoidingView, TouchableHighlight  } from 'react-native';

class TouchableCustom extends Component {
  constructor() {
    super();
    this.state = { active: false };
    this.onPressIn = () => this.setState({ active: true });
    this.onPressOut = () => this.setState({ active: false });
  }

  render() {
    const { active } = this.state;
    const { children } = this.props;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
      >
        {children(active)}
      </TouchableWithoutFeedback>
    );
  }
}

export default TouchableCustom
