import React from 'react';
import { StyleSheet, Text, View, Button, WebView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Timeline from './Timeline';
import RatingStar from './RatingStar';
import AddPostView from './AddPostView';
import UserProfile from './UserProfile';
import ModalExample from './ModalExample';
import Login from './Login';
import PostView from './PostView';
import FlatListDemo from './FlatListDemo';
import PostInterested from './PostInterested';
import ConfirmJobView from './ConfirmJobView';
import ConfirmPaymentView from './ConfirmPaymentView';
import AcceptPaymentView from './AcceptPaymentView';
import DemoFBLogin from './DemoFBLogin';
//import SimpleApp from './Timeline';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const urlBase = "https://corgoapi-v2.azurewebsites.net";
    const { navigate } = this.props.navigation;
    return (
      <WebView
        //const { navigate } = this.props.navigation;
        source={{uri: urlBase + '/login/facebook'}}
        style={{marginTop: 20}}
        onNavigationStateChange={(e) => {
          console.log(e);
          const end_url = urlBase + '/success';
           if(e.url.indexOf(end_url) > -1) {
             navigate('Timeline')
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

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Timeline: { screen: Timeline },
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
