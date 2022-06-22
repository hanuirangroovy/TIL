// 18.2 함수 객체의 프로퍼티
// 18-02
function square(number) {
  return number * number;
}

console.dir(square); // [Function: square]

// 18-03
console.log(Object.getOwnPropertyDescriptor(square));

// __proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, "__proto__")); // undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.
// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));

// {
//     get: [Function: get __proto__],
//     set: [Function: set __proto__],
//     enumerable: false,
//     configurable: true
//   }

// 18.2.1 arguments 프로퍼티
// 18-04
function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 3)); // 2

// arguments 객체의 Symbol(Symbol.iterator) 프로퍼티
// 18-05
function multiply2(x, y) {
  // 이터레이터
  const iterator = arguments[Symbol.iterator]();

  // 이터레이터의 next 메서드를 호출하여 이터러블 객체 arguments를 순회
  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: 3, done: false }
  console.log(iterator.next()); // { value: undefined, done: true }

  return x * y;
}

multiply2(1, 2, 3);

// 18-06
function sum() {
  let res = 0;

  // argumetns 객체는 length 프로퍼티가 있느 ㄴ유사 배열 객체이므로 for 문으로 순회할 수 있다.
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6

// 18-07
function sum2() {
  // arguments 객체를 배열로 변환
  const array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum2(1, 2)); // 3
console.log(sum2(1, 2, 3, 4, 5)); // 15

// 18-08
// ES6 Rest parameter
function sum3(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum3(1, 2)); // 3
console.log(sum3(1, 2, 3, 4, 5)); // 15

// 18.2.2 caller 프로퍼티
// 18-09
function foo(func) {
  return func();
}

function bar() {
  return "caller : " + bar.caller;
}

// 브라우저에서의 실행한 결과
console.log(foo(bar)); // caller : function foo(func) {...}
console.log(bar());

// 18.2.3 length 프로퍼티
// 18-10
function foo2() {}
console.log(foo2.length); // 0

function bar2(x) {
  return x;
}
console.log(bar2.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2

// 18.2.4 name 프로퍼티
// 18-11
// 기명 함수 표현식
var namedFunc = function foo3() {};
console.log(namedFunc.name); // foo3

// 익명 함수 표현식
var anonymousFunc = function () {};
// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name); // anonymousFunc

// 함수 선언문(Function declaration)
function bar3() {}
console.log(bar3.name); // bar3

// 18.2.5 __proto__ 접근자 프로퍼티
// 18-12
const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메서드는 Object.prototype의 메서드다.
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("__proto__")); // false

// 18.2.6 prototype 프로퍼티
// 18-13
// 함수 객체는 prototype 프로퍼티를 소유한다.
(function () {}.hasOwnProperty("prototype")); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}.hasOwnProperty("prototype")); // false
