# React - codingapple

## 목차

1. Part 1 : 블로그 제작 & 기초 문법
   1. React 강의 OT : 왜 리액트가 필요한가
   2. 리액트 React 설치와 개발환경 셋팅(2021 ver)
   3. JSX를 이용해 HTML 페이지 제작해보는 건 처음이겠죠
   4. 중요한 데이터는 변수말고 리액트 state로 만들랬죠
   5. 버튼에 기능개발을 해보자 & 리액트 state 변경하는 법
   6. 숙제 해설 : 블로그 수정버튼 만들기
   7. React Component : 많은 div들을 한 단어로 줄이고 싶은 충동이 들 때
   8. 클릭하면 동작하는 UI(모달창) 만드는 법
   9. map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때
   10. props : 자식이 부모의 state를 가져다쓰고 싶을 땐 말하고 쓰셔야 합니다
   11. UI 제작 패턴 : props를 응용한 상세페이지 만들기
   12. input 다루기 1 : 사용자가 입력한 글을 변수에 저장하는 법
   13. input 다루기 2 : 블로그 글발행 기능 만들기
   14. class를 이용한 옛날 옛적 React 문법 

## Part 1 : 블로그 제작 & 기초 문법 

### 1. React 강의 OT : 왜 리액트가 필요한가

1. Web-app의 장점

   1. 모바일앱으로 발행이 쉬움
   2. 앱처럼 뛰어난 UX
   3. 그냥 웹사이트보다 비즈니스적 강점

2. 리액트 문법 특징

   1. 어려움

3. 필요한 사전지식

   1. var let const
   2. if else
   3. for
   4. function return
   5. array object다루기
   6. addEventListener
   7. HTML/CSS

   

### 2. 리액트 React 설치와 개발환경 셋팅(2021 ver)

1. Node.js, VS Code 설치

   1. Node.js 설치이유 : create-react-app 라이브러리 때문
      - nodejs 설치하면 npm이라는 툴 이용가능
      - npm으로 create-react-app이용했음

2. 작업폴더에서 npx create-react-app으로 리액트 프로젝트 생성하기

   - https://ko.reactjs.org/docs/create-a-new-react-app.html

   ```
   npx create-react-app 프로젝트명
   ```

   - create-react-app : 리액트 셋팅 다된 boilerplate 만들기 쉽게 도와주는 라이브러리

3. 생성된 blog라는 폴더 에디터로 열고 코딩시작

   1. src/App.js : 메인 페이지에 들어갈 HTML 짜는 곳
      - 실제 메인 페이지는 public/index.html 
      - App.js 내용을 index.html에 넣으라고 명령하는 건 index.js
   2. node_modules : 라이브러리 모은 폴더
   3. public : static 파일 보관함
   4. src : 소스코드 보관함
   5. package.json : 설치한 라이브러리 목록

4. 내가 짠 코드 웹 미리보기 띄우는 법

   ```
   npm start
   ```

   - 에러

     ```
     npm ERR! code ENOENT
     npm ERR! syscall open
     npm ERR! path C:\Users\하루\Desktop\SSAFY\TIL\react\react class/package.json
     npm ERR! errno -4058
     npm ERR! enoent ENOENT: no such file or directory, open 'C:\Users\하루\Desktop\SSAFY\TIL\react\react class\package.json'
     npm ERR! enoent This is related to npm not being able to find a file.
     npm ERR! enoent
     
     npm ERR! A complete log of this run can be found in:
     npm ERR!     C:\Users\하루\AppData\Local\npm-cache\_logs\2022-01-10T19_24_30_796Z-debug-0.log
     ```

     - 해결책 : 콘솔경로가 다른 곳에서 호출되서 에러. 소스쪽으로 경로 이동 필요

     ```
     cd blog   #프로젝트명
     npm start
     ```

     

### 3. JSX를 이용해 HTML 페이지 제작해보는 건 처음이겠죠

1. App.js 안 필요없는 것들 다 지우기 : header 삭제

