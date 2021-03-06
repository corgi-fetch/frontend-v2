import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, FlatList} from 'react-native';
import RatingStar from '../RatingStar';


import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { List, ListItem } from "react-native-elements";

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
	},
  updateContainer: {
    marginLeft: 15,
    width: 320,
    height: 23,
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
    marginLeft: 125,
    flexDirection: 'row',
		alignSelf: "flex-end"
	},
  listContainer: {
    width: 355,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  listElem: {
    paddingLeft: 10,
    width: 100,
  },
	button: {
		height: 30,
		width: 120,
    backgroundColor:'#00BCD4',
	},
});
class PostInterested extends Component {

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

  _onPressButton(item) {
    //console.log('pressed yes');
    fetch(global.urlBase + '/api/' + global.id + '/interestedpost/' + this.state.post.id, {
        method: "put",
        credentials: "same-origin",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: item.id,
          rating: item.rating,
          name: item.name,
          email: item.email,
          userId: item.userId,
          postHistory: item.postHistory,
          currentPosts: item.currentPosts,
          currentJobs: item.currentJobs,
          creditCardNumber: item.creditCardNumber,
          bankAccount: item.bankAccount,
          groups: null,
        })
      })
      .then( (response) => {
      });
  }

  static navigationOptions = ({navigation}) => ({
    headerLeft: <Icon name="md-arrow-back" size={35} style={{padding: 20, color: '#9FDDED'}} onPress= {() => {navigation.navigate('Home');}}/>,
  });

	render() {
    return (
      <View style = {{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.columnContainer}>
  				<View style = {styles.contentContainer}>
  	        <View style = {styles.rowContainer}>
  	          <Image source={{uri: source= 'https://s-media-cache-ak0.pinimg.com/736x/60/aa/e4/60aae45858ab6ce9dc5b33cc2e69baf7--martin-schoeller-character-inspiration.jpg'}} style={styles.photo} />
  	      	  <Text style = {styles.text}>
  	            {this.state.post.owner.name}
  	          </Text>
  	          <RatingStar starCount = {this.state.post.owner.rating}
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
             {this.state.post.interestedQueue.length} people are interested
             </Text>
  				</View>

          <View>
            <List>
              <FlatList
                  data={this.state.post.interestedQueue}
                  renderItem={({ item }) =>
                    <View style = {styles.listContainer}>
                      <Text style = {styles.listElem}>{item.name}</Text>
                      <View style = {styles.buttonContainer}>
                        <TouchableOpacity onPress = {() => this._onPressButton(item)}>
                          <Text style = {{paddingRight: 35}}>Yes</Text>
                        </TouchableOpacity>
                        <Text>No</Text>
                      </View>
                    </View>
                  }
              />
            </List>
          </View>

        </View>
      </View>
    );
  }
}

export default PostInterested;


