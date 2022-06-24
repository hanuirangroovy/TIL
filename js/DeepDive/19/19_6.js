// 19.6 객체 생성 방식과 프로토타입의 결정
// 19.6.1 객체 리터럴에 의해 생성된 객체의 프로토타입
// 19-23
const obj = { x: 1 };

// 19-24
// 객체 리터럴에 의해 성성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty("x")); // true

// 19.6.2 Object 생성자 함수에 의해 생성된 객체의 프로토타입
// 19-25
const obj1 = new Object();
obj1.x = 1;

// 19-26
// Object 생성자 함수에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj1.constructor === Object); // true
console.log(obj1.hasOwnProperty("x")); // true

// 19.6.3 생성자 함수에 의해 생성된 객체의 프로토타입
// 19-27
function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

// 19-28
// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const you = new Person("Kim");

me.sayHello(); // Hi! My name is Lee
you.sayHello(); // Hi! My name is Kim
