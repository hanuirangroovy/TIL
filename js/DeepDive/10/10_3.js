// 10.3 프로퍼티

// 10-03
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: "Lee",
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20,
};

// 10-04
var person = {
  firstName: "Ung-mo", // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
  "last-name": "Lee", // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};

console.log(person); // { firstName: 'Ung-mo', 'last-name': 'Lee' }

// 10-05
// var person = {
//     firstName: 'Ung-mo',
//     last-name: 'Lee' // SyntaxError: Unexpected token '-'
// };

// 10-06
var obj = {};
var key = "hello";

// ES5: 프로퍼티 키 동적 생성
obj[key] = "world";

// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };

console.log(obj); // { hello: 'world' }

// 10-07
var foo = {
  "": "", // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
};

console.log(foo); // { '': '' }

// 10-08
var foo = {
  0: 1,
  1: 2,
  2: 3,
};

console.log(foo); // { '0': 1, '1': 2, '2': 3 }

// 10-09
var foo = {
  var: "",
  function: "",
};

console.log(foo); // { var: '', function: '' }

// 10-10

var foo = {
  name: "Lee",
  name: "Kim",
};

console.log(foo); // { name: 'Kim' }
