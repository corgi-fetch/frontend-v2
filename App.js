import React from 'react';
import { StyleSheet, Text, View, Button, WebView, Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import RatingStar from './RatingStar';

import Timeline from './screens/Timeline';
import AddPostView from './screens/AddPostView';
import UserProfile from './screens/UserProfile';
import PostView from './screens/PostView';
import PostInterested from './screens/PostInterested';
import ConfirmJobView from './screens/ConfirmJobView';
import ConfirmPaymentView from './screens/ConfirmPaymentView';
import AcceptPaymentView from './screens/AcceptPaymentView';

import Navigator from './navigation/Navigator'


// import TimelineNavigator from './navigation/TimelineNavigator';
// import SideBar from './navigation/SideBarNavigator';
import AppNavigator from './navigation/AppNavigator';
//import SideBar from './Timeline';
//import SimpleApp from './Timeline';

//   render() {
//     global.urlBase = "http://corgoapi-v2.azurewebsites.net/";
//     const { navigate } = this.props.navigation;
//     return (
//       <WebView
//         //const { navigate } = this.props.navigation;
//         source={{uri: global.urlBase + '/login/facebook'}}
//         //style={{marginTop: 20}}
//         onNavigationStateChange={(e) => {
//           console.log(e);
//           const end_url = global.urlBase + '/success';
//            if(e.url.indexOf(end_url) > -1) {
//              console.log('gothere');
//              navigate('Timeline');
//            }
//           /** put y our comdition here based here and close webview.
//           Like if(e.url.indexOf("end_url") > -1)
//           Then close webview
//            */
//         }}
//       />
//     );
//   }
// }







// class ChatScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Chat with Lucy',
//   };
//   render() {
//     return (
//       <View>
//         <Text>Chat with Lucy</Text>
//       </View>
//     );
//   }
// }

// const SimpleApp = StackNavigator({
//   Home: { screen: HomeScreen },
//   Timeline: { screen: Timeline },
// });

export default class App extends React.Component {
  render() {
    return <Navigator />;
    //return <DrawerStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,

  }
});
