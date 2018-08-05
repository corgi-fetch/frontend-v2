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
import { List, ListItem } from "react-native-elements";
import Button from 'apsl-react-native-button';

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
    
    this.makeRemoteRequest();
  	}

  	_onPressItem(item) {
    	if(item.selectedUserId == null && item.owner.userId == global.user.userId)
     {
        this.props.navigation.navigate('PostInterested', {item: item,});
      }
  	}

    static navigationOptions = ({navigation}) => ({
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
    console.log(global.user.currentPosts);
		return (
      <FlatList
          style={{ margin: 0 }}
          data={global.user.currentPosts}
          renderItem={({ item }) => (
          <ListItem
          subtitle={
            <TouchableOpacity
              onPress={() =>
                this._onPressItem(item)
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