import React, { Component } from 'react';
import {View , Text , FlatList } from 'react-native';

//key がないと警告表示
const data = [
  {str: 'hoge', key:1},
  {str: 'fuga', key:2},
  {str: 'foo',  key:3}
];


//連想配列の方法
export default class App extends Component {
  render(){
    return(
      <View style = {{paddingTop:50}}>
        <FlatList 
          data = {data}
          renderItem = {({item}) => {
            return <Text key = {item.key}>{item.str}</Text>
          }}
        />
      </View>
    );
  }
}