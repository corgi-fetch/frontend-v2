import React, { Component } from 'react';
import { FlatList, ListView, StyleSheet, View, Text, Image, TextInput, StatusBar, KeyboardAvoidingView, TouchableHighlight, Button, TouchableOpacity, Platform  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { FormLabel, FormInput, SearchBar, List, ListItem } from 'react-native-elements';

import TouchableCustom from '../components/TouchableCustom'


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var contains = function(needle) {
    var findNaN = needle !== needle;
    var indexOf;

    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                var item = this[i];

                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle);
};


const styles = StyleSheet.create({
  button: {
    borderColor: '#9FDDED',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  buttonPress: {
    borderColor: '#9FDDED',
    backgroundColor: '#9FDDED',
    borderWidth: 1,
    borderRadius: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

class AddGroupView extends Component {

  constructor(props) {
      super(props);
      this.state = {
        titleText: '',
        // description: '',
        data: [],
        searchResults: [],
        pressStatus: false,
        selectedUsers: [global.id],
        renderResults: false
      };
  }

  getFullUsers() {
      return new Promise((resolve, reject) => {
        var url = global.urlBase + '/api/' + global.id + '/user/'
        let fetches = [];
        let arr = [];

        for (let x = 0; x < this.state.selectedUsers.length; x++) {
          fetches.push(
            fetch(url + this.state.selectedUsers[x], {
              credentials: "same-origin"
            })
              .then((response) => response.json())
              .then((responseData) => {
                arr[x] = responseData;
                //console.log();
            })
          )
        }

        Promise.all(fetches).then(() => {
          resolve(arr);
        })
      });
    }


  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = global.urlBase + '/api/master/user';

    this.setState({ loading: true });
    fetch(url, {
      credentials: "same-origin"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: [...this.state.data, ...res],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.log(error);
      });
  };

  search = (searchedText) => {
    this.setState({renderResults: true});
    console.log("we are searching...");
    var searchResults = this.state.data.filter(function(text) {
      return text.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
    });
    this.setState({searchResults: searchResults});
  };

  pressed = (data) => {
    this.setState({renderResults: false});


    console.log('what is going on here ' + this.state.selectedUsers);
    data = data.userId;
    this.searchBar.clearText();
    this.setState({searchResults: []})
    var currentSelectedUsers = this.state.selectedUsers.slice();

    var index = contains.call(this.state.selectedUsers, data);

    if  (index > -1 ){
      console.log('we are removing');
      currentSelectedUsers.splice(index, 1);
      this.setState({selectedUsers: currentSelectedUsers});
    } else {
      console.log('now we are adding');
      this.setState({selectedUsers: [...this.state.selectedUsers, data]});
    }

  }

  buttonBackgroundColor = () => {
    var index = contains.call(this.state.selectedUsers, data);
    if (index > -1) {
      return 'white';

    } else {
      return '#9FDDED';
    }
  };

  remove = (data) => {
    var currentSelectedUsers = this.state.selectedUsers.slice();
    var index = contains.call(this.state.selectedUsers, data);

    currentSelectedUsers.splice(index, 1);
    this.setState({selectedUsers: currentSelectedUsers});
  }

  static navigationOptions = ({navigation}) => ({
    title: 'NEW GROUP'

  });

  

  renderResults = () => {

    var avatar = (item) => <Image source={{ uri: 'http://graph.facebook.com/' + item.userId + '/picture?type=square' }}
                    style={{ borderRadius: 25, height:50, width:50 }}
                  />
    if (Platform.OS === 'android') {
      avatar = (item) => <Image source={{ uri: 'http://graph.facebook.com/' + item.userId + '/picture?type=square' }}
                  style={{borderRadius:25, height:50, width:50 }}
                />
    }
    
    

    if (this.state.searchResults.size != 0) {
      return (
        <FlatList
          data={this.state.searchResults}
          keyExtractor={item => item.userId}
          renderItem={({item}) => {
            if(this.state.renderResults) {
              console.log("these are search results " + this.state.searchResults);
              return (
                <TouchableOpacity onPress={() =>
                  this.pressed(item)} underlayColor='black' >
                  <ListItem
                    title={
                      <View style={{ flexDirection: 'row', flex: 1}}>
                        <Text style={{paddingLeft: 10}}>{item.name}</Text>
                      </View>
                    }
                    avatar = {avatar(item)}
                  />
                </TouchableOpacity>
              );
            }
          }}
          />
      )
    }
  }

  renderSelected() {
    var avatarSelected = (data) => <Image source={{ uri: 'http://graph.facebook.com/' + data + '/picture?type=square' }}
                                      style={{ borderRadius: 37.5/2, height:37.5, width:37.5 }}
                                    />
    if (Platform.OS === 'android') {
      avatarSelected = (data) => <Image source={{ uri: 'http://graph.facebook.com/' + data + '/picture?type=square' }}
                                      style={{ borderRadius:25, height:37.5, width:37.5 }}
                                    />
    }

    return this.state.selectedUsers.map((data) => {

        return (
          <View style={{backgroundColor: 'white', height: 50, width: 112.5, borderRadius: 20, justifyContent: 'center', padding: 5, margin: 5, borderWidth: 2, borderColor: '#9FDDED'}} key={data}>
            <View style={{paddingLeft: 3, alignSelf: 'flex-start', flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
              <View style={{flex: 3}}>
                {avatarSelected(data)}
              </View>
              <View style={{flex: 1, paddingTop: 5}}>
                <TouchableHighlight onPress={() => this.remove(data)}>
                  <Image source={ require('../resources/x-button.png')}
                    style={{height: 25, width: 25}}
                  />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        )

    });
  }





  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
          <FormLabel>Title</FormLabel>
          <FormInput value={this.state.titleText}
            placeholder="Give a name for your group!"
            underlineColorAndroid="transparent"
            onChangeText={(titleText) => {this.setState({titleText})}} />
          <FormLabel>Members</FormLabel>
          <SearchBar
            lightTheme={true}
            round={true}
            onChangeText={this.search}
            ref={searchBar => this.searchBar = searchBar}
            containerStyle={{padding: 5, backgroundColor: 'white', borderTopWidth: 0}}
            placeholder='Search friends...' />
          {
            this.state.searchResults.length != 0 ? (this.renderResults()) :
            (
              <View style={{flex: 1 , flexDirection: 'row', flexWrap: 'wrap', padding: 7.5}}>
                {this.renderSelected()}
              </View>
            )
          }
        </View>
        <ActionButton buttonColor='#9FDDED'
						renderIcon={() => <Icon name="md-checkmark" style={styles.actionButtonIcon} />}
						fixNativeFeedbackRadius={true}
            onPress = {() => {
							
              this.getFullUsers().then((data) => {
                fetch(global.urlBase + '/api/' + global.id + '/group', {
    						  method: "post",
    							credentials: "same-origin",
    						  headers: {
    						    'Accept': 'application/json',
    						    'Content-Type': 'application/json'
    						  },
    						  
    						  body: JSON.stringify({
    						    title: this.state.titleText,
    								users: data,
    						    posts: [],
    								invited: [],
    								description: null,
    						  })
    						})
    						.then( (response) => {    							
    							var retrieveGroupsUrl = global.urlBase + '/api/' + global.id + '/user/'
                  this.props.navigation.navigate('GroupTimeline', {
                      url: retrieveGroupsUrl
                  })
    						});
              })
					}}
        />
      </View>
    )
  }
}

export default AddGroupView;
