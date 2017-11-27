import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  FlatList,
} from 'react-native';
//import RatingStar from './RatingStar';
//import {StackNavigator} from 'react-navigation';
import { List, ListItem } from "react-native-elements";
import Button from 'apsl-react-native-button';
//import CircleButton from 'react-native-circle-button';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
    paddingBottom : 50,
	},
	notifButtonContainer: {
		flex: 1,
		paddingTop: 50,
		paddingRight: 50,
		alignSelf: 'flex-end',
	},
	userContainer: {
		flex : 3,
		alignItems: 'center',
	},
	notificationContainer: {
		flex : 4,
    alignSelf: 'flex-start',
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
	image: {
	   	height: 150,
    	borderRadius: 75,
    	width: 150,
	},
	text: {
    	fontSize: 25,
    	fontWeight: 'bold',
  	},
  	circleButton: {
  		width: 50,
  		height: 50,
  		borderRadius: 50,
  		backgroundColor: 'blue',
  	},
    rowContainer: {
      flex: 1,
      //padding: 2,
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 16,
      marginLeft: 2,
      fontWeight: 'bold',
      paddingBottom: 4,
    },
    postText: {
      marginLeft: 2,
      fontSize: 16,
    },
    columnContainer: {
      flex: 1,
      padding: 7,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
});

class UserPosts extends React.Component {
	static navigationOptions = {
    	title: 'My Posts',
  	};

	constructor(props) {
    	super(props);
	  	this.state = {
	      loading: false,
	      data: [],
	      page: 1,
	      seed: 1,
	      error: null,
	      refreshing: false,
	    };
  	}

  	componentDidMount() {
    //this.fetchUser();
    this.makeRemoteRequest();
  	}

  	_onPressButton() {
    	Alert.alert('You tapped the button!')
  	}

    // _onPressesButton() {
    //   fetch ('https://corgoapi-v2.azurewebsites.net/logout/', {
    //     method: 'POST',
    //   })
    //}

    // fetchUser = () => {
    //   const userUrl = 'https://corgoapi-v2.azurewebsites.net/api/' + global.id + '/user?userId=' + global.id;
    //   fetch(userUrl)
    //     .then((response) => response.json())
    //   	.then((responseData) => {
    //   	  global.user = responseData;
    //   	  console.log(global.user);
    //   	})
    //     .done();
    // }
    static navigationOptions = ({navigation}) => ({
      //title: navigation.state.params.name,
      //PostView.setPostInfo(navigation.state.params.name);
    });

  	makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  	};

	render() {
    const { navigate } = this.props.navigation;
		return (
      <FlatList
          style={{ margin: 0 }}
          data={global.user.currentPosts}
          renderItem={({ item }) => (
          <ListItem
          subtitle={
            <TouchableOpacity
              onPress={() =>
                navigate('Post', {
                  item: item,
                })
              }
              underlayColor='black'
            >
              <View style = {styles.columnContainer}>
                <Text style = {styles.titleText}>
                  {`${item.title}`}
                </Text>
                <View style = {styles.rowContainer}>
                  <Text style = {styles.postText}>
                    {`${item.description}`}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          }
          />
          )}
      keyExtractor={item => item.email}
      />
	   );
	  }
}

export default UserPosts;

// roundAvatar
//   title={`${item.title}`}
//   subtitle={
//     // `${item.description}`
//     // <TouchableOpacity
//     //   onPress={() =>
//     //     navigate('Post', {
//     //       item: item,
//     //       // name : item.owner.name,
//     //       // starCount : item.owner.rating,
//     //       // price : item.payment,
//     //       // postTitle : item.title,
//     //       // postDescription : item.description,
//     //     })
//     //   }
//     //   underlayColor='black'
//     // />
//     <View style = styles.rowContainer>
//       <Text style = styles.postText>
//         {`${item.description}`}
//       </Text>
//     </View>
//   }
//   //avatar={{ uri: item.picture.thumbnail }}
