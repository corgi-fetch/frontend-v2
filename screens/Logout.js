import React from 'react';
import { StyleSheet, Text, View, Button, WebView, Platform, StatusBar } from 'react-native';
//import { StackNavigator } from 'react-navigation';

//import RatingStar from './RatingStar';

//import Timeline from './Timeline';
//import AddPostView from './AddPostView';
//import UserProfile from './UserProfile';
//import AppNavigator from '../navigation/AppNavigator';
//import PostView from './PostView';

//import PostInterested from './PostInterested';
//import ConfirmPaymentView from './ConfirmPaymentView';
//import AcceptPaymentView from './AcceptPaymentView';


//import TimelineNavigator from '../navigation/TimelineNavigator';
//import SideBar from '../navigation/SideBarNavigator';

class Logout extends React.Component {
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
    //const { navigate } = this.props.navigation;
    return (
      <WebView
        //const { navigate } = this.props.navigation;
        source={{uri: global.urlBase + '/logout'}}
        // onNavigationStateChange={(e) => {
        //   navigate('Home');
        //style={{marginTop: 20}}
        // onNavigationStateChange={(e) => {
        //   console.log(e);
        //   const end_url = global.urlBase + '/success';
        //    if(e.url.indexOf(end_url) > -1) {
        //      console.log('gothere');
        //navigate('Timeline');
      //}}
          /** put y our comdition here based here and close webview.
          Like if(e.url.indexOf("end_url") > -1)
          Then close webview
           */
      />
    );
  }
}

export default Logout;
