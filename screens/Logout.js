import React from 'react';
import { StyleSheet, Text, View, Button, WebView, Platform, StatusBar } from 'react-native';

class Logout extends React.Component {
  static navigationOptions = {
    headerStyle: {
      paddingTop: StatusBar.currentHeight,
      height: 0

    }
  };

  render() {
    return (
      <WebView
        source={{uri: global.urlBase + '/logout'}}
      />
    );
  }
}

export default Logout;
