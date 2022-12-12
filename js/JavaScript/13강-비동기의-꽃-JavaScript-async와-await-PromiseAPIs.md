# 비동기의 꽃 JavaScript async와 await 그리고 유용한 Promise APIs

[자바스크립트 기초 강의 13]: https://www.youtube.com/watch?v=s1vpVCrT8f4&amp;list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&amp;index=13



- async, await
  - promise를 더 간결하고 동기적으로 실행되는 것처럼 보이게 만들어 줌.
  - 기존에 존재하는 promise 위에 좀 더 간편한 API를 제공 -> syntactic sugar



## 1. async, await

- 깔끔하게 promise를 사용할 수 있는 방법



## 2. async 써보기

- 오래걸리는 코드에 비동기적인 처리를 전혀 하지 않으면 js 엔진은 동기적으로 코드를 수행하기에 끝날 때까지 다음줄로 못 넘어감.
- 오래걸리는 일들은 비동기적으로 처리할 수 있도록!!
- 함수 앞에 async를 붙여주면 promise를 쓰지 않아도 promise로 변환됨



## 3. await 기다려

- await - async가 붙어 함수 안에서만 사용 가능
- await 키워드를 쓰면 딜레이가 끝날때까지 기다려줌
- promise도 중첩적으로 체이닝을 하게 되면 콜백지옥과 비슷한 문제점 발생



## 4. await 병렬 처리

- 순차적으로 처리하게되면 비효율적일 때
  - Promise를 만들어 Promise 안 코드블록 바로 실행. 그리고 동기화
  -  병렬적으로 기능을 수행할 수 있다면 => 5



## 5. 유용한 Promise

- Promise.all API - Promise 배열을 전달하게 되면 모든 Promise 배열들이 정렬적으로 다 받을 때까지 모아줌
- Promise.race API - 배열에 전달된 Promise 중에서 가장 먼저 값을 return하는 아이 전달