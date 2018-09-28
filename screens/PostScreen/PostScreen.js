import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, StatusBar} from 'react-native';
import {StackNavigator, DrawerNavigator, HeaderBackButton } from 'react-navigation';

import OverlappingAvatars from '../../components/OverlappingAvatars/OverlappingAvatars'


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
  }
  
});

class PostScreen extends Component {

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

  handleClick = () => {
    //console.log("hello " + JSON.stringify(this.state.post))
    this.props.navigation.navigate('InterestedQueueScreen', 
      {data: this.state.post.interestedQueue, postId: this.state.post.id})
  }

  

  render() {
    const { navigate } = this.props.navigation;
    post = this.state.post;

    var interestedQueueText = "";
    
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
                handleClick={this.handleClick}
                clickable
              />
              <Text>{interestedQueueText}</Text>
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
                  We're still loading!
                </Text>
            </View>
        )
    }
  }
}
  
export default PostScreen
  