import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, StatusBar, KeyboardAvoidingView, TouchableHighlight  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput } from 'react-native-elements';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { Permissions, Notifications } from 'expo';
import registerForPushNotificationsAsync from '../../utilities/registerForPushNotificationsAsync'


const styles = StyleSheet.create ({
	container: {
		height: 320,
		padding: 28,
    justifyContent : 'flex-start',
	},
  rowContainer: {
    flex: 1,
		flexDirection: 'row',
  },
	text: {
    	fontSize: 20,
			paddingBottom: 15,
  },
  	PostTextInput: {
  		flex: 4,
  		height: 40,
  		borderColor: 'gray',
  		borderWidth: 1,
  	},
    RightTextInput: {
			width:200,
      borderColor: 'gray',
      borderWidth: 1,
			padding:10,
			paddingRight: 30,
    },

		LeftTextInput: {
			width: 90,
      borderColor: 'gray',
      borderWidth: 1,
			marginLeft: 25,
    },
		buttonContainer: {
			paddingTop: 10,
			alignSelf: "flex-end"
		},
		button: {
			height: 70,
	    backgroundColor:'#9FDDED',
	    borderColor: '#fff',
			alignSelf: 'center',
			flex: 1,
			flexDirection: 'row'

		},
		actionButtonIcon: {
	    fontSize: 20,
	    height: 22,
	    color: 'white',
	  },
});


class CreateUserScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      venmo: '',
    }
  }

  componentDidMount() {
		this.fetchData();
		registerForPushNotificationsAsync();
  }

  fetchData = () => {
    const url = global.urlBase + '/api/master/principal';

    fetch(url, {
			credentials: "same-origin"
		})
      .then((response) => response.json())
      .then((responseData) => {
				global.id = responseData;
				console.log(responseData);
      })
      .done();
	}
	
	
	

  render() {
		const { navigate } = this.props.navigation;
		// let token = JSON.stringify(Promise.resolve(registerForPushNotificationsAsync()));
		// console.log("This is the global id " + global.id);
		// console.log(token);

    return (
      <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column', paddingTop: 40}}>
				<View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column', borderBottomColor: 'lightgray', borderBottomWidth: 1,}}>
					<View style = {styles.rowContainer}>
						<View style={{backgroundColor: 'white', flex: 3, flexDirection: 'row'}}>
							<View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
								<FormLabel>Name</FormLabel>
								<FormInput value={this.state.name}
									placeholder="What's your name?"
									underlineColorAndroid="transparent"
						    	onChangeText={(name) => this.setState({name})} />
							</View>
						</View>
					</View>
				</View>
        <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column', borderBottomColor: 'lightgray', borderBottomWidth: 1,}}>
					<View style = {styles.rowContainer}>
						<View style={{backgroundColor: 'white', flex: 3, flexDirection: 'row'}}>
							<View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
								<FormLabel>Email</FormLabel>
								<FormInput value={this.state.email}
									placeholder="What's your email?"
									underlineColorAndroid="transparent"
						    	onChangeText={(email) => this.setState({email})} />
							</View>
						</View>
					</View>
				</View>
        <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column', borderBottomColor: 'lightgray', borderBottomWidth: 1,}}>
					<View style = {styles.rowContainer}>
						<View style={{backgroundColor: 'white', flex: 3, flexDirection: 'row'}}>
							<View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
								<FormLabel>Venmo</FormLabel>
								<FormInput value={this.state.venmo}
									placeholder="Tell us your @venmo-account"
									underlineColorAndroid="transparent"
						    	onChangeText={(venmo) => this.setState({venmo})} />
							</View>
						</View>
					</View>
				</View>
        <View style={{backgroundColor: 'white', flex: 4, flexDirection: 'column', borderBottomColor: 'lightgray', borderBottomWidth: 1,}}>
        </View>
				<ActionButton buttonColor='#9FDDED'
						renderIcon={() => <Icon name="md-checkmark" style={styles.actionButtonIcon} />}
						fixNativeFeedbackRadius={true}
						onPress = {() => {
							fetch(global.urlBase + '/api/' + global.id + '/user', {
								method: "put",
								credentials: "same-origin",
								headers: {
									'Accept': 'application/json',
									'Content-Type': 'application/json'
						  },

						  body: JSON.stringify({
						    userId: global.id,
								rating: 5,
						    name: this.state.name,
								email: this.state.email,
								bankAccount: this.state.venmo,
								//pushToken: token,
						  })
						})
						.then( (response) => {
							console.log(response);
							navigate('UserFetchScreen')
						});
					}}
				/>
			</View>
    );

  }
}

export default CreateUserScreen
