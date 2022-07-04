// 24.5 캡슐화와 정보 은닉

// 캡슐화: 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것.
// 정보은닉: 캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 함.

// 24-16
function Person(name, age) {
  this.name = name; // public
  let _age = age; // private

  // 인스턴스 메서드
  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`); // Hi! My name is Lee. I am 20.
  };
}

const me = new Person("Lee", 20);
me.sayHi();
console.log(me.name); // Lee
console.log(me._age); // undefined

const you = new Person("Kim", 30);
you.sayHi(); // Hi! My name is Kim. I am 30.
console.log(you.name); // Kim
console.log(you._age); // undefined

// sayHi 메서드의 중복 생성 방지
// 24-17
function Person17(name, age) {
  this.name = name;
  let _age = age;
}

// 프로토타입 메서드
Person17.prototype.sayHi = function () {
  // Person 생성자 함수의 지역 변수 _age를 참조할 수 없다.
  console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
};

// Person17.prototype.sayHi 메서드 내에서 Person17 생성자 함수의 지역 변수 _age를 참조할 수 없는 문제가 발생
// 즉시 실행 함수를 사용하여 Person17 생성자 함수와 Person17.prototype.sayHi 메서드를 하나의 함수 내에 모아 보자.

// 24-18
const Person18 = (function () {
  let _age = 0; // private

  // 생성자 함사ㅜ
  function Person18(name, age) {
    this.name = name; // public
    _age = age;
  }
  // 프로토타입 메서드
  Person18.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };

  // 생성자 함수를 반환
  return Person18;
})();

const me18 = new Person18("Lee", 20);
me18.sayHi(); // Hi! My name is Lee. I am 20.
console.log(me18.name); // Lee
console.log(me18._age); // undefined

const you18 = new Person18("Kim", 30);
you18.sayHi(); // Hi! My name is Lee. I am 20.
console.log(you18.name); // Kim
console.log(you18._age); // undefined

// Person18 생성자 함수가 여러 개의 인스턴스를 생성할 경우 _age 변수의 상태가 유지되지 않음.
// 24-19
me18.sayHi(); // Hi! My name is Lee. I am 30.
