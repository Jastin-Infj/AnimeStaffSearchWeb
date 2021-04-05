import React, { Component } from 'react';
import {Text,View,Button ,Share} from 'react-native';

//シェアを実行したら、 実行
export default class App extends Component {
  constructor(){
    super()
      this.state = {
        position:{}
      }
  }
  openShare(){
    Share.share({
      title: 'タイトル',
      message: '概要'
    },{}).then((result, activityType) => {
      if(result.action === Share.dismissedAction){
        //シェアを実行した場合 (iosのみ)
        console.warn('シェア拒否');
      }
      else if(result.action === Share.sharedAction){
        //シェアを実行した場合 (iosのみ Androidは常にこれが実行される)
        console.warn('シェア実行');
      }
      else{
        console.warn('それ以外');
      }
    })
  }
  render(){
    const postion = this.state.position;
    return(
      <View style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      }}>
        <Button
          onPress = {() => this.openShare()}
          title = {'シェアを開く'}
        />
      </View>
    );
  }
}