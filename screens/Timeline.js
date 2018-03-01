import React, { Component } from "react";

import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import {StackNavigator, DrawerNavigator} from 'react-navigation';

import { List, ListItem } from "react-native-elements";

//import RatingStar from './RatingStar';

import AddPostView from './AddPostView';
import UserProfile from './UserProfile';
import PostView from './PostView';
import UserPosts from './UserPosts';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Hamburger from 'react-native-hamburger';
//import Button from 'apsl-react-native-button';
//import TimelineNavigator from './navigation/TimelineNavigator'
//Home: { screen: Timeline},

// import DropdownMenu from 'react-native-dropdown-menu';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 50,
    // ...Platform.select({
    //   android: {
    //     paddingTop: StatusBar.currentHeight
    //   }
    //  })

    //backgroundColor: FFFFFF
    //backgroundColor: '#ffffff'
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rowContainer: {
    flex: 1,
    //padding: 2,
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
    //marginLeft: 2,
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
    //height: StyleSheet.hairlineWidth,
    //backgroundColor: '#8E8E8E',
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
  //backgroundColor: 'blue'

});

class Timeline extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
      // headerStyle: {
      //   paddingTop: StatusBar.currentHeight,
      //   //backgroundColor: '#9FDDED',
      //   height: 85,
      //   borderBottomWidth: 0,
      //   backgroundColor: '#fff',
      //   elevation: 0,
      //   justifyContent: 'center'
      //
      //
      //
      // },
      // headerTitleStyle: {
      //   //alignSelf: 'center',
      //   fontFamily: 'Roboto',
      //   fontWeight: 'normal',
      //   color: '#4f4e4e'
      // },

    title: "TIMELINE",

    //headerLeft: <Image source={require("./menu-icon.png")} onPress={() => navigate('DrawerOpen')} />,
  });

  _listViewOffset = 0

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      //page: 1,
      //seed: 1,
      error: null,
      refreshing: false,
      isActionButtonVisible: true,
      active: true,
      groups: []
    };
  }

  componentWillMount() {
    // this.fetchData();
    // if (this.props.screenProps && this.props.screenProps.groups) {
    //
    //   console.log("we're here looking at groups" + JSON.parse(this.props.screenProps.groups).posts);
    //   if (this.props.screenProps.groups.posts == null) {
    //     //this.props.screenProps.groups.posts = [];
    //     console.log("we're in the null check");
    //   } else {
    //     this.setState({
    //       data: [...this.state.data, ...this.props.screenProps.groups.posts]
    //     });
    //   }
    // }
    console.log("We're look at screenProps " + this.props.screenProps);

    console.log("remote request made");
    this.makeNewRemoteRequest('5a2605fdf1ad349fd0b95be3');
    // this.makeRemoteRequest();

    console.log("this is user " + global.user);
    console.log("this is id " + global.id);
    //console.log("this is group prop " + JSON.stringify(this.props));
  }

  fetchUser = () => {
    //const urlBase = "https://corgoapi-v2.azurewebsites.net";

    const url = global.urlBase + '/api/' + global.id + '/user?userId=' + global.id;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        global.user = responseData;
        console.log(global.user);
      })
      .done();
  }

  fetchData = () => {
    //const urlBase = "https://corgoapi-v2.azurewebsites.net";

    const url = global.urlBase + '/api/master/principal';

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        global.id = responseData;
        this.fetchUser();
        //console.log(global.id);
      })
      .done();
  }

  // makeRemoteRequest = () => {
  //   //const urlBase = "https://corgoapi-v2.azurewebsites.net";
  //   //const { page, seed } = this.state;
  //   var group = this.props.screenProps;
  //
  //   var url = global.urlBase + '/api/' + global.id + '/post';
  //   if (group) {
  //     console.log("this is in the if statement " + JSON.parse(group.groups).id);
  //     url = global.urlBase + '/api/' + global.id + '/group/' + JSON.parse(group.groups).id;
  //   }
  //   //const url = global.urlBase + '/api/' + global.id + '/post';
  //   //const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
  //   this.setState({ loading: true });
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       //console.log("We're fetching here " + JSON.stringify(res));
  //       this.setState({
  //         data: (group) ? [...this.state.data, ...res.posts] : [...this.state.data, ...res],
  //         //data: page === 1 ? res.results : [...this.state.data, ...res.results],
  //         error: res.error || null,
  //         loading: false,
  //         refreshing: false,
  //       });
  //     })
  //     .catch(error => {
  //       this.setState({ error, loading: false });
  //       //console.log("we're in data " + this.state.data);
  //     });
  // };

  makeNewRemoteRequest = (group) => {
    console.log("got to the groups request");
    var url = global.urlBase + '/api/' + global.id + '/post';
    if (group) {
      //console.log("this is in the if statement " + JSON.parse(group.groups).id);
      url = global.urlBase + '/api/' + global.id + '/group/' + group;
    }
    console.log(url);
    //const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        //console.log("We're fetching here " + JSON.stringify(res));
        this.setState({
          data: []
        });
        this.setState({
          data: (group) ? [...this.state.data, ...res.posts] : [...this.state.data, ...res],
          //data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.log("we're in new data " + this.state.data);
      });
  };

  _onPressItem(item) {
    if(item.owner == global.id) {
      if(item.selectedUserId == null)
      {
        this.props.navigation.navigate('PostInterested', {item: item,});
      } else if(item.selectedUserId != null && item.responderUserId != null) {
        this.props.navigation.navigate('ConfirmPayment', {item: item,});
        if(item.serviceReceived == true) {
          console.log("i think it worked!");
        }
      }
    } else {
      if(item.selectedUserId != null) {
        if(global.user.userId == item.selectedUserId) {
          if(item.serviceReceived == true) {
            this.props.navigation.navigate('AcceptPayment', {item: item,});
          } else {
            this.props.navigation.navigate('ConfirmJob', {item: item,});
          }
        } else {
          this.props.navigation.navigate('Post', {item: item,});
        }
      } else {
        this.props.navigation.navigate('Post', {item: item,});
      }
    }
  }




  render() {
    //this.forceUpdate();
    const { navigate } = this.props.navigation;
    //console.log("this is the navigation " + navigate);
    var data = [['TIMELINE']];
    var ids = [];
    this.fetchUser();
    console.log('these are groups ' + JSON.stringify(global.user.groups[0].name));
    // for (var i = 0; i < global.user.groups.length; i++) {
    //   data[0].push(global.user.groups[i].name);
    //   ids[global.user.groups[i].name] = global.user.groups[i].id;
    //   console.log(ids[global.user.groups[i].name]);
    // }



    console.log('take this for data ' + JSON.stringify(data));

    //console.log("We are in the data getting owner " + JSON.stringify(this.state.data));
    if (this.state.data) {
      console.log("we're in the not null render" + navigate);
      return (
          <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
              <FlatList
                style={styles.FlatList}
                data={this.state.data}
                renderItem={({ item }) => {
                  return(
                    <TouchableOpacity onPress={() =>
                      this._onPressItem(item)} underlayColor='black' >
                      <ListItem
                        title={
                          <View style={{ flexDirection: 'row', flex: 1}}>
                            <View style={{flex: 3}}>
                              <Text style={{paddingLeft: 10}}>{item.title}</Text>
                            </View>
                            <View style={{flex: 1}}>
                              <Text style={{textAlign: 'right'}}>${item.payment}</Text>
                            </View>
                          </View>
                        }
                        subtitle={
                          <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{flex: 7}}>
                              <Text numberOfLines={1} style={{paddingLeft: 10, color: 'grey' }}>{item.description != null && item.description}</Text>
                            </View>
                            <View style={{flex: 1}} />
                          </View>
                        }
                        avatar = {
                          <Image source={{ uri: 'http://graph.facebook.com/' + item.owner + '/picture?type=square' }}
                            style={{borderRadius:25, height:50, width:50 }}
                          />
                        }
                        containerStyle={{borderBottomWidth: 0}}
                        />

                      </TouchableOpacity>

                    )}
                  }
                keyExtractor={item => item.id}
                />
                <ActionButton fixNativeFeedbackRadius={true} buttonColor='#9FDDED'>
                  <ActionButton.Item buttonColor='#9FDDED' title="New Post" onPress={() => navigate('AddPost')}>
                    <Icon name="md-create" style={styles.actionButtonIcon} />
                  </ActionButton.Item>
                  <ActionButton.Item buttonColor='#9FDDED' title="New Group" onPress={() => navigate('AddGroup')}>
                    <Icon name="md-people" style={styles.actionButtonIcon} />
                  </ActionButton.Item>
                </ActionButton>

            </View>

          );
      } else {
        console.log("we're in the null render" + navigate);
        return (
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
              <ActionButton fixNativeFeedbackRadius={true} buttonColor='#9FDDED'>
                <ActionButton.Item buttonColor='#9FDDED' title="New Post" onPress={() => navigate('AddPost')}>
                  <Icon name="md-create" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#9FDDED' title="New Group" onPress={() => navigate('AddGroup')}>
                  <Icon name="md-people" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#9FDDED' title="Logout" onPress={() => navigate('Logout')}>
                  <Icon name="md-people" style={styles.actionButtonIcon} />
                </ActionButton.Item>
              </ActionButton>
            </View>
        );
      }
    }
  }


  // <DropdownMenu style={{flex: 1}}
  //     data={data}
  //     handler={(selection, row) => this.makeNewRemoteRequest(ids[data[selection][row]])}
  // >
//AppRegistry.registerComponent('Corgo', () => Timeline);
export default Timeline;
