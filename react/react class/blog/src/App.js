/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집']); 
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false); //모달창을 켜고 닫는 스위치, 사이트 첫 로드시 모달창은 안보임

  function 반복된UI(){

    var 어레이 = [];
    for (var i = 0; i < 3; i++){
      어레이.push(<div>안녕</div>);
    }
    return 어레이
  }

  let posts = '파이썬 독학'



  // function 제목바꾸기(){
  //  var newArray = [...글제목];   /* 수정된[데이터] 만듦, 원본 state 수정X(특히 state가 Array, Object 자료형이면), 글제목에 있던 0번째 데이터를 여자코트추천으로 바꿈 */
  //  newArray[0] = '여자 코트 추천';    /* 고로 state의 복사본을 만들어서 수정, state를 deep copy해서 수정해야함  */
  //  글제목변경( newArray );
  //}

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발blog</div>
      </div>
      
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{ 1 + 1 } }>👍</span>0 </h3>
        <h4>1. 누를 때마다 콘솔창에 1이 뜨게</h4>
        <h3> { 글제목[1] } <span onClick={ ()=>{ console.log(1) } }>👍</span>0 </h3> 
        <h4>2. 누를 때마다 1 증가시키기</h4>
        <h3> { posts } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3> 
        <p>1월 11일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={ ()=>{ modal변경(true) } }> { 글제목[1] } </h3>
        <p>1월 11일 발행</p>
        <hr/>
      </div>

      { 반복된UI() }


      {
        글제목.map(function(글){
          return <div className='list'>
            <h3> { 글 } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉}
            </h3>
            <p>1월 13일 발행</p>
            <hr/>
            </div>
        })

      }
    
      
      <button onClick={ ()=>{ modal변경(!modal) } }> 열고닫는 버튼 </button>

      {
        modal === true
        ? <Modal 글제목={글제목} ></Modal>
        : null
      }

    </div>
  );
  
}

//Component 만드는 법
function Modal(props){    // 부모에게 전달받은 props는 여기에 다 들어있음
  return (
    <div className='modal'>   
      <h2> { props.글제목[1] } </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    )
}



export default App;
