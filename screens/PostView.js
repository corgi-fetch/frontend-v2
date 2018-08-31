import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, StatusBar} from 'react-native';

import RatingStar from '../RatingStar';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create ({
  columnContainer: {
		paddingTop: 35,
		paddingLeft: 20,
		paddingRight: 20,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white'
  },
	contentContainer: {
		padding: 10,
		width: 335,
		borderColor: 'black',
		borderWidth: 2,
	},
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
	text: {
    fontSize: 20,
  },
	buttonText: {
		fontSize: 15,
		paddingBottom: 10,
	},
	priceText: {
		paddingTop: 10,
		alignSelf: 'flex-end',
		fontSize: 20,
	},
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    padding: 10,
  },
	buttonContainer: {
		paddingTop: 10,
		alignSelf: "flex-end"
	},
	button: {
		height: 30,
		width: 120,
    backgroundColor:'#00BCD4',
    borderWidth: 1,
    borderColor: '#fff'
	},
});
class PostView extends Component {

  constructor(props) {
      super(props);
      this.state = {
        post: props.navigation.state.params.item,
      };
  }

  static navigationOptions = ({navigation}) => ({
    headerLeft: <Icon name="md-arrow-back" size={35} style={{padding: 20, color: '#9FDDED'}} onPress= {() => {navigation.navigate('Home');}}/>,
  });

	render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.columnContainer}>
        <View style={{flexDirection: 'column', flex: 1}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Text style={{}}>{this.state.post.payment}</Text>
            </View>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Text multiline={true} style={{}}>{this.state.post.description}</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'column', flex: 1}}>
        	<View style = {styles.buttonContainer}>
        		<Button style={styles.button} textStyle={{fontSize: 16}}
            onPress = {() => {
              let userStub = {
                "id" : global.user.id,
                "rating": global.user.rating,
                "name": global.user.name,
              };

              if(this.state.post.interestedQueue == null) {
                this.state.post.interestedQueue = [];
              }
              fetch(global.urlBase + '/api/' + global.id + '/post/' + this.state.post.id, {
                  method: "put",
                  credentials: 'include',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    id: global.user.id,
                    rating: global.user.rating,
                    name: global.user.name,
                    email: global.user.email,
                    userId: global.user.userId,
                    postHistory: global.user.postHistory,
                    currentPosts: global.user.currentPosts,
                    currentJobs: global.user.currentJobs,
                    creditCardNumber: global.user.creditCardNumber,
                    bankAccount: global.user.bankAccount,
                    groups: null,
                  })
                })
                .then( (response) => {
                  //console.log(response);
                  navigate('Home');
                });
              }}>
        				Im interested!
        		</Button>
        	</View>
        </View>
      </View>
    );
  }
}

export default PostView;
