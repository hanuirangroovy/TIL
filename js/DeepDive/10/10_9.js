// 10.9 ES6에서 추가된 객체 리터럴의 확장 기능
// 10.9.1 프로퍼티 축약 표현
// 10-19
// ES5
// var x = 1,
//   y = 2;

// var obj = {
//   x: x,
//   y: y,
// };

// console.log(obj); // { x: 1, y: 2 }

// 10-20
// ES6
let x = 1,
  y = 2;

// 프로퍼티 축약 표현
const obj = { x, y };

console.log(obj); // { x: 1, y: 2 }

// 10.9.2 계산된 프로퍼티 이름
// 10-21
// ES5
var prefix = "prop";
var i = 0;

var obj2 = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj2[prefix + "-" + ++i] = i;
obj2[prefix + "-" + ++i] = i;
obj2[prefix + "-" + ++i] = i;

console.log(obj2); // { 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }

// 10-22
// ES6
const prefix3 = "prop";
let j = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj3 = {
  [`${prefix3}-${++j}`]: j,
  [`${prefix3}-${++j}`]: j,
  [`${prefix3}-${++j}`]: j,
};

console.log(obj3); // { 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }

// 10.9.3 메서드 축약 표현
// 10-23
// ES5
var obj4 = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi! " + this.name);
  },
};

obj4.sayHi(); // Hi! Lee

// 10-24
// ES6
const obj5 = {
  name: "Lee",
  // 메서드 축약 표현
  sayHi() {
    console.log("Hi! " + this.name);
  },
};
obj5.sayHi(); // Hi! Lee
