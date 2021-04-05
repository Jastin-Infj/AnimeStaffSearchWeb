import React, { Component } from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// React は 原則 state　変数を管理していく
// DatePickerIOS(react-native) から DateTimePicker ('@react-native-community/datetimepicker') に移行
export default class App extends Component {
  constructor(){
    super()
      this.state = {
        date: new Date()
      }
  }
  render(){
    return(
      <View style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor: '#F5FCFF'
      }}>
        <DateTimePicker
          style = {{width: 320}}
          value = {this.state.date}
          onDateChange = {date => {
            this.setState({date})
          }}
          mode = {'date'}
          display = {'spinner'}
        />
      </View>
    );
  }
}