// 19.9 프로토타입의 교체

// 19.9.1 생성자 함수에 의한 프로토타입의 교체
// 19-40
const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  // 1. 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  Person.prototype = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    },
  };

  return Person;
})();

const me = new Person("Lee");

// 19-41
// 프로토타입을 교체하면 cosntructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me.constructor === Person); // false

// 프로토타입 체인을 따라 Object.prptotype의 constructor 프로퍼티가 검색된다.
console.log(me.constructor === Object); // true

// 19-42
const Person1 = (function () {
  function Person1(name) {
    this.name = name;
  }

  // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  Person1.prototype = {
    // cosntructor 프로퍼티와 생성자 함수 간의 연결을 설정
    constructor: Person1,
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    },
  };

  return Person1;
})();

const me1 = new Person1("Lee");

// constructor 프로퍼티가 생성자 함수를 가리킨다.
console.log(me1.constructor === Person1); // true
console.log(me1.constructor === Object); // false

// 19.9.2 인스턴스에 의한 프로토타입의 교체
// 19-43
function Person2(name) {
  this.name = name;
}

const me2 = new Person2("Lee");

// 프로토타입으로 교체할 객체
const parent = {
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  },
};

// 1. me2 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me2, parent);
// 위 코드는 아래의 코드와 동일하게 동작한다.
// me.__proto__ = parent;

me2.sayHello(); // Hi! My name is Lee

// 19-44
// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me2.constructor === Person2); // false

// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
console.log(me2.constructor === Object); // true

// 19-45
function Person3(name) {
  this.name = name;
}

const me3 = new Person3("Lee");

// 프로토타입으로 교체할 객체
const parent1 = {
  // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
  constructor: Person3,
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  },
};

// 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
Person3.prototype = parent1;

// me3 객체의 프로토 타입을 aprent1 객체로 교체한다.
Object.setPrototypeOf(me3, parent1);

// 위 코드는 아래의 코드와 동일하게 작동한다.
// me.__proto__ = parent;

me3.sayHello(); // Hi! My name is Lee

// constructor 프로퍼티가 생성자 함수를 가리킨다.
console.log(me3.constructor === Person3); // true
console.log(me3.constructor === Object); // false

// 생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킨다.
console.log(Person3.prototype === Object.getPrototypeOf(me3)); // true
