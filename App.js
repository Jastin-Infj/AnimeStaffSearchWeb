import React, { Component } from 'react';
import {View , Button } from 'react-native';

export default class App extends Component {
  render(){
    return(
      //ボタン作成
      <View style = {{flex:1, justifyContent:'center', alignContent:'center'}}>
        <Button onPress = {() => console.warn('pressed!')} title = {'Press'}></Button>
      </View>
    );
  }
}

///解説
//スタイル シート を 指定 し て い ない ので 画面 の 左上 に 表示 さ れ て い ます