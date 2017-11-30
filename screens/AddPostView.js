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

class AddPostView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'NEW POST',
		headerLeft: <Icon name="md-arrow-back" size={35} style={{padding: 20, color: '#9FDDED'}} onPress= {() => {navigation.navigate('Home');}}/>,

  });

	constructor(props) {
    	super(props);
    	this.state = {
        titleText: '',
        postText: '',
        priceText: '',
				height: 40,
      };
  	}

		fetchData = () => {
			//const urlBase = "https://corgoapi-v2.azurewebsites.net";
	    const url = global.urlBase + '/api/' + global.id + '/user?userId=' + global.id;
	    fetch(url)
	      .then((response) => response.json())
	      .then((responseData) => {
	        global.user = responseData;
	        //console.log(global.user);
	      })
	      .done();
	  }

		updateSize = (height) => {
			console.log('this is the height ' + height);
			this.state.height = height;
		}

	render() {
		const { navigate } = this.props.navigation;
		const { height } = this.state.height;
		console.log('this is the height in render ' + this.state.height);
		let newStyle = {
      height: this.state.height,
			paddingLeft: 20,
			paddingRight: 20,
			paddingTop: 20
    }
		this.fetchData();
		return (
			<View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
				<View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column', borderBottomColor: 'lightgray', borderBottomWidth: 1,}}>
					<View style = {styles.rowContainer}>
						<View style={{backgroundColor: 'white', flex: 3, flexDirection: 'row'}}>
							<View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
								<FormLabel>Title</FormLabel>
								<FormInput value={this.state.titleText}
									placeholder="Give a succinct title about what you need!"
									underlineColorAndroid="transparent"
						    	onChangeText={(titleText) => this.setState({titleText})} />
							</View>
						</View>
						<View style={{backgroundColor: 'white', flex: 1, flexDirection: 'row'}}>
							<View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
								<FormLabel>Price</FormLabel>
								<FormInput keyboardType={'numeric'} value={this.state.priceText}
									placeholder="0.00"
									underlineColorAndroid="transparent"
									onChangeText={(priceText) => this.setState({priceText})} />
							</View>
						</View>
					</View>
				</View>
				<View style={{backgroundColor: 'white', flex: 4, flexDirection: 'column'}}>
					<View style = {styles.rowContainer}>
						<View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
						<FormLabel>Description</FormLabel>
						<TextInput
							placeholder="Write a detailed description!"
							onChangeText={(postText) => this.setState({postText})}
							style={[newStyle]}
							underlineColorAndroid="transparent"
							editable={true}
							multiline={true}
							//value={value}
							onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
						/>
						</View>
					</View>
				</View>
				<ActionButton buttonColor='#9FDDED'
						icon={<Icon name="md-checkmark" style={styles.actionButtonIcon} />}
						fixNativeFeedbackRadius={true}
						onPress = {() => {
							//const urlBase = "http://corgoapi-v2.azurewebsites.net";
							fetch(global.urlBase + '/api/' + global.id + '/post', {
						  method: "post",
							credentials: 'include',
						  headers: {
						    'Accept': 'application/json',
						    'Content-Type': 'application/json'
						  },

						  //make sure to serialize your JSON body
						  body: JSON.stringify({
						    date: 7,
								owner: global.user,
						    title: this.state.titleText,
								description: this.state.postText,
								payment: this.state.priceText,
								interestedQueue: [],
								//set group to the group currently on? or add group field
								serviceGiven: false,
								serviceReceived: false,
						  })
						})
						.then( (response) => {
							console.log(response);
							this.fetchData();
							navigate('Home');
						   //do something awesome that makes the world a better place
						});
					}}
				/>
			</View>
		);
    // return (
    //   <View style={styles.container}>
    //   	<Text style = {styles.text}>Add New Post</Text>
    //     <View style = {styles.rowContainer}>
    //       <TextInput style={styles.RightTextInput}
    //         value={this.state.titleText}
    //         onChangeText={(titleText) => this.setState({titleText})}
    //       />
		// 			<TextInput style={styles.LeftTextInput}
    //         value={this.state.priceText}
    //         onChangeText={(priceText) => this.setState({priceText})}
    //       />
    //     </View>
    //     <TextInput style={styles.PostTextInput}
    //       multiline = {true}
    //       numberOfLines = {4}
    //       value={this.state.postText}
    //       onChangeText={(postText) => this.setState({postText})}
    //     />
		// 		<View style = {styles.buttonContainer}>
		// 			<Button style={styles.button} textStyle={{fontSize: 16}}
		// 					onPress = {() => {
		// 						//const urlBase = "http://corgoapi-v2.azurewebsites.net";
		// 						fetch(global.urlBase + '/api/' + global.id + '/post', {
		// 					  method: "post",
		// 						credentials: 'include',
		// 					  headers: {
		// 					    'Accept': 'application/json',
		// 					    'Content-Type': 'application/json'
		// 					  },
    //
		// 					  //make sure to serialize your JSON body
		// 					  body: JSON.stringify({
		// 					    date: 7,
		// 							owner: global.user,
		// 					    title: this.state.titleText,
		// 							description: this.state.postText,
		// 							payment: this.state.priceText,
		// 							interestedQueue: [],
		// 							serviceGiven: false,
		// 							serviceReceived: false,
		// 					  })
		// 					})
		// 					.then( (response) => {
		// 						console.log(response);
		// 						this.fetchData();
		// 						navigate('Home');
		// 					   //do something awesome that makes the world a better place
		// 					});
		// 				}}>
		// 				Create Post
		// 			</Button>
		// 		</View>
    //   </View>
    // );
  }
}

export default AddPostView;

// <KeyboardAvoidingView behavior="height" style = {styles.rowContainer}>
// 		<TouchableHighlight style={styles.button} textStyle={{	fontSize: 36, fontFamily: 'Roboto', fontWeight: 'normal', color: '#4f4e4e'}}
// 				onPress = {() => {
// 					//const urlBase = "http://corgoapi-v2.azurewebsites.net";
// 					fetch(global.urlBase + '/api/' + global.id + '/post', {
// 				  method: "post",
// 					credentials: 'include',
// 				  headers: {
// 				    'Accept': 'application/json',
// 				    'Content-Type': 'application/json'
// 				  },
//
// 				  //make sure to serialize your JSON body
// 				  body: JSON.stringify({
// 				    date: 7,
// 						owner: global.user,
// 				    title: this.state.titleText,
// 						description: this.state.postText,
// 						payment: this.state.priceText,
// 						interestedQueue: [],
// 						//set group to the group currently on? or add group field
// 						serviceGiven: false,
// 						serviceReceived: false,
// 				  })
// 				})
// 				.then( (response) => {
// 					console.log(response);
// 					this.fetchData();
// 					navigate('Home');
// 				   //do something awesome that makes the world a better place
// 				});
// 			}}>
// 			<Text style={{	fontSize: 36, fontFamily: 'Roboto', fontWeight: 'normal', color: 'white'}}>Create Post</Text>
// 		</TouchableHighlight>
// </KeyboardAvoidingView>
