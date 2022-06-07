// 10.5 프로퍼티 접근

// 10-12
var person = {
  name: "Lee",
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Lee

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person["name"]); // Lee

// 10-13
var person = {
  name: "Lee",
};

// console.log(person[name]); // ReferenceError: name is not defined

// 10-14
var person = {
  name: "Lee",
};

console.log(person.age); // undefined

// 10-15
var person = {
  "last-name": "Lee",
  1: 10,
};

// person.'last-name';  // SyntaxError: Unexpected string
// person.last-name; // Node.js 환경: ReferenceError: name is not defined, 브라우저 환경: NaN
// person[last - name]; // ReferenceError: last is not defined
person["last-name"]; // Lee

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
// person.1; // SyntaxError: Unexpected number
// person.'1'; // SyntaxError: Unexpected string
person[1]; // 10 : person[1] -> person['1']
person["1"]; // 10
