import React from 'react';
import { StyleSheet, Text, View, Button, WebView, Platform, StatusBar } from 'react-native';
//import { StackNavigator } from 'react-navigation';

//import RatingStar from './RatingStar';


class LoginScreen extends React.Component {
  static navigationOptions = {
    //title: 'Login',
    headerStyle: {
      paddingTop: StatusBar.currentHeight,
      //backgroundColor: '#9FDDED',
      //height: 75
      height: 0

    }
  };


  render() {
    // global.urlBase = "http://192.168.0.12:8080";
    // global.urlBase = "http://192.168.1.4:8080";
    // global.urlBase = "http://127.0.0.1:8080";
    global.urlBase = "http://192.168.1.20:8080";
    // global.urlBase = "https://corgoapi-v2.azurewebsites.net";
    // global.urlBase = "http://192.168.110.2:8080/";
    // global.urlBase = "http://192.168.0.14:8080";
    // global.urlBase = "http://10.103.31.141:8080";
    // global.urlBase = "http://192.168.0.18:8080";
    // global.urlBase = "http://192.168.1.2:8080"
    // global.urlBase = "http://192.168.1.25:8080"
    // global.urlBase = "http://172.16.0.130:8080"
    // global.urlBase = "http://192.168.1.15:8080"
    // global.urlBase = "http://10.142.37.170:8080/"
    // global.urlBase = "http://10.142.44.47:8080/"
    // global.urlBase = "http://10.142.45.16:8080/"
    // global.urlBase = "http://10.142.47.124:8080/"
    // global.urlBase = "http://10.142.37.32:8080/"
    // global.urlBase = "http://10.142.46.140:8080/"
    // global.urlBase = "http://10.142.47.49:8080/"
    // global.urlBase = "http://10.142.46.143:8080/"
    // global.urlBase = "http://10.142.45.183:8080/"
    // global.urlBase = "http://10.142.46.75:8080/"
    // global.urlBase = "http://10.142.93.164:8080/"
    // global.urlBase = "http://10.142.92.186:8080"
    
    const { navigate } = this.props.navigation;
    return (
        <View>
            
        </View>
          
    );
  }
}

export default LoginScreen;