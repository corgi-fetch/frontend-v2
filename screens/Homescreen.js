import React from 'react';
import { StyleSheet, Text, View, Button, WebView, Platform, StatusBar } from 'react-native';
//import { StackNavigator } from 'react-navigation';

//import RatingStar from './RatingStar';

import Timeline from './Timeline';
import AddPostView from './AddPostView';
import UserProfile from './UserProfile';


import PostView from './PostView';

import PostInterested from './PostInterested';
import ConfirmJobView from './ConfirmJobView';
import ConfirmPaymentView from './ConfirmPaymentView';
import AcceptPaymentView from './AcceptPaymentView';


import TimelineNavigator from '../navigation/TimelineNavigator'
import SideBar from '../navigation/SideBarNavigator';

class HomeScreen extends React.Component {
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
    //global.urlBase = "http://127.0.0.1:8080";
    //global.urlBase = "https://corgoapi-v2.azurewebsites.net";
    global.urlBase = "http://192.168.1.4:8080";
    const { navigate } = this.props.navigation;
    return (
      <WebView
        //const { navigate } = this.props.navigation;
        source={{uri: global.urlBase + '/login/facebook'}}
        //style={{marginTop: 20}}
        onNavigationStateChange={(e) => {
          console.log(e);
          const end_url = global.urlBase + '/success';
          const other_url = global.urlBase + '/newuser';
           if(e.url.indexOf(end_url) > -1) {
             console.log('gothere');
             navigate('MainSideBarNavigator');
           } else if (e.url.indexOf(other_url) > -1) {
             console.log('create new user');
             navigate('CreateUser');
           }
          /** put y our comdition here based here and close webview.
          Like if(e.url.indexOf("end_url") > -1)
          Then close webview
           */
        }}
      />
    );
  }
}

export default HomeScreen;
