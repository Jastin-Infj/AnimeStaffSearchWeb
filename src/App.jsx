import React from 'react';
import './assets/styles/style.css';
import {db} from './firebase/index';

import {AnswersList , Chats} from './components/index.js';
import FormDialog from './components/Forms/Formdialog';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answers:[],               //chat内容と質問
      chats:[],                 //chat回答
      currendId:"init",         //現在の質問状態
      dataset:{},               //質問内容
      open:false                //モーダルウィンドウ
    }

    this.selectAnsWer    = this.selectAnsWer.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose     = this.handleClose.bind(this);
  }

  //内容を設定
  initAnsWer = () => {
    const initdata = this.state.dataset[this.state.currendId];
    const initAns = initdata.answers;

    this.setState({
      answers: initAns
    });
  }

  initChat = () => {
    const initDataset = this.state.dataset[this.state.currendId];
    const chat = {
      text: initDataset.question,
      type: 'question'
    };

    const chats = this.state.chats;
    chats.push(chat);

    this.setState({
      chats: chats
    });
  };


  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type:'question'
    });

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currendId: nextQuestionId,
      nextQuestionId:nextQuestionId
    });
  };

  selectAnsWer = (selectAnsWer, nextQuestionId) => {
    switch(true){
      case (nextQuestionId === 'init'):
        setTimeout(() => {
          this.displayNextQuestion(nextQuestionId);
        },500);
        break;
      case (nextQuestionId === 'contact'):
        setTimeout(() => {
          this.handleClickOpen();
        },500);
        break;
      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;

      default:
        const chat  = {
          text:selectAnsWer,
          type:'answer'
        };

        const chats = this.state.chats;
        chats.push(chat);

        this.setState({
          chats:chats
        });

        //次回の質問
        setTimeout(() => {
          this.displayNextQuestion(nextQuestionId);
        },1000);
        break;
    }
  };

  initDataset = (dataset) => {
    this.setState({
      dataset: dataset
    });
  }

  //初期化処理
  componentDidMount(){
    (async() => {
      const dataset = this.state.dataset;

      //ドキュメントを全て取得
      await db.collection('questions').get().then((snapshots) => {
        snapshots.forEach(doc => {
          const id = doc.id;
          const data = doc.data();

          //データ登録
          dataset[id] = data;
        });
      });

      this.initDataset(dataset);
      const initAnsWer = "";
      this.selectAnsWer(initAnsWer, this.state.currendId);
    })();

  }

  componentDidUpdate(){
    const scrollArea = document.getElementById('scroll-area');

    if(scrollArea){
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }

  handleClickOpen = () => {
    this.setState({
        open:true
    });
  };

  handleClose     = () => {
    this.setState({
        open:false
    });
  };

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats}></Chats>
          <AnswersList answers={this.state.answers} select={this.selectAnsWer}/>
          <FormDialog open={this.state.open} handleClose={this.handleClose}></FormDialog>
        </div>
      </section>
    );
  }

}