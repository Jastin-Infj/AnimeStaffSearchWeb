import React from 'react';
import Article from './Article.jsx';

const TestObject = () => {

  ////初期化処理
  //componentDidMount(){
  //  document.getElementById('counter').addEventListener('click',this.countUp);
  //}

  ////更新処理
  //componentDidUpdate(){
  //  
  //}

  ////解放処理
  //componentWillUnmount(){
  //  
  //}

  //countUp = () => {
  //  let upCount = this.state.count + 1;
  //  this.setState({
  //    count: upCount
  //  });
  //}

  return (
    <React.Fragment>
      <Article
        title={"test"}
      ></Article>
    </React.Fragment>
  )
}

export default TestObject;