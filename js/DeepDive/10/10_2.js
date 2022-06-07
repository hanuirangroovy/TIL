// 10.2 객체 리터럴에 의한 객체 생성

// 10-01
var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  },
};

console.log(typeof person); // object
console.log(person); // { name: 'Lee', sayHello: [Function: sayHello] }

// 10-02
var empty = {}; // 빈 객체
console.log(typeof empty); // object
