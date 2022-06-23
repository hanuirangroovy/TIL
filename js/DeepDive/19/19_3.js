// 19.3 프로토타입 객체

// 19.3.1 __proto__ 접근자 프로퍼티
// 모든 객체는  __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[prototype]] 내부 슬롯에 간접적으로 접근할 수 있다.
// 19-05
const person = { name: "Lee" };

// __proto__는 접근자 프로퍼티다

// 19-06
const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;

// setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x); // 1

// __proto__ 접근자 프로퍼티는 상속을 통해 사용된다.
// 19-07
// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty("__proto__")); // false

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));

// {
//     get: [Function: get __proto__],
//     set: [Function: set __proto__],
//     enumerable: false,
//     configurable: true
//   }

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); // true

// __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
// [[Prototype]] 내부 슬롯의 값, 즉 프로토타입에 접근하기 위해 접근자 프로퍼티를 사용하는 이유는 상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해서다.

// 19-08
const parent1 = {};
const child = {};

// child의 프로토타입을 parent1로 설정
child.__proto__ = parent1;

// parent1의 프로토타입을 child로 서렂ㅇ
// parent1.__proto__ = child; // TypeError: Cyclic __proto__ value

// __proto__ 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 ㅇ낳는다.

// 19-09
// obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 었다.
const obj1 = Object.create(null);

// obj1는 Object.__proto__를 상속받을 수 없다.
console.log(obj1.__proto__); // undefined

// 따라서 __proto__ 보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다.
console.log(Object.getPrototypeOf(obj1)); // null

// 19-10
const obj2 = {};
const parent2 = { x: 1 };

// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj2); // obj.__proto__;

// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj2, parent2); // obj.__proto__ = parent;

console.log(obj2.x); // 1

// 19.3.2 함수 객체의 porototype 프로퍼티
// 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
// 19-11
// 함수 객체는 prototype 프로퍼티를 소유한다.
(function () {}.hasOwnProperty("prototype")); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}.hasOwnProperty("prototype")); // false

// 19-12
// 화살표 함수는 non-constructor다.
const Person = (name) => {
  this.name = name;
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty("prototype")); // false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(Person.prototype); // undefined

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor다.
const obj3 = {
  foo() {},
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(obj3.foo.hasOwnProperty("prototype")); // false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(obj3.foo.prototype); // undefined

// 모든 객체가 가지고 있는 __proto__ 접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype 프로퍼티는 결국 동일한 프로토타입을 기리킨다.

// 19-13
// 생성자 함수
function Person2(name) {
  this.name = name;
}

const me = new Person2("Lee");

// 결국 Person.prototype과 me.__proto__는 결국 동일한 프로토타입을 가리킨다.
console.log(Person2.prototype === me.__proto__); // true

// 19.3.3 프로토타입의 constructor 프로퍼티와 생성자 함수
// 19-14
// 생성자 함수
function Person3(name) {
  this.name = name;
}

const me2 = new Person3("Lee");

// me2 객체의 생성자 함수는 Person이다.
console.log(me2.constructor === Person3); // true
