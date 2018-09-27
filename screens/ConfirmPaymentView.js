import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity} from 'react-native';

import RatingStar from '../RatingStar';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

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
  ratingsContainer: {
    flex: 1,
    marginTop : 50,
    alignSelf: 'center',
    marginBottom: 170,
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
class ConfirmPaymentView extends Component {

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

  _onPress() {
    fetch(global.urlBase + '/api/' + global.id + '/interestedpost/' + this.state.post.id, {
        method: "get",
        credentials: "same-origin",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

      })
      .then( (response) => {

      });
  }

  static navigationOptions = ({navigation}) => ({
    headerLeft: <Icon name="md-arrow-back" size={35} style={{padding: 20, color: '#9FDDED'}} onPress= {() => {navigation.navigate('Home');}}/>,
  });

	render() {
    return (
      <View style = {{flex: 1}}>
        <View style={styles.columnContainer}>
  				<View style = {styles.contentContainer}>
  	        <View style = {styles.rowContainer}>
  	          <Image source={{uri: source= 'https://s-media-cache-ak0.pinimg.com/736x/60/aa/e4/60aae45858ab6ce9dc5b33cc2e69baf7--martin-schoeller-character-inspiration.jpg'}} style={styles.photo} />
  	      	  <Text style = {styles.text}>
  	            {this.state.post.name}
  	          </Text>
  	          <RatingStar starCount = {this.state.post.rating}
                          starSize = {25}
                          />
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
            You chose Jason Choi
            </Text>
          </View>
          <View style = {styles.updateContainer}>
            <Text style = {{paddingLeft: 10}}>
            Jason Choi accepted the job!
            </Text>
          </View>
          <View style = {styles.topButtonContainer}>
  					<Button style={styles.button} textStyle={{fontSize: 14}} onPress = {() => this._onPress()}>
  	  					Confirm Payment
  					</Button>
  				</View>
          <View style = {styles.ratingsContainer}>
            <RatingStar starSize = {50}/>
            <Text style = {{fontSize: 14}}>  Rate Jason for this Transaction!</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ConfirmPaymentView;
