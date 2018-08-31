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

class AddPostView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'NEW POST',
		headerLeft: <Icon name="md-arrow-back" size={35} style={{padding: 20, color: '#9FDDED'}} onPress= {() => {navigation.goBack();}}/>,

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

componentWillMount() {
	//console.log("this is what we need to know" + JSON.stringify(this.props));
	this.setState({'groupId' : this.props.navigation.state.params.groupId});
}

updateSize = (height) => {
	
	this.state.height = height;
}


	render() {
		const { navigate } = this.props.navigation;
		const { height } = this.state.height;
		//console.log("props " + JSON.stringify(this.props));
		//console.log("navigate " + navigate);
		
		var groupId = "";
		if (this.props.screenProps) {
			groupId = JSON.parse(this.props.screenProps.groups).id.toString();
		}
		
		let newStyle = {
      height: this.state.height,
			paddingLeft: 20,
			paddingRight: 20,
			paddingTop: 20
    }

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
							onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
						/>
						</View>
					</View>
				</View>
				<ActionButton buttonColor='#9FDDED'
						renderIcon={() => {<Icon name="md-checkmark" style={styles.actionButtonIcon} />}}
						fixNativeFeedbackRadius={true}
						onPress = {() => {
							fetch(global.urlBase + '/api/' + global.id + '/post', {
								method: "post",
								credentials: 'include',
								headers: {
									'Accept': 'application/json',
									'Content-Type': 'application/json'
								},
							
								body: JSON.stringify({
									date: 7,
									owner: global.userStub,
									title: this.state.titleText,
									description: this.state.postText,
									payment: this.state.priceText,
									interestedQueue: [],
									serviceGiven: false,
									serviceReceived: false,
									groupId: this.state.groupId,
								})
							})
							.then( (response) => {
								//console.log(response);
								var retrievePostsUrl = global.urlBase + '/api/' + global.id + '/group/' + this.props.navigation.state.params.groupId
								this.props.navigation.navigate('PostTimeline', {
									groupId: this.props.navigation.state.params.groupId,
									url: retrievePostsUrl
								})
							});
					}}
				/>
			</View>
		);
		
  }
}

export default AddPostView;



// console.log(JSON.stringify({
// 	date: 7,
// 	owner: global.id,
// 	title: this.state.titleText,
// 	description: this.state.postText,
// 	payment: this.state.priceText,
// 	interestedQueue: [],
// 	serviceGiven: false,
// 	serviceReceived: false,
// 	groupId: this.state.groupId,
// }));
// lmao u a nerd who even writes code