/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집']); 
  let [따봉, 따봉변경] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발blog</div>
      </div>
      <button>버튼</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{ 1 + 1 } }>👍</span>0 </h3>
        <h4>1. 누를 때마다 콘솔창에 1이 뜨게</h4>
        <h3> { 글제목[0] } <span onClick={ ()=>{ console.log(1) } }>👍</span>0 </h3> 
        <h4>2. 누를 때마다 1 증가시키기</h4>
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3> 
        <p>1월 11일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>1월 11일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
