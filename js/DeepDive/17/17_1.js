// 17.1 Object 생성자 함수
// new 연산자와 함께 Ojbect 생성자 함수를 호출하면 빈 객체를 생성하여 반환
// 빈 객첼르 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체 완성

// 17-01

// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = "Lee";
person.sayHello = function () {
  console.log("Hi! My name is " + this.name);
};

console.log(person); // { name: 'Lee', sayHello: [Function (anonymous)] }
person.sayHello(); // Hi! My name is Lee

// 생성자 함수: new  연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수
// 인스턴스: 생성자 함수에 의해 생성된 객체
// 17-02

// String 생성자 함수에 의한 String 객체 생성
const strObj = new String("Lee");
console.log(typeof strObj); // object
console.log(strObj); // [String: 'Lee']

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj); // [Number: 123]

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj); // [Boolean: true]

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function("x", "return x * x");
console.log(typeof func); // function
console.log(func); // [Function: anonymous]

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr); // [ 1, 2, 3 ]

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp); // /ab+c/i

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date); // 2022-06-19T14:18:54.379Z
