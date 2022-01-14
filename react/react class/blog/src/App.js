/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '광주디저트맛집']); 
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false); //모달창을 켜고 닫는 스위치, 사이트 첫 로드시 모달창은 안보임
  let [누른제목, 누른제목변경] = useState(0);

  function 반복된UI(){

    var 어레이 = [];
    for (var i = 0; i < 3; i++){
      어레이.push(<div>안녕</div>);
    }
    return 어레이
  }

  let posts = '파이썬 독학'

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발blog</div>
      </div>
      
      {
        글제목.map(function(글, i){
          return <div className='list'>
            <h3 onClick={ ()=>{ 누른제목변경(i) } }> { 글 } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉}
            </h3>
            <p>1월 14일 발행</p>
            <hr/>
            </div>
        })

      }
      
      {/*<button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button>
      <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button>
    <button onClick={ ()=>{ 누른제목변경(2) } }>버튼3</button>*/}


      <button onClick={ ()=>{ modal변경(!modal) } }> 열고닫는 버튼 </button>

      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목} ></Modal>
        : null
      }

    </div>
  );
  
}

//Component 만드는 법
function Modal(props){    // 부모에게 전달받은 props는 여기에 다 들어있음
  return (
    <div className='modal'>   
      <h2> { props.글제목[props.누른제목] } </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    )
}



export default App;
