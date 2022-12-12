"use strict";

// Promsie is a JavaScript object for asynchronous operation.
// state : pending -> fulfilled
// Producer vs Consumer

// 1. Producer
// when new Promise is created. the executor runs automatically.

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("Ellie");
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓", 1000));
  });
// const getEgg = (hen) =>
//   new Promise((resollve, reject) => {
//     setTimeout(() => resolve(`${hen} => 🥚`), 1000);
//   });
// 만약 달걀을 받아오는 부분에서 네트워크에 문제로 실패가 되면. 어떤 핸들링도 하지 않으면 똑같이 error발생.
const getEgg = (hen) =>
  new Promise((resollve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍗`), 1000);
  });

getHen()
  // .then((hen) => getEgg(hen))
  // 함수를 전달할 때 받아오는 value를 다른 함수로 바로 호출하는 경우 생략 가능
  .then(getEgg)
  .catch((error) => {
    return "🥐"; // error생기면 다른 걸로 대체
  })
  //.then((egg) => cook(egg))
  .then(cook)
  //.then((meal) => console.log(meal));
  .then(console.log)
  .catch(console.log); // getEgg에서 오류가 발생했지만 error가 제일 밑으로 전달되며 catch가 잡혀짐
