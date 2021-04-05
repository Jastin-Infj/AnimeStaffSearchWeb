import React, { Component } from 'react';
import {View , ActivityIndicator } from 'react-native';

export default class App extends Component {
  render(){
    return(
      // animating: true スピナー処理中 false スピナー処理終了
      // large
      <View style = {{paddingTop:50}}>
        <ActivityIndicator 
          animating = {true}
          color = '#00ff00'
        />
      </View>
    );
  }
}