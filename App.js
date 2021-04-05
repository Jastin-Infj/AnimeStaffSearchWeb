import React, { Component } from 'react';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  render(){
    return(
      <WebView
        source = {{
          uri:'https://amazon.co.jp/'
        }}
        style = {{marginTop: 20}}
        scalesPageToFit = {true}
      />
    );
  }
}