import React, { Component } from 'react';
import {View , TextInput } from 'react-native';

// 下線部を borderBottomWidth で実現している

export default class App extends Component {
  constructor(){
    super()
      this.state = {
        text: ""
      }
  }
  render(){
    return(
      <View style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
      }}>
        <TextInput
          style = {{
            width: '50%',
            borderBottomWidth: 1.5,
            borderBottomColor: '#ccc'
          }}
          onChangeText = {(text) =>
            this.setState({text})}
          value = {this.state.text}/>
      </View>
    );
  }
}