# NEXT.JS 시작하기

[노마드코더 강의]: https://nomadcoders.co/nextjs-fundamentals



## 목차

0. [INTRODUCTION](#introduction)

   0.2 [Creating a Project](#creating-a-project)

1. [FRAMEWORK OVERVIEW](#framework-overview)

   1.1 [Library vs Framework](#library-va-framework)

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




### 1.1 Pages

### 1.2 Static Pre Rendering

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

