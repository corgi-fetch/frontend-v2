// import React, { Component } from "react";

// import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
// import {StackNavigator, DrawerNavigator} from 'react-navigation';
// import Timeline from '../screens/Timeline';
// import AddPostView from '../screens/AddPostView';
// import UserProfile from '../screens/UserProfile';
// import PostView from '../screens/PostView';
// import PostInterested from '../screens/PostInterested';
// import AddGroupView from '../screens/AddGroupView';
// import ConfirmJobView from '../screens/ConfirmJobView';
// import ConfirmPaymentView from '../screens/ConfirmPaymentView';
// import AcceptPaymentView from '../screens/AcceptPaymentView';
// import SampleApp from '../screens/SearchBarExample';
// import Logout from '../screens/Logout';
// import DynamicPostView from '../screens/DynamicPostView';


// // import MainSideBarNavigator from './MainSideBarNavigator';

// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';

// const urlParamsToTimelineProps = (params) => {
//   console.log("params in timelineNavigator " + params);
//   return class extends Component {
//       render () {
//           return <Timeline groupId={params} />
//       }
//   }
// }



// const TimelineNavigator = StackNavigator({
//   Home: {screen: Timeline},
//   // Home: {screen: DynamicPostView},
//   AddPost: { screen: AddPostView },
//   UserProfile: {screen: UserProfile},
//   Post: {screen: DynamicPostView},
//   PostInterested: {screen: PostInterested},
//   AddGroup: {screen: AddGroupView},
//   ConfirmJob: {screen: ConfirmJobView},
//   ConfirmPayment: {screen: ConfirmPaymentView},
//   // MainSideBarNavigator: {screen: MainSideBarNavigator},
//   AcceptPayment: {screen: AcceptPaymentView},
//   SearchBar: {screen: SampleApp},
//   Logout: {screen: Logout}
//   },
//   {
//     // headerMode: 'none',
//     // navigationOptions: {
//     //     headerVisible: false,
//     // }
//     navigationOptions: ({navigation}) => ({
//       // headerLeft: <Icon name="md-menu" size={35} style={{padding: 20, color: '#9FDDED'}}
//       //  onPress= {() => {
//       //    console.log("this is navigation " + JSON.stringify(navigation));   
//       //    navigation.state.params.rootNavigation.goBack(null);      
//       //    //navigation(null);
//       //  }}/>,
//       headerStyle: {
//            paddingTop: StatusBar.currentHeight,
//            height: 85,
//            borderBottomWidth: 0,
//            backgroundColor: '#fff',
//            elevation: 0,
//            justifyContent: 'center'
//          },
//      headerTitleStyle: {
//        fontWeight: 'normal',
//        color: '#4f4e4e'
//      },
//     })
//   }
// );



// export default TimelineNavigator
