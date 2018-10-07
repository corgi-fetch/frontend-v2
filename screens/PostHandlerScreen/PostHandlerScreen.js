import React, { Component } from "react";
import PropTypes from 'prop-types';

import {StackNavigator, DrawerNavigator, HeaderBackButton} from 'react-navigation';
import {View, Text} from 'react-native'

import PostScreenComponent from '../../components/PostScreenComponent/PostScreenComponent.js'
import OwnerPostStateTwoComponent from '../../components/OwnerPostStateTwoComponent/OwnerPostStateTwoComponent.js'
import OwnerPaymentComponent from '../../components/OwnerPaymentComponent/OwnerPaymentComponent.js'
import InterestedPostStateOneComponent from '../../components/InterestedPostStateComponents/InterestedPostStateOneComponent.js'
import InterestedPostStateTwoComponent from '../../components/InterestedPostStateComponents/InterestedPostStateTwoComponent.js'
import InterestedPostStateThreeComponent from '../../components/InterestedPostStateComponents/InterestedPostStateThreeComponent.js'

class PostHandlerScreen extends Component {

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
        // post: props.navigation.state.params.post,
        // state: props.navigation.state.params.state,
        // ownerId: props.navigation.state.params.ownerId,
        // refreshing: false
        post: null,
        loaded: false
      };
  }
  
  componentDidMount() {
    this.fetchPost();
    console.log("component did mount ");
  }

  fetchPost = () => {
    const url = this.props.navigation.state.params.url;

    console.log("this is url in posthandler " + url);

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
          post: responseData,
          loaded: true
        })
        console.log(this.state.post);
      })
      .done()
  }

  

  // postScreenComponent method
  handleClick = () => {
    //console.log("hello " + JSON.stringify(this.state.post))
    this.props.navigation.navigate('InterestedQueueScreen',
      {data: this.state.post.interestedQueue, postId: this.state.post.id})
  }

  // OwnerPostStateTwo
  serviceReceivedPress = () => {
    fetch(global.urlBase + '/api/' + global.id + '/confirmation/' + this.state.post.id, {
      method: "post",
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then( (responseData) => {
      console.log(JSON.stringify(responseData))
      this.setState({
        post: responseData
      })
    });
  }

  //InterestedPostStateOne and InterestedPostStateThree
  addInterestedQueueOnClick = () => {
    //console.log("hello there")
    this.state.post.interestedQueue.push(global.userStub)
    fetch(global.urlBase + '/api/' + global.id + '/post/' + post.id, {
      method: "put",
      credentials: 'include',
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

  //InterestedPostStateOne and InterestedPostStateThree
  removeInterestedQueueOnClick = () => {
    this.state.post.interestedQueue.push(global.userStub)
    fetch(global.urlBase + '/api/' + global.id + '/post/' + post.id, {
      method: "delete",
      credentials: 'include',
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

  //InterestedPostStateTwo
  serviceGivenPress = () => {
    fetch(global.urlBase + '/api/' + global.id + '/confirmation/' + this.state.post.id, {
      method: "put",
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then( (responseData) => {
      console.log("we did some stuff")
      this.setState({
        post: responseData
      })
    });
  }



  render() {
    if (this.state.loaded) {
      //return (<Text>LoadED</Text>)
      const { navigate } = this.props.navigation;
      post = this.state.post;
      
      //console.log("where is this happening " + " id " + id + " state " + state)
      // console.log("OwnerId in PostHandlerScreen " + this.state.ownerId);
      // console.log
      if (post.owner.userId == global.id) {
          if (post.state == 1) {
            //display PostComponent
            return (
              <PostScreenComponent
                  post={post}
                  handleClick = {this.handleClick}
              />
            )
          } else if (post.state == 2) {
            //display OwnerPostStateTwoComponent

            console.log("post state is 2");
            return (
              <OwnerPostStateTwoComponent
                  post={post}
                  serviceReceivedPress = {this.serviceReceivedPress}
              />
            )
          } else if (post.state == 3) {
            //display OwnerPaymentComponent
            return (
              <OwnerPaymentComponent
                  post={post}
                  serviceGivenPress = {this.serviceGivenPress}
              />
            )
          } else {
            return (<Text>Else</Text>)
          }
      } else {
          if (post.state == 1) {
            //display InterestedPostStateOneComponent
            return (
              <InterestedPostStateOneComponent
                  post={post}
                  addInterestedQueueOnClick = {this.addInterestedQueueOnClick}
                  removeInterestedQueueOnClick = {this.removeInterestedQueueOnClick}
              />
            )
        } else if (post.state == 2) {
            //display InterestedPostStateTwoComponent
            return(
              <InterestedPostStateTwoComponent
                  post={post}
                  serviceGivenPress = {this.serviceGivenPress}
              />
            )
        } else if (post.state == 3) {
            //display InterestedPostStateThreeComponent
            return (<Text>state 3</Text>)
        }
      }
    } else {
      return (<Text>Loading!</Text>)
    }
  }
}

export default PostHandlerScreen
