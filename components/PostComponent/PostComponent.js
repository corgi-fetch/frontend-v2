import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, StatusBar} from 'react-native';

import RatingStar from '../RatingStar';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create ({
    columnContainer: {
          paddingTop: 35,
          paddingLeft: 20,
          paddingRight: 20,
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'white'
    },
      contentContainer: {
          padding: 10,
          width: 335,
          borderColor: 'black',
          borderWidth: 2,
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
});

function PostComponent ({
    owner,
    ownerName,
    description,
    title,
    payment
}) {
    return (
        <View style={ styles.mainContainer }>
        <View style={ styles.topContainer }>
          <View style={ styles.postHeaderContainer }>
            <View style={ styles.postImage }>
              <Image source={{ uri: 'http://graph.facebook.com/' + owner + '/picture?type=square' }}
                  style={{borderRadius:25, height:50, width:50 }}
                />
            </View>
            <View>
              <View style={ styles.textContainer }>
                <Text style={ styles.textBoxHeader }>
                  {ownerName}
                </Text>
                <Text style={ styles.textBoxHeader }>
                  
                </Text>
              </View>
              <View style={styles.textContainer}>
                <Text>
                  
                </Text>
              </View>
            </View>
          </View>
          <View style={ styles.textContainer }>
            <Text style={ styles.textBoxTitle }>
              {title}
            </Text>
          </View>
          <View style={ styles.textContainer }> 
            <Text style={ styles.textPriceBox }>
              ${payment}
            </Text>
          </View>
          <View style={ styles.textContainer }>
            <Text style={ styles.textBox }>
              {description}
            </Text>
          </View>
        </View>
        <View style={ styles.bottomContainer }>
          <InterestedQueue queue="hello"/>
        </View>
      </View>
    )
}



