# NEXT.JS 시작하기

[노마드코더 강의]: https://nomadcoders.co/nextjs-fundamentals



## 목차

0. [INTRODUCTION](#introduction)

   0.2 [Creating a Project](#creating-a-project)

1. [FRAMEWORK OVERVIEW](#framework-overview)

   1.1 [Library vs Framework](#library-vs-framework)

   1.2 [Pages](#pages)

   1.3 [Static Pre Rendering](#static-pre-rendering)

   1.4 [CSS Modules](#css-modules)

   1.5 [Styles JSX](#styles-jsx)

   1.6 [Custom App](#custom-app)

   1.7 [Recap](#recap)

2. [PRACTICE PROJECT](#practice-project)

   2.0 [Patterns](#patterns)

   2.1 [Fetching Data](#fetching-data)

   2.2 [Redirect and Rewrite](#redirect-and-rewirte)

   2.3 [Server Side Rendering](#server-side-rendering)

   2.4 [Recap](#recap)

   2.5 [Dynamic Routes](#dynamic-routes)

   2.6 [Movie Detail](#movie-detail)

   2.7 [Catch All](#catch-all)

   2.8 [404 Pages](#404-pages)



## 0. INTRODUCTION

### 0.2 Creating a Project

- state, props, routing, rendering, deployment
- `npx create-next-app` 실행
  - react, react-dom, next 설치됨
- typescript도 사용한다면 `npx create-next-app@latest --typescript`
- `npm run dev` 실행



## 1. FRAMEWORK OVERVIEW

### 1.0 Library vs Framework

- framework와 library 차이
  - pages 안 index 파일에 넣은 것이 자동적으로 웹사이트 localhost home에서 보임
  -  home component에 넣은 hi가 자동적으로 보여짐
  - 이게 framework와 library의 차이
  - library는 개발자로서 자신이 사용하는 것. library를 불러와서 library를 사용해서 무언가를 함
  - framework는 코드를 불러오는 것 
- framework
  - 코드를 적절한 위치에 잘 적기만 한다면 코드를 불러와서 모든 걸 동작하게 함
  - next.js같은 framework에선 특정한 규칙을 따라서 특정한 걸 해야함
  - 그것을 따라야 모든 게 정상적으로 작동하고 next.js도 우릴 도울 수 있음
  - 어디를 봐도 ReactDom.render를 볼 수 없고 이 과정을 커스텀할 수 있는 곳이 없음
  - pages안에서 뭔가를 만드는 것 뿐
  - 코드를 어떤 곳에 넣으면 framework가 그 코드를 부르는 형태
- library
  - 내가 원하는 대로 코드를 작성할 수 있고 사용하고 싶을 때 사용할 수 있음
- create react-app
  - ReactDom.render가 있음
  - 항상 App component로 시작함
  - 하지만 비어있는 App component에서 결정할 수 있음. Components 폴더를 만든다든지 Routs 폴더를 만든다든지. 언제 react를 부를지 어떤 폴더 구조로 민들지. 내가 원하는대로 할 수 있음
- React.js는 원할 때 부르고 원할 떄 사용하는 library 이고 framework는 약간 집 같은 것으로 내가 코드를 적절한 곳에 넣어야 하는 것. 내가 기본적으로 그 집을 수정할 수는 없음. 그러니 규칙을 따라서 코드가 있어야 할 곳에 잘 두면 됨. 그러면 framework가 그 코드를 호출할 거임.



### 1.1 Pages

- 프로젝트에서 page 추가
  - react.js component를 export하고 있는 파일을 pages 폴더 안에 두기만 하면 됨
  - next.js가 파일의 이름을 가져다가 url의 이름으로 씀
  - component의 이름은 중요하지 않음
  - 중요한 것은 export default여야 한다는 것
  - default로 export하지 않는다면, 우리가 사이트에서 about에 들어갔을 때 에러 발생

- create react-app만을 한다면
  - Recat router DOM을 다운받아야하고 그걸 설정해야하고, router를 설계하고 component를 import하고 router를 render해야함
  - but next.js로 일을 하게 되면 이 모든 것들이 다 되어있음

- pages 폴더 안에 넣을 수 있는 몇 가지 예외상황
  - index.js -앱의 홈페이지로 연결. 홈페이지는 보이는 것처럼 그냥 슬래시로 표시
    - `localhost:3000/index` -페이지 없음. 404 페이지 뜸

- jsx를 쓰고 있다면 React.js를 import할 필요 없음

- useState나 useEffect와 같은 react method를 쓰고 싶다면 react.js를 import해야 함



### 1.2 Static Pre Rendering

- next.js의 가장 좋은 기능 중 하나는 앱에 있는 페이지들이 미리 렌더링 된다는 것. 이것들을 정적(static)으로 생성
- create react app과 next.js의 차이점
  - create react app - client-side render를 하는 앱을 만든다는 것
    - client-side rendering 
      - 브라우저가 유저가 보는 UI를 만드는 모든 것을 한다는 것 의미
      - 홈페이지 모든 것들은 react.js로 렌더링 된 것들
      - 유저가 보는 HTML 소스코드 안에 들어있지 않음
      - 브라우저가 react.js를 다운받고 코드를 다운받았을 때 그때 react.js의 다른 모든 것들을 렌더링하고 유저는 네비게이션 바를 비롯한 나머지를 보게 됨 
      - 브라우저가 자바스크립트를 가져와서 client-side의 자바스크립트가 모든 UI를 만드는 것
      - 사실상 비어있는 div만을 유저가 봄
  - next.js







### 1.3 Routing

### 1.4 CSS Modules

### 1.5 Styles JSX

### 1.6 Custom App

### 1.7 Recap



## 2. PRACTICE PROJECT

### 2.0 Patterns

### 2.1 Fetching Data

### 2.2 Redirect and Rewrite

### 2.3 Server Side Rendering

### 2.4 Recap

### 2.5 Dynamic Routes

### 2.6 Movie Detail

### 2.7 Catch All

### 2.8 404 Pages

