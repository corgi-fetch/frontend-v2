import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, StatusBar, KeyboardAvoidingView, TouchableHighlight  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput } from 'react-native-elements';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create ({
	container: {
		height: 320,
		padding: 28,
    justifyContent : 'flex-start',
	},
  rowContainer: {
    flex: 1,
		flexDirection: 'row',
		//paddingBottom: 15,
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
      //justifyContent : 'flex-start',
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
			//width: 120,
	    backgroundColor:'#9FDDED',
	    //borderWidth: 1,
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

class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      venmo: '',
    }
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = () => {
    //const urlBase = "https://corgoapi-v2.azurewebsites.net";

    const url = global.urlBase + '/api/master/principal';

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        //console.log('hello we are here');
        global.id = responseData;
      })
      .done();
  }

  render() {
    const { navigate } = this.props.navigation;
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
						icon={<Icon name="md-checkmark" style={styles.actionButtonIcon} />}
						fixNativeFeedbackRadius={true}
						onPress = {() => {
							//const urlBase = "http://corgoapi-v2.azurewebsites.net";
							fetch(global.urlBase + '/api/' + global.id + '/user', {
						  method: "post",
							credentials: 'include',
						  headers: {
						    'Accept': 'application/json',
						    'Content-Type': 'application/json'
						  },

						  //make sure to serialize your JSON body
						  body: JSON.stringify({
						    userId: global.id,
								rating: 5,
						    name: this.state.name,
								email: this.state.email,
								//payment: this.state.priceText,
								bankAccount: this.state.venmo,
								//set group to the group currently on? or add group field
						  })
						})
						.then( (response) => {
							console.log(response);
							//console.log('this is response group id ' + this.state.groupId);
							//this.fetchData();
							navigate('MainSideBarNavigator');
						   //do something awesome that makes the world a better place
						});
					}}
				/>
			</View>
    );

  }
}

export default CreateUser
