import React , {Component} from 'react';
import {StyleSheet , View , Button , TextInput , Text, Clipboard} from 'react-native';
//import ClipBoard from '@react-native-community/clipboard';

//ClipBoardは 非推奨だが、expo では 上記の ClipBoardが利用出来なかったため 旧 ClipBoardを利用
export default class App extends Component{
  constructor(){
    super()
      this.state = {
        input: "",
        text: ""
      }
  }
  pbcopy(){
    const {input} = this.state;
    Clipboard.setString(input);
  }

  async getpb(){
    const text = await Clipboard.getString();
    this.setState({text});
  }

  render(){
    return(
      <View style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      }}>
        <TextInput
          style = {{
            width: '100%',
            textAlign: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#ccc'
          }}
            value = {this.state.input}
            onChangeText = {
              input =>
                this.setState({input})
            }/>
        <Button
          onPress = {() =>
            {this.pbcopy()}
          }
          title = "save to ClipBoard"
          />
        <Text>{this.state.text}</Text>
        <Button
          onPress = {() =>
            {this.getpb()}
          }
          title = "get from ClipBoard"
        />
      </View>
    );
  }
}