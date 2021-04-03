import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform ,StyleSheet, Text, View } from 'react-native';

//プラットフォームによって変更する
const instructions = Platform.select({
  ios: 'Press Cmd + R',
  android: 'Press Double Taps'
});

export default class App extends Component {
  render(){
    // instructionsのメッセージは プラットフォームによって変更される
    return(
      <View style = {styles.container}>
        <Text style = {styles.welcome}> Hello World !</Text>
        <Text style = {styles.instructions}> To get started , edit App.js </Text>
        <Text style = {styles.instructions}> {instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome:{
    fontSize:20,
    textAlign: 'center',
    margin: 10,
  },
  instructions:{
    textAlign:'center',
    color:'#333333',
    marginBottom: 5
  }
});
