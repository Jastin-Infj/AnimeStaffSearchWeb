import React ,  { Component } from 'react';
import {StyleSheet, Platform, Text , View, Button , DatePickerAndroid , DatePickerIOS} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      vibrate: false,
      date: new Date()
    }
  }

  async openDatePickerAndroid(){
    try{
      const {action , year , month , day} = await DatePickerAndroid.open({
        date: new Date(2021,4,25)
      });

      if( action !== DatePickerAndroid.dismissedAction){
        this.setState({
          date: new Date(year,month,day)
        })
      }
    }
    catch({code,message}){
      console.warn('Cannot open date picker',message);
    }
  }

  //Textオブジェクトの場合は、<Text></Text>のほうがやりやすいかも
  render(){
    const {date} = this.state;
    return(
      <View style = {{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#F5FCFF',
      }}>
        <Text>{`${date.getFullYear()}年　${date.getMonth() + 1}月 ${date.getDate()}日`}</Text>
          {Platform.OS === 'ios' ? 
            <RNDateTimePicker
            style = {{width: 320}}
            value = {date}
            onChange = {(event,date) => {
                // RNDateTimePickerの場合 {value} 属性が変更されない
                // setState()を呼び出すことが必須になる
                this.state.date = dayjs(date).toDate();
                // 内容を更新してからsetStateを呼び出し
                this.setState(this.state.date);
              }
            }
            mode = {'date'}
            display = {'spinner'}/>
            :
            <Button onPress = {() =>
              this.openDatePickerAndroid()}
              title={'日にちを選ぶ'}/>
          }
      </View>
    );
  }
}