// import React, { Component } from "react";
// import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
// import { TabNavigator, StackNavigator, TabView } from 'react-navigation';
// // import { Icon } from 'react-native-elements';


// import TimelineNavigator from './TimelineNavigator';
// // import Timeline from '../screens/Timeline';
// import AddPostView from '../screens/AddPostView';

// import Icon from 'react-native-vector-icons/Ionicons';

// const urlParamsToTimelineProps = (params) => {
//     return class extends Component {
//         render () {
//             return <TimelineNavigator screenProps={{rootNavigation: this.props.navigation, groupId: params, groupBoolean: true, url: null}} />
//         }
//     }
// }

// const listOfGroups = () => {
//     return class extends Component {
//         render () {
//             return <TimelineNavigator screenProps={{rootNavigation: this.props.navigation, groupId: null, groupBoolean: false, url: global.urlBase + '/api/' + global.id + '/group', title: ""}} />
//         }
//     }
// }

// const CustomTabNavigator = StackNavigator({
//     Groups: {
//         screen: listOfGroups()        
//     }, 
//     Timeline: {
//         screen: TimelineNavigator
//         //screen: urlParamsToTimelineProps('5a2605fdf1ad349fd0b95be3')
//     }

//   }, {
//     headerMode: 'none',
//     navigationOptions: {
//         headerVisible: false,
//     }
//     // navigationOptions: ({navigation}) => ({
//     //     headerLeft: <Icon name="md-menu" size={35} style={{padding: 20, color: '#9FDDED'}}
//     //      onPress= {() => {navigation.navigate('DrawerOpen'); console.log("this is loggin navigation " + JSON.stringify(navigation)); console.log("we have opened a drawer"); }}/>,
//     //     headerStyle: {
//     //          paddingTop: StatusBar.currentHeight,
//     //          height: 85,
//     //          borderBottomWidth: 0,
//     //          backgroundColor: '#fff',
//     //          elevation: 0,
//     //          justifyContent: 'center'
//     //        },
//     //    headerTitleStyle: {
//     //      fontWeight: 'normal',
//     //      color: '#4f4e4e'
//     //    },
//     //   })
// });



// export default CustomTabNavigator;