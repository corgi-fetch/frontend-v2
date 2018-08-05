// import React, { Component } from "react";

// import {StackNavigator, DrawerNavigator, TabNavigator, createNavigationContainer, createNavigator} from 'react-navigation';
// import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";

// import TimelineNavigator from './TimelineNavigator'
// import Timeline from '../screens/Timeline'

// import CustomTabNavigator from './CustomTabNavigator'

// class MainSideBarNavigator extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: false
//     };
//   }

//   componentWillMount() {
//     this.fetchData();
//   }

//   fetchData = () => {
//     const url = global.urlBase + '/api/master/principal';

//     fetch(url)
//       .then((response) => response.json())
//       .then((responseData) => {
//         global.id = responseData;
//         this.fetchUser();
//       })
//       .done();
//   }

//   fetchUser = () => {
//     const url = global.urlBase + '/api/' + global.id + '/user?userId=' + global.id;
//     fetch(url)
//       .then((response) => response.json())
//       .then((responseData) => {
//         global.user = responseData;
//         this.setState({
//           loading: true
//         });
//       })
//       .done();
//   }

//   timelines(groups) {
//     var routes = [{
//       screen: TimelineNavigator,
//       navigationOptions: {
//         title: 'Timeline'
//       }
//     }
//     ];

//     return routes;
//   }

//   timeline(group) {
//     const screen = this.getTimelineForGroup(group);

//     return {
//       screen: screen,
//       navigationOptions: {
//         title: group.name
//       }
//     }
//   }

//   getTimelineForGroup(group) {    
//     if (group) {
//       return ({navigation}) => (<TimelineNavigator navigation={navigation} screenProps={{groups: JSON.stringify(group)}} />);
//     } else {
//       return ({navigation}) => (<TimelineNavigator navigation={navigation} />);
//     }
//   }

//   render() {
//     if (this.state.loading) {
//       const { groups } = global.user.groups;
//       // console.log("this is my group" + global.user.groups);
//       // const Tab = TabNavigator(this.timelines(global.user.groups), {
//       // });

//       return <CustomTabNavigator />
//     } else {
//       return <Text>Loading</Text>
//     }
//   }


// }

// export default MainSideBarNavigator;
