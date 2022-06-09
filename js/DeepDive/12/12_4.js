// 12.4 함수 정의
// 12.4.1 함수 선언문
// 12-05
// 함수 선언문
function add(a, b) {
  return a + b;
}

// 함수 참조
// console.dir()은 console.log()와는 달리 함수 객체의 프로퍼티까지 출력한다.
// 단, Node.js 환경에서는 console.log()와 같은 결과가 출력된다.
console.dir(add); // [Function: add]

// 함수 호출
console.log(add(5, 2)); // 7

// 12-06
// 함수 선언문은 함수 이름을 생략할 수 없다.
// function (a, b) {
//     return a + b;
// }
// SyntaxError: Function statements require a function name

// 12-07
// 함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
// 하지만 함수 선언문이 변수에 할당되는 것처럼 보인다.
var add = function add(x, y) {
  return x + y;
};

// 함수 호출
console.log(add(2, 5)); // 7

// 12-08
// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() {
  console.log("foo");
}
foo(); // foo

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 일므을 생략할 수 있다.
// (function bar() {
//   console.log("bar");
// });
// bar();
// ReferenceError: bar is not defined

// 12-09
var add = function add(x, y) {
  return x + y;
};

console.log(add(2, 5)); // 7

// 12.4.2 함수 표현식
// 12-10
// 함수 표현식
var add = function (x, y) {
  return x + y;
};

console.log(add(2, 5)); // 7

// 12-11
// 기명 함수 표현식
var add1 = function foo1(x, y) {
  return x + y;
};

// 함수 객체를 가리키는 식별자로 호출
console.log(add1(2, 5)); // 7

// 함수 이름으로 호출하면 ReferenceError가 발행한다.
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
// console.log(foo1(2, 5)); // ReferenceError: foo1 is not defined

// 12.4.3 함수 생성 시점과 함수 호이스팅
// 12-12
// 함수 참조
console.dir(add2); // [Function: add2]
console.dir(sub2); // undefined

// gkatn ghcnf
console.log(add2(2, 5)); // 7
// console.log(sub2(2, 5)); // TypeError: sub2 is not a function

// 함수 선언문
function add2(x, y) {
  return x + y;
}

// 함수 표현식
var sub2 = function (x, y) {
  return x - y;
};

// 함수 호이스팅 : 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징
// 함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생

// 12.4.4 Function 생성자 함수
// 12-13
var add3 = new Function("x", "y", "return x + y");

console.log(add3(2, 5)); // 7

// 12-14
var add4 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();

// console.log(add4(1, 2)); // 13

// var add5 = (function () {
//   var a1 = 10;
//   return new Function("x", "y", "return x + y + a1;");
// })();

// console.log(add5(1, 2));

// ReferenceError: a1 is not defined

// 12.4.5 화살표 함수
// 12-15
// 화살표 함수
const add6 = (x, y) => x + y;
console.log(add(2, 5)); // 7
