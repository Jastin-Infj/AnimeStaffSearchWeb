import React, { Component } from 'react';
import {View , Image } from 'react-native';

export default class App extends Component {
  render(){
    return(
      //ローカルファイル
      <View><Image style = {{width:64,height:64}} source = {require('./assets/favicon.png')}></Image></View>
      //外部URL
      //<View><Image style = {{width:64,height:64}} source = {{uri:'https://facebook.github.io/react-native/img/favicon.png'}}></Image></View>
    );
  }
}

///解説
//スタイル シート を 指定 し て い ない ので 画面 の 左上 に 表示 さ れ て い ます  