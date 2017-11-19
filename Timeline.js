import React, { Component } from "react";
<<<<<<< HEAD
import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from "react-native";
import {StackNavigator} from 'react-navigation';
=======
import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert} from "react-native";
import {StackNavigator, DrawerNavigator} from 'react-navigation';
>>>>>>> 018d95a9dc3fbbf07799f2e597ea9181916b4b6c
import { List, ListItem } from "react-native-elements";
import RatingStar from './RatingStar';
import AddPostView from './AddPostView';
import UserProfile from './UserProfile';
import PostView from './PostView';
import UserPosts from './UserPosts';
//Home: { screen: Timeline},


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 50,
    // ...Platform.select({
    //   android: {
    //     paddingTop: StatusBar.currentHeight
    //   }
    //  })

    //backgroundColor: FFFFFF
    //backgroundColor: '#ffffff'
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rowContainer: {
    flex: 1,
    //padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnContainer: {
    flex: 1,
    padding: 7,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    //marginLeft: 2,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    padding: 10,
    margin: 5
  },
  separator: {
    flex: 1,
    //height: StyleSheet.hairlineWidth,
    //backgroundColor: '#8E8E8E',
  },
  buttonContainer: {
    flexDirection : 'row',
  },
  item: {
    backgroundColor: '#ffffff'
  },

  FlatList: {
    backgroundColor: '#ffffff',
    borderTopWidth: 0,
    borderBottomWidth: 0
  }
  //backgroundColor: 'blue'

});

