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
      body{
      	font-family: 'nanumsquare';
      }
      .black-nav{
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

   