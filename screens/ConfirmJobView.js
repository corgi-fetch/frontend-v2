import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import RatingStar from '../RatingStar';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create ({
  columnContainer: {
    flex: 2,
		paddingTop: 35,
		paddingLeft: 20,
		paddingRight: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
	contentContainer: {
		padding: 10,
		width: 335,
		borderColor: 'black',
		borderWidth: 2,
	},
  updateContainer: {
    marginLeft: 15,
    width: 320,
    height: 23,
    backgroundColor: 'blue',
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
  topButtonContainer: {
    alignSelf: 'flex-end',
    paddingTop: 10,
  },

  buttonContainer: {
		alignSelf: 'flex-end'
	},
	button: {
		height: 30,
		width: 120,
    backgroundColor:'#00BCD4',
    borderWidth: 1,
    borderColor: '#fff'
	},
});
class ConfirmJobView extends Component {

  constructor(props) {
      super(props);
      this.state = {
        loading: false,
        data: [],
        page: 1,
        seed: 1,
        error: null,
        refreshing: false,
        post: props.navigation.state.params.item,
      };
  }

  static navigationOptions = ({navigation}) => ({
    title: 'NEW POST',
		headerLeft: <Icon name="md-arrow-back" size={35} style={{padding: 20, color: '#9FDDED'}} onPress= {() => {navigation.navigate('Home');}}/>,

  });

  _onPress() {
    console.log("look it worked!");
    fetch(global.urlBase + '/api/' + global.id + '/interestedpost/' + this.state.post.id, {
        method: "post",
        credentials: "same-origin",
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
        console.log(response);
      });
  }

	render() {
    return (
      <View style = {{flex: 1}}>
        <View style={styles.columnContainer}>
  				<View style = {styles.contentContainer}>
  	        <View style = {styles.rowContainer}>
  	          <Image source={{uri: source= 'https://s-media-cache-ak0.pinimg.com/736x/60/aa/e4/60aae45858ab6ce9dc5b33cc2e69baf7--martin-schoeller-character-inspiration.jpg'}} style={styles.photo} />
  	      	  <Text style = {styles.text}>
  	            {this.state.post.owner.name}
  	          </Text>
  	          <RatingStar starCount = {this.state.post.owner.rating}
                          starSize = {25}/>
  	        </View>
  	        <Text style = {styles.titleText}>
  	          {this.state.post.title}
  	        </Text>
  	        <Text style = {styles.text}>
              {this.state.post.description}
  	        </Text>
  	        <Text style = {styles.priceText}>
  	          {this.state.post.payment}
  	        </Text>
  				</View>
  				<View style = {styles.updateContainer}>
  	         <Text style = {{paddingLeft: 10}}>
             Three people are interested
             </Text>
  				</View>
          <View style = {styles.updateContainer}>
            <Text style = {{paddingLeft: 10}}>
            Daniel Zhang chose you!
            </Text>
          </View>
          <View style = {styles.topButtonContainer}>
  					<Button style={styles.button} textStyle={{fontSize: 16}} onPress = {() => this._onPress()}>
  	  					Confirm Job
  					</Button>
  				</View>
          <View style = {styles.buttonContainer}>
  					<Button style={styles.button} textStyle={{fontSize: 16}}>
  	  				   Reject Job
  					</Button>
  				</View>
        </View>
      </View>
    );
  }
}

export default ConfirmJobView;
