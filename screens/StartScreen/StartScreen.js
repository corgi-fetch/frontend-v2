import React from 'react';
import { StyleSheet, Text, View, Button, WebView, Platform, StatusBar } from 'react-native';
//import { StackNavigator } from 'react-navigation';

//import RatingStar from './RatingStar';


class StartScreen extends React.Component {
  static navigationOptions = {
    //title: 'Login',
    headerStyle: {
      paddingTop: StatusBar.currentHeight,
      //backgroundColor: '#9FDDED',
      //height: 75
      height: 0

    }
  };

  existingUser = () => {
    const url = global.urlBase + '/api/master/principal';

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        global.id = responseData
        // this.fetchUser()
        var retrieveGroupsUrl = global.urlBase + '/api/' + global.id + '/group/'
        this.props.navigation.navigate('GroupTimeline', {
          url: retrieveGroupsUrl
        })
      })
  }

  render() {
    // global.urlBase = "http://192.168.0.12:8080";
    // global.urlBases = "http://192.168.1.4:8080";
    // global.urlBase = "http://127.0.0.1:8080";
    // global.urlBase = "http://192.168.1.20:8080/";
    // global.urlBase = "https://corgoapi-v2.azurewebsites.net";
    // global.urlBase = "http://192.168.110.2:8080/";
    // global.urlBase = "http://192.168.0.14:8080";
    // global.urlBase = "http://10.103.31.141:8080";
    // global.urlBase = "http://192.168.0.18:8080";
    // global.urlBase = "http://192.168.1.2:8080"
    // global.urlBase = "http://192.168.1.25:8080"
    global.urlBase = "http://172.16.0.130:8080"
    const { navigate } = this.props.navigation;
    return (
      <WebView
        source={{uri: global.urlBase + '/login/facebook'}}
        //style={{marginTop: 20}}
        onNavigationStateChange={(e) => {
          const end_url = global.urlBase + '/success';
          const other_url = global.urlBase + '/newuser';
           if(e.url.indexOf("success") > -1) {
             this.existingUser()
           } else if (e.url.indexOf("newuser") > -1) {
             navigate('CreateUser');
           }
        }}
      />
    );
  }
}

export default StartScreen;
