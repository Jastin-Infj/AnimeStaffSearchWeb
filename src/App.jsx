import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answers:[],               //chat内容と質問
      chats:[],                 //chat回答
      currendId:"init",         //現在の質問状態
      dataset:defaultDataset,   //質問内容
      open:false                //モーダルウィンドウ
    }
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          {this.state.currendId}
        </div>
      </section>
    );
  }

}