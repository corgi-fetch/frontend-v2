import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
} from 'react-native';

var adresses = [];

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class SampleApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedAdresses: [],
      data: []
    };
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    //const urlBase = "https://corgoapi-v2.azurewebsites.net";
    //const { page, seed } = this.state;
    const url = global.urlBase + '/api/master/user';
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

  searchedAdresses = (searchedText) => {
    var searchedAdresses = this.state.data.filter(function(adress) {
      return adress.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
    });
    this.setState({searchedAdresses: searchedAdresses});
  };

  renderAdress = (adress) => {
    return (
      <View>
        <Text>{adress.name}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.textinput}
            onChangeText={this.searchedAdresses}
            placeholder="Type your adress here" />
        <ListView
                    dataSource={ds.cloneWithRows(this.state.searchedAdresses)}
          renderRow={this.renderAdress} />
      </View>
    );
  };
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textinput: {
    marginTop: 30,
    backgroundColor: '#DDDDDD',
    height: 40,
    width: 200
  }
});

export default SampleApp