2. 블로그 navbar만들기

   1. 태그에 class를 주고싶으면?

      - < div className="클래스명" >

      ```
      #App.js
      function App() {
      	return(
      		<div className="App">
      			<div className="black-nav">
      				<div>개발 Blog</div>
      			</div>
      		</div>
      	);
      }
      ```

      ```
      #App.css
      body {
      	font-family: 'nanumsquare';
      }
      .black-nav {
      	background: black;
      	width: 100%;
      	display: flex;
      	color: white;
      	padding: 20px;
      	font-weight: 600;
      	font-size:20px;
      }
      ```

      

   2. 리액트에서 데이터 바인딩 쉽게하는 법

      - { 변수명, 함수 등 }
      - src, id, href 등의 속성에도 {변수명, 함수 등}
      - 상상하는 모든 곳에 {}로 변수 집어넣기 가능

      ```
      #App.js 설명
      import logo from './logo.svg';
      import './App.css';
      
      function App() {
      
        let posts = '강남 고기 맛집'  <- 서버에서 가져온 데이터
      
        return (
          <div className="App">
            <div className="black-nav">
              <div>개발blog</div>
            </div>
            <h4>블로그글</h4>   <- 그걸 여기 보여줘야 함
          </div>
        );
      }
      
      export default App;
      ```

      ```
      #App.js
      import React from 'react';
      import logo from './logo.svg';
      import './App.css';
      
      function App() {
      
        let posts = '강남 고기 맛집' 
        function 함수(){
          return 100
        }
        return (
          <div className="App">
            <div className="black-nav">
              <div>개발blog</div>
            </div>
            <img src={logo} />
            <h4>{ posts }</h4>
            <h4>{ 함수() }</h4>
          </div>
        );
      }
      
      export default App;
      ```

   3.  JSX에서 style 속성 집어넣을 때

      - object형식으로 집어넣어야함
      - style={object 자료형으로 만든 스타일}

      ```
      #App.js
      import React from 'react';
      import logo from './logo.svg';
      import './App.css';
      
      function App() {
      
        let posts = '강남 고기 맛집' 
        function 함수(){
          return 100
        }
        return (
          <div className="App">
            <div className="black-nav">
              <div style={ { color : 'blue', fontSize : '30px' } }>개발blog</div>
            </div>
            <img src={logo} />
            <h4>{ posts }</h4>
            <h4>{ 함수() }</h4>
          </div>
        );
      }
      
      export default App;
      ```

      ```
      #App.js
      import React from 'react';
      import logo from './logo.svg';
      import './App.css';
      
      function App() {
      
        let posts = '강남 고기 맛집' 
        let ponts = { color : 'blue', fontSize : '30px' }
      
        function 함수(){
          return 100
        }
        return (
          <div className="App">
            <div className="black-nav">
              <div style={ ponts }>개발blog</div>
            </div>
            <img src={logo} />
            <h4>{ posts }</h4>
            <h4>{ 함수() }</h4>
          </div>
        );
      }
      
      export default App;
      ```



### 4.중요한 데이터는 변수말고 리액트 state로 만들랬죠

1. 데이터는 1.변수에 넣거나 2.state에 넣거나

2. 리액트의 데이터 저장공간 state 만드는 법 : react 에 있는 내장함수 하나를 가져다 씀

   - { useState } 상단에 첨부
   - useState(데이터)

   ```
   #App.js
   import React, { useState } from 'react';
   import logo from './logo.svg';
   import './App.css';
   
   function App() {
   
     let [글제목, 글제목변경] = useState('남자 코트 추천'); 
     
     return (
       <div className="App">
         <div className="black-nav">
           <div>개발blog</div>
         </div>
         <div className="list">
           <h3> { 글제목 } </h3>
           <p>1월 11일 발행</p>
           <hr/>
         </div>
       </div>
     );
   }
   
   export default App;
   ```

   ```
   #App.js
   import React, { useState } from 'react';
   import logo from './logo.svg';
   import './App.css';
   
   function App() {
   
     let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집']); 
     
     return (
       <div className="App">
         <div className="black-nav">
           <div>개발blog</div>
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
   ```

   - ES6 destructuring 문법

     - [10, 100]; 이 두개 데이터를 변수로 담고싶다면? var a = 10, var b = 100

     ```
     var [a,b] = [10,100];
     ```

     - array, object에 있던 자료를 변수에 쉽게 담고 싶을 때
     - [state 데이터, state 데이터 변경 함수]

3. state는

   1. 변수 대신 쓰는 데이터 저장공간
   2. useState()를 이용해 만들어야 함

4. state에 데이터 저장해놓는 이유

   - 웹이 App처럼 동작하게 하고 싶어서
   - 그냥 변수는 변경되어도 자동 재렌더링이 안됨
   - state는 변경되면 HTML이 자동으로 재렌더링이 됨
   - 재목을 정렬, 수정하면 새로고침 없이도 HTML에 렌더링됨
   - 그렇기에 자주 바뀌는, 중요한 데이터는 변수말고 state로 저장해서 써야



### 5. 버튼에 기능개발을 해보자 & 리액트 state 변경하는 법

1. 터미널에 뜨는 warning (노란색)

   - eslint가 잡아주는 문법 체크사항

   - warning 제거 원할 시

     ```
     /* eslint-disable */
     ```

2. 좋아요 버튼 만들기

   - onClick={ 클릭될 때 실행할 함수 }
   - onClick={ ()=>{ 실행할 내용 } }

3. state 변경방법

   - 따봉이랑 같이 만들었던 따봉변경(대체할 데이터)



### 6. 숙제 해설 : 블로그 수정버튼 만들기



### 7. React Component : 많은 div들을 한 단어로 줄이고 싶은 충동이 들 때



### 8. 클릭하면 동작하는 UI(모달창) 만드는 법



### 9. map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때



### 10. props : 자식이 부모의 state를 가져다쓰고 싶을 땐 말하고 쓰셔야 합니다



### 11. UI 제작 패턴 : props를 응용한 상세페이지 만들기



### 12. input 다루기 1 : 사용자가 입력한 글을 변수에 저장하는 법



### 13. input 다루기 2 : 블로그 글발행 기능 만들기



### 14. class를 이용한 옛날 옛적 React 문법 