class Timeline extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
      headerStyle: {
        paddingTop: StatusBar.currentHeight,
        //backgroundColor: '#9FDDED',
        height: 85,
        borderBottomWidth: 0,
        backgroundColor: '#fff',
        elevation: 0,


      },
      headerTitleStyle: {
        alignSelf: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: '#4f4e4e'
      },

    title: "TIMELINE",
    headerRight: <Button title ="Add Post" onPress={() =>{ navigation.navigate('AddPost'); }} />,
    //headerLeft: <Image source={require("./menu-icon.png")} onPress={() => navigate('DrawerOpen')} />,
    headerLeft: <Button title = "Menu" onPress= {() => {navigation.navigate('DrawerOpen'); }}/>,
  });


  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      //page: 1,
      //seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.fetchData();
    this.makeRemoteRequest();
  }

  fetchUser = () => {
    //const urlBase = "https://corgoapi-v2.azurewebsites.net";
<<<<<<< HEAD
    const url = urlBase + '/api/' + global.id + '/user?userId=' + global.id;
=======
    const url = global.urlBase + '/api/' + global.id + '/user?userId=' + global.id;
>>>>>>> 018d95a9dc3fbbf07799f2e597ea9181916b4b6c
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        global.user = responseData;
        //console.log(global.user);
      })
      .done();
  }

  fetchData = () => {
    //const urlBase = "https://corgoapi-v2.azurewebsites.net";
<<<<<<< HEAD
    const url = urlBase + '/api/master/principal';
=======
    const url = global.urlBase + '/api/master/principal';
>>>>>>> 018d95a9dc3fbbf07799f2e597ea9181916b4b6c
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        global.id = responseData;
        this.fetchUser();
        //console.log(global.id);
      })
      .done();
  }

  makeRemoteRequest = () => {
    //const urlBase = "https://corgoapi-v2.azurewebsites.net";
    //const { page, seed } = this.state;
    const url = global.urlBase + '/api/' + global.id + '/post';
    //const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        //console.log(res);
        this.setState({
          data: [...this.state.data, ...res],
          //data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.log(error);
      });
  };



  render() {
    const { navigate } = this.props.navigation;
    //console.log(this.state.data);
    return (
        <FlatList
          style={styles.FlatList}
          data={this.state.data}
          renderItem={({ item }) => {
            return(
              <TouchableOpacity onPress={() =>
                    navigate('Post', {
                      item: item,
                      name : item.owner.name,
                      starCount : item.owner.rating,
                      price : item.payment,
                      postTitle : item.title,
                      postDescription : item.description,
                    })
                  }
                  underlayColor='black'
              >

                <ListItem
                  //roundAvatar

                  title={
                    <View style={{}}>

                      <Text style={{paddingLeft: 10}}>{item.title}</Text>
                    </View>
                  }
                  subtitle={
                    <View style={{float: 'left'}}>

                      <Text style={{paddingLeft: 10, color: 'grey'}}>{item.owner.name}</Text>
                      <Text style={{paddingLeft: 10, color: 'grey'}}>{item.payment}</Text>
                    </View>
                  }
                  avatar = {

                    <Image source={{ uri: 'https://s-media-cache-ak0.pinimg.com/736x/60/aa/e4/60aae45858ab6ce9dc5b33cc2e69baf7--martin-schoeller-character-inspiration.jpg' }}
                      style={{borderRadius:50, height:50, width:50 }}
                    />
                    // {
                    //   uri: 'https://s-media-cache-ak0.pinimg.com/736x/60/aa/e4/60aae45858ab6ce9dc5b33cc2e69baf7--martin-schoeller-character-inspiration.jpg',
                    //   //rounded: true,
                    //
                    //   //padding: 100,
                    //
                    //
                    // }

                  }
                  // avatarStyle = {
                  //   {
                  //     rounded: true
                  //   }
                  // }
                  //
                  // avatarStyle={{  }}
                  containerStyle={{borderBottomWidth: 0}}
  // FROM HERE TO BOTTOM COMMENT OUT
                  />

                </TouchableOpacity>

              )}
            }
          keyExtractor={item => item.id}
          />
      );
    }
  }
                // subtitle={
                //   <TouchableOpacity
                //     onPress={() =>
                //       navigate('Post', {
                //         item: item,
                //         name : item.owner.name,
                //         starCount : item.owner.rating,
                //         price : item.payment,
                //         postTitle : item.title,
                //         postDescription : item.description,
                //       })
                //     }
                //     underlayColor='black'
                //   >
                //     <View style = {styles.columnContainer}>
                //       <View style={styles.rowContainer}>
                //         <Image source={{uri: source= 'https://s-media-cache-ak0.pinimg.com/736x/60/aa/e4/60aae45858ab6ce9dc5b33cc2e69baf7--martin-schoeller-character-inspiration.jpg'}} style={styles.photo} />
                //         <Text style={styles.text}>
                //            {`${item.owner.name}`}
                //         </Text>
                //         <RatingStar starCount = {item.owner.rating}
                //                     starSize = {25}/>
                //       </View>
                //       <View style={styles.rowContainer} >
                //         <Text style = {styles.titleText}>
                //           {`${item.title}`}
                //         </Text>
                //         <View style = {styles.priceContainer} >
                //           <Text style= {styles.text}>
                //             {`${item.payment}`}
                //           </Text>
                //         </View>
                //       </View>
                //       <View style = {styles.container}>
                //         <Text style = {styles.text}>
                //           {`${item.description}`}
                //         </Text>
                //       </View>
                //     </View>
                //   </TouchableOpacity>
                // }
//               />
//           }
//         keyExtractor={item => item.id}
//         />
//     );
//   }
// }

const SimpleApp = StackNavigator({
  Home: {screen: Timeline},
  AddPost: { screen: AddPostView },
  UserProfile: {screen: UserProfile},
  Post: {screen: PostView},
},
  {headerMode : 'none'}
);

const SideBar = DrawerNavigator ({
    SimpleApp: {
      screen: SimpleApp
    },
    UserProfile: {
      screen: UserProfile
    },
    UserPosts: {
      screen: UserPosts
    },
  //   {
  //    drawerPosition: 'right',
  //    contentOptions: {
  //      activeTintColor: '#000',
  //    },
  //  },
});

AppRegistry.registerComponent('Corgo', () => SideBar);
export default SideBar;
