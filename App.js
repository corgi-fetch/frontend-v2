import React from 'react';
import { StyleSheet, Text, View, Button, WebView } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const urlBase = "http://192.168.1.4:8080";
    const { navigate } = this.props.navigation;
    return (
      <WebView
        //const { navigate } = this.props.navigation;
        source={{uri: urlBase + '/login/facebook'}}
        style={{marginTop: 20}}
        onNavigationStateChange={(e) => {
          const end_url = urlBase + '/success';
           if(e.url.indexOf(end_url) > -1) {
             navigate('Chat')
           }
          /** put your comdition here based here and close webview.
          Like if(e.url.indexOf("end_url") > -1)
          Then close webview
           */
        }}
      />
    );
  }
}




class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
