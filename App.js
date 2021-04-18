import React , {Component} from 'react';
import {View , Text , Dimensions } from 'react-native';

export default class App extends Component{
  render(){
    const {width , height , scale } = Dimensions.get('window');

    return(
      <View style = {{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F5FCFF'
      }}>
        <Text>{'幅: ' + width}</Text>
        <Text>{'高さ: ' + height}</Text>
        <Text>{'倍率:' + scale}</Text>
      </View>
    );
  }
}