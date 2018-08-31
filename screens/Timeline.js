import React, { Component } from "react";

import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import {StackNavigator, DrawerNavigator, HeaderBackButton } from 'react-navigation';

import { List, ListItem } from "react-native-elements";

import AddPostView from './AddPostView';
import UserProfile from './UserProfile';
import PostView from './PostView';
import UserPosts from './UserPosts';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Hamburger from 'react-native-hamburger';

import TimelineItem from '../components/TimelineItem/TimelineItem.js'
import TimelineComponent from '../components/TimelineComponent/TimelineComponent.js'

import CustomActionButton from '../components/CustomActionButton';

import GroupTimeline from './GroupTimeline/GroupTimeline'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnContainer: {
    flex: 1,
    padding: 7,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    padding: 10,
    margin: 5
  },
  separator: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection : 'row',
  },
  item: {
    backgroundColor: '#ffffff'
  },

  FlatList: {
    backgroundColor: '#ffffff',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

});

class Timeline extends Component {
  
  static navigationOptions = ({ navigation, screenProps }) => {
    isObject = !(Object.keys(screenProps).length === 0 && screenProps.constructor === Object);
    customProps = ((isObject) ? screenProps : navigation.state.params);
    return {
      title: ((navigation.state.params) ? navigation.state.params.title : "GROUPS"),
      headerLeft: ((customProps.groupBoolean) ? (<HeaderBackButton tintColor='#9FDDED' onPress={() => navigation.state.params.rootNavigation.goBack(null) } />) 
        :  <Image style={{width: 32, height: 32}} source={{uri: '.corgo.png'}}/>)
    };
  };

  _listViewOffset = 0

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      isActionButtonVisible: true,
      active: true,
      groups: [],
      groupBoolean: false,
      navigationProps: null
    };
  }

  componentWillMount() {
    this.state.navigationProps = ((this.props.screenProps) ? this.props.screenProps : this.props.navigation.state.params);
    this.state.groupBoolean = this.state.navigationProps.groupBoolean;
    
    if (this.state.groupBoolean) {      
      this.makeNewGroupRemoteRequest(this.state.navigationProps.groupId);
    } else { 
      this.makeNewURLRemoteRequest(this.state.navigationProps.url);
    }
  }

  handleOnNavigateBack = (foo) => {
    this.setState({
      foo
    });
  }

  fetchUser = () => {
    const url = global.urlBase + '/api/' + global.id + '/user?userId=' + global.id;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        global.user = responseData;
      })
      .done();
  }

  fetchData = () => {
    const url = global.urlBase + '/api/master/principal';

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        global.id = responseData;
        this.fetchUser();
      })
      .done();
  }

  makeNewURLRemoteRequest = (urlParam) => {
    url = urlParam;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: []
        });
        this.setState({
          data: res,
            error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  makeNewGroupRemoteRequest = (group) => {
    var url = global.urlBase + '/api/' + global.id + '/post';
    if (group) {
      url = global.urlBase + '/api/' + global.id + '/group/' + group;
    }
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: []
        });
        this.setState({
          data: (group) ? [...this.state.data, ...res.posts] : [...this.state.data, ...res],
            error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  _onPressItem(item) {
    //console.log("this is the item being pressed " + JSON.stringify(item));
    if (this.state.groupBoolean) {
      this.props.navigation.navigate('Post', {post: item});
    } else {
      this.props.screenProps.rootNavigation.navigate('Timeline', {rootNavigation: this.props.screenProps.rootNavigation, groupId: item.id, groupBoolean: true, url: null, title: item.title});
    }
  }


  renderSeparator = () => {
    return (
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
          width: '95%',
          alignSelf: 'center'
        }}
      />
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    var data = [['TIMELINE']];
    var ids = [];
    this.fetchUser();

    var retrieveUrl = global.urlBase + '/api/' + global.id + '/group/'

    return (
      
        <GroupTimeline
          url={retrieveUrl}
        />
      
    )
  }
}

export default Timeline;

/**
 * 
 * <View>
        <TimelineComponent
          data={this.state.data}
          listOfGroups
        />
 */
