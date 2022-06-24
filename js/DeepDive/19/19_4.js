// 19.4 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입
// 19-15
// obj 객체를 생성한 생성자 함수는 Object다.
const obj = new Object();
console.log(obj.constructor === Object); // true

// add 함수 객체를 생성한 생성자 함수는 Function이다.
const add = new Function("a", "b", "return a + b");
console.log(add.constructor === Function); // true

// 생성자 함수
function Person(name) {
  this.name = name;
}

// me 객체를 생성한 생성자 함수는 Perosn이다.
const me = new Person("Lee");
console.log(me.constructor === Person); // true

// 19-16
// 객체 리터럴
const obj1 = {};

// 함수 리터럴
const add1 = function (a, b) {
  return a + b;
};

// 배열 리터럴
const arr = [1, 2, 3];

// 정규 표현식 리터럴
const regexp = /is/gi;

// 19-17
// obj2 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
const obj2 = {};

// 하지만 obj2 객체의 생성자 함수는 Object 생성자 함수다.
console.log(obj2.constructor === Object); // true

// 19-18
// 2. Object 생성자 함수에 의한 객체 생성
// 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
let obj3 = new Object();
console.log(obj3); // {}

// 1. new.target이 undefined나 Object가 아닌 경우
// 인스턴스 ➝ Foo.prototype ➝ Object.prototype 순으로 프로토타입 체인이 생성된다.
class Foo extends Object {}
new Foo(); // Foo {}

// 3. 인수가 전달된 경우에는 인수를 객체로 변환한다.
// Number 객체 생성
obj4 = new Object(123);
console.log(obj4); // [Number: 123]

// String 객체 생성
obj5 = new Object("123");
console.log(obj5); // [String: '123']

// 19-19
// foo1 함수는 Function 생성자 함수로 생성한 함수 객체가 아니라 함수 선언문으로 생성했다.
function foo1() {}

// 하지만 constructor 프로퍼티를 통해 확인해보면 함수 foo1의 생성자 함수는 Function 생성자 함수다.
console.log(foo1.constructor === Function); // true

// 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 어제나 쌍으로 존재한다.
