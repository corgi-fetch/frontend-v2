import React, { Component } from "react";

import {StackNavigator, DrawerNavigator, createNavigationContainer, createNavigator} from 'react-navigation';
import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
//import {StackNavigator, DrawerNavigator} from 'react-navigation';


import TimelineNavigator from './TimelineNavigator'
import Timeline from '../screens/Timeline'

class MainSideBarNavigator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  componentWillMount() {
    this.fetchData();
    //this.fetchUser();
  }

  fetchData = () => {
    //const urlBase = "https://corgoapi-v2.azurewebsites.net";

    const url = global.urlBase + '/api/master/principal';

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        //console.log('hello we are here');
        global.id = responseData;
        //console.log(global.id);
        this.fetchUser();

      })
      .done();
  }

  fetchUser = () => {
    //const urlBase = "https://corgoapi-v2.azurewebsites.net";

    const url = global.urlBase + '/api/' + global.id + '/user?userId=' + global.id;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        global.user = responseData;
        //console.log(global.user);
        this.setState({
          loading: true
        });
      })
      .done();
  }

  timelines(groups) {
    var routes = [{
      screen: TimelineNavigator/*this.getTimelineForGroup(null)*/,
      navigationOptions: {
        title: 'Timeline'
      }
    }
    ];

    // for (var group in groups) {
    //   //console.log("here is one route " + JSON.stringify(this.timeline(groups[group])));
    //   routes.push(this.timeline(groups[group]));
    // }
    //
    // for (var i = 0; i < routes.length; i++) {
    //   //console.log("here are the routes " + JSON.stringify(routes[i]));
    // }

    return routes;
  }

  timeline(group) {
    const screen = this.getTimelineForGroup(group);

    return {
      screen: screen,
      navigationOptions: {
        title: group.name
      }
    }
  }

  getTimelineForGroup(group) {
    //console.log("here in getTimelineForGroup " + JSON.stringify(group));
    if (group) {
      return ({navigation}) => (<TimelineNavigator navigation={navigation} screenProps={{groups: JSON.stringify(group)}} />);
    } else {
      return ({navigation}) => (<TimelineNavigator navigation={navigation} />);
    }
  }

  render() {
    if (this.state.loading) {
      //console.log(global.user)
      const { groups } = global.user.groups;
      //console.log('this here is a groups ' + JSON.stringify(global.user.groups));
      console.log("this is my group" + global.user.groups);
      const Drawer = DrawerNavigator(this.timelines(global.user.groups), {

      });

      //const Drawer = this.timelines(global.user.groups);
      //console.log("Drawer has been made");

      //return <Text>"this has loaded"</Text>;

      // return <Drawer />

      // const wrapper : React.SFC<{}> = () => (
      return <Drawer />
      // );
      //
      // const MainScreenNavigator = createNavigationContainer(createNavigator(wrapper)(Drawer));
      // return <MainScreenNavigator />;
    } else {
      return <Text>Loading</Text>
    }
  }


}

export default MainSideBarNavigator;
