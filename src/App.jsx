import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';

import {AnswersList} from './components/index.js';

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

  //内容を設定
  initAnsWer = () => {
    const initdata = this.state.dataset[this.state.currendId];
    const initAns = initdata.answers;

    this.setState({
      answers: initAns
    });
  }

  //初期化処理
  componentDidMount(){
    this.initAnsWer();
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }

}