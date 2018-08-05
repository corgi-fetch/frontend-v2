import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, StatusBar} from 'react-native';
import {StackNavigator, DrawerNavigator, HeaderBackButton } from 'react-navigation';

import InterestedQueue from '../../components/InterestedQueue';


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
    fontWeight: 'bold'
  },
  postImage: {
    paddingLeft: 5, 
  }
  
});

class PostScreen extends Component {

  static navigationOptions = ({ navigation, screenProps }) => {
    console.log("this is navigation " + JSON.stringify(navigation));

    return {
      title: "",
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

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("testing" + responseData)
        this.setState({
          post: responseData
        });
        console.log("this is response Data " + JSON.stringify(responseData));
        console.log("this is the data in this.state " + JSON.stringify(this.state));
      })
      .done();
    
  }

  componentDidMount() {
    this.fetchPost();
  }

  interestedQueue() {
    queue = null;
    if (queue) {

    } else {
      return (
        <View>
          <Text>
            Hold on, your post's being shared to Corgo-ers in your group right now.
          </Text>
        </View>
      );
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    post = this.state.post;
    console.log("are we here " + post)
    if (post) {
        return (
        <View style={ styles.mainContainer }>
            <View style={ styles.topContainer }>
            <View style={ styles.postHeaderContainer }>
                <View style={ styles.postImage }>
                <Image source={{ uri: 'http://graph.facebook.com/' + post.owner + '/picture?type=square' }}
                    style={{borderRadius:25, height:50, width:50 }}
                    />
                </View>
                <View>
                <View style={ styles.textContainer }>
                    <Text style={ styles.textBoxHeader }>
                    Daniel Zhang
                    </Text>
                    <Text style={ styles.textBoxHeader }>
                    Test
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>
                    Posted 5 hours ago
                    </Text>
                </View>
                </View>
            </View>
            <View style={ styles.textContainer }>
                <Text style={ styles.textBoxTitle }>
                {post.title}
                </Text>
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
            <InterestedQueue queue="hello"/>
            </View>
        </View>
        );
    } else {
        return (
            <View>
                <Text>We're still loading!</Text>
            </View>
        )
    }
  }
}
  
export default PostScreen
  