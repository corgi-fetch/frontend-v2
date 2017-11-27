import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, FlatList} from 'react-native';
//import { StackNavigator } from 'react-navigation';

import RatingStar from '../RatingStar';

import Button from 'apsl-react-native-button';
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
    borderWidth: 1,
    borderColor: '#fff'
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
      //   name: props.navigation.state.params.name,
      //   starCount: props.navigation.state.params.starCount,
      //   price: props.navigation.state.params.price,
      //   postTitle: props.navigation.state.params.postTitle,
      //   postInfo: props.navigation.state.params.postDescription,
      };
  }

  _onPressButton(item) {
    console.log('pressed yes');
    fetch(global.urlBase + '/api/' + global.id + '/interestedpost/' + this.state.post.id, {
        method: "put",
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
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
        console.log(response);
        //this.fetchData();
        //navigate('Home');
         //do something awesome that makes the world a better place
      });
  }

  static navigationOptions = ({navigation}) => ({
    //title: navigation.state.params.name,
    //PostView.setPostInfo(navigation.state.params.name);
  });

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
<<<<<<< HEAD

=======
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
>>>>>>> bd5fe7962ddcb6ef0d58deaca962b9063809c587
        </View>
      </View>
    );
  }
}

export default PostInterested;

// <View>
//   <List>
//     <FlatList
//         data={this.state.post.interestedQueue}
//         renderItem={({ item }) =>
//           <View style = {styles.listContainer}>
//             <Text style = {styles.listElem}>{item.name}</Text>
//             <View style = {styles.buttonContainer}>
//               <TouchableOpacity onPress = this._onPressButton(item)>
//                 <Text style = {{paddingRight: 35}}>Yes</Text>
//               </TouchableOpacity>
//               <Text>No</Text>
//             </View>
//           </View>
//         }
//     />
//   </List>
// </View>
