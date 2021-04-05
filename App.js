import React, { Component } from 'react';
import {View , Image, TouchableOpacity } from 'react-native';

export default class App extends Component {
  showWarning() {
    console.warn('prwss test');
  }
  render(){
    return(
      //画像つき ボタン
      <View style = {{flex:1, justifyContent:'center', alignContent:'center'}}>
        <TouchableOpacity onPress = {this.showWarning}>
          <Image style = {{width:64,height:64}} source = {require('./assets/favicon.png')}></Image>
        </TouchableOpacity>
      </View>
    );
  } 
}

///解説
//スタイル シート を 指定 し て い ない ので 画面 の 左上 に 表示 さ れ て い ます