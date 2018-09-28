import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, StatusBar} from 'react-native';
import {StackNavigator, DrawerNavigator, HeaderBackButton } from 'react-navigation';

import OverlappingAvatars from '../../../components/OverlappingAvatars/OverlappingAvatars'

import ActionButtonComponent from '../../../components/ActionButtonComponent/ActionButtonComponent'
import Icon from 'react-native-vector-icons/Ionicons';




const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 3
  },
  topContainer: {
    flex: 4,
  },
  bottomContainer: {
    flex: 6,
    padding: 5,
    alignItems: 'center'
  },
  textContainer: {
    paddingLeft: 10,
    flexDirection: 'row',

  },
  postHeaderContainer: {
    flexDirection: 'row',
    padding: 5,
    paddingBottom: 12.5,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  textBox: {
    // fontSize: 16
  },
  textPriceBox: {
    color: '#29a329'
  },
  textBoxHeader: {
    paddingRight: 5,
    // fontSize: 16
    fontWeight: 'bold'

  },
  textBoxTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  postImage: {
    paddingLeft: 5,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

});

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
      if (list[i].userId === obj.userId) {
          return true;
      }
  }

  return false;
}

class InterestedPostStateThree extends Component {

  static navigationOptions = ({ navigation, screenProps }) => {

    const {params = {}} = navigation.state;
    //console.log("this is params " + JSON.stringify(params))
    var title = "Loading"
    if (params.userStub) {
      var title = params.userStub.name + "'s Post"
    }
    return {
      title: title,
      headerLeft: (<HeaderBackButton tintColor='#9FDDED' onPress={() => navigation.goBack(null) } />)
    };

  };

  constructor(props) {
      super(props);
      this.state = {
        post: props.navigation.state.params.post,
      };
  }

  fetchPost = () => {
    const url = this.props.navigation.state.params.url;

    fetch(url, {
      credentials: "same-origin"
    })
      .then((response) => response.json())
      .then((responseData) => {
        //console.log("testing" + JSON.stringify(responseData))
        this.props.navigation.setParams({
          userStub: responseData.owner,
        })
        this.setState({
          post: responseData
        })


      })
      .done()

  }

  componentDidMount() {
    this.fetchPost();
  }

  addInterestedQueueOnClick = () => {
    //console.log("hello there")
    this.state.post.interestedQueue.push(global.userStub)
    fetch(global.urlBase + '/api/' + global.id + '/post/' + this.state.post.id, {
      method: "put",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(global.userStub)
    })
    .then((response) => response.json())
    .then( (responseData) => {
      console.log(JSON.stringify(responseData))
      this.setState({
        post: responseData
      })
    });
  }

  removeInterestedQueueOnClick = () => {
    this.state.post.interestedQueue.push(global.userStub)
    fetch(global.urlBase + '/api/' + global.id + '/post/' + this.state.post.id, {
      method: "delete",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(global.userStub)
    })
    .then((response) => response.json())
    .then( (responseData) => {
      console.log(JSON.stringify(responseData))
      this.setState({
        post: responseData
      })
    });
  }





  render() {
    const { navigate } = this.props.navigation;
    post = this.state.post;

    var interestedQueueText = "";

    var CreateIconCheck = <Icon
      name="md-checkmark-circle-outline"
      style={styles.actionButtonIcon}
    />

    var CreateIconX = <Icon
      name="md-close-circle"
      style={styles.actionButtonIcon}
    />

    var actionButton = <ActionButtonComponent
      position='center'
      offsetX={0}
      offsetY={130}
      size={84}
      buttonColor='#42f4ad'
      icon={CreateIconCheck}
      onClick={this.addInterestedQueueOnClick}
    />

    // var actionButtons = []
    // actionButtons.push(<ActionButtonComponent
    //   position='center'
    //   offsetX={-50}
    //   offsetY={130}
    //   size={84}
    //   buttonColor='lightgrey'
    //   icon={CreateIconCheck}
    //   hideShadow={true}
    //   key={2}
    // />)
    // actionButtons.push(<ActionButtonComponent
    //   position='center'
    //   offsetX={50}
    //   offsetY={130}
    //   size={84}
    //   buttonColor='#f44259'
    //   icon={CreateIconX}
    //   key={1}
    //   onClick={this.removeInterestedQueueOnClick}
    // />)



    var button;
    if (post) {
      console.log("here is after we retrieve post " + JSON.stringify(post))
      if (post.serviceGiven) {
        button = actionButtons;
        console.log("we here or nah")
      } else {
        button = actionButton;
        console.log("are we here")
      }
    }


    if (post) {
      interestedQueueText = post.interestedQueue.length.toString() + " users interested"
    }

    //console.log("this is post " + JSON.stringify(post))



    //console.log("are we here " + post)
    if (post) {
        return (
        <View style={ styles.mainContainer }>
            <View style={ styles.topContainer }>
              <View style={ styles.postHeaderContainer }>
                <View style={ styles.postImage }>
                  <Image source={{ uri: 'http://graph.facebook.com/' + post.owner.userId + '/picture?type=square' }}
                    style={{borderRadius:25, height:50, width:50 }}
                  />
                </View>
                <View style={ styles.textContainer }>
                  <Text style={ styles.textBoxTitle }>
                    {post.title}
                  </Text>
                </View>
              </View>
              <View style={ styles.textContainer }>
                <Text style={ styles.textPriceBox }>
                  ${post.payment}
                </Text>
              </View>
              <View style={ styles.textContainer }>
                <Text style={ styles.textBox }>
                  {post.description}
                </Text>
              </View>
            </View>
            <View style={ styles.bottomContainer }>
              <OverlappingAvatars
                avatar_one={post.owner.userId}
                avatar_two={post.owner.userId}
                avatar_three={post.owner.userId}
                //handleClick={this.handleClick}
              />
              <Text>{interestedQueueText}</Text>
              {button}
              {/* <ActionButtonComponent
                position='center'
                offsetX={-40}
                offsetY={150}
              /> */}
            </View>
        </View>
        );
    } else {
        return (
            <View>
                <Text
                  style={{
                    fontStyle: "italic"
                  }}
                >
                  We are still loading!
                </Text>
            </View>
        )
    }
  }
}

export default InterestedPostStateThree
