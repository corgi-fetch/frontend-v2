import React, { Component } from "react";
import PropTypes from 'prop-types';

import {StackNavigator, DrawerNavigator, HeaderBackButton } from 'react-navigation';

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
        post: props.navigation.state.params.post,
        state: props.navigation.state.params.state,
        ownerId: props.navigation.state.params.ownerId,
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
      console.log(JSON.stringify(responseData))
      this.setState({
        post: responseData
      })
    });
  }

  componentDidMount() {
    this.fetchPost();
  }

  render() {
    const { navigate } = this.props.navigation;
    post = this.state.post;
    state = this.state.state;
    //console.log("where is this happening " + " id " + id + " state " + state)
    if (this.state.ownerId == global.id) {
        if (state == 1) {
          //display PostComponent
          return (
            <PostScreenComponent
                post={post}
                handleClick = {this.handleClick}
            />
          )
        } else if (state == 2) {
          //display OwnerPostStateTwoComponent
          return (
            <OwnerPostStateTwoComponent
                post={post}
                serviceReceivedPress = {this.serviceReceivedPress}
            />
          )
        } else if (state == 3) {
          //display OwnerPaymentComponent
          return (
            <OwnerPaymentComponent
                post={post}
                serviceGivenPress = {this.serviceGivenPress}
            />
          )
        }
    } else {
        if (state == 1) {
          //display InterestedPostStateOneComponent
          return (
            <InterestedPostStateOneComponent
                post={post}
                addInterestedQueueOnClick = {this.addInterestedQueueOnClick}
                removeInterestedQueueOnClick = {this.removeInterestedQueueOnClick}
            />
          )
      } else if (state == 2) {
          //display InterestedPostStateTwoComponent
          return(
            <InterestedPostStateTwoComponent
                post={post}
                serviceGivenPress = {this.serviceGivenPress}
            />
          )
      } else if (state == 3) {
          //display InterestedPostStateThreeComponent
      }
    }
  }
}

export default PostHandlerScreen
