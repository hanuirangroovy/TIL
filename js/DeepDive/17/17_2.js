// 17.2 생성자 함수
// 17.2.1 객체 리터럴에 의한 객체 생성 방식의 문제점
// 17-01
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle2.getDiameter()); // 20

// 17.2.2 생성자 함수에 의한 객체 생성 방식의 장점
// 17-04
// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스의 생성
const circle3 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
const circle4 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle3.getDiameter()); // 10
console.log(circle4.getDiameter()); // 20

// this는 객체 자신의 프로퍼티나 메서드를 참조하기 우한 자기 참조 변수
// this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.

// 17-05
// 함수는 다양한 방식으로 호출될 수 있다.
function foo() {
  console.log(this);
}

// 일반적인 함수로서 호출
// 전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global을 가리킨다.
foo(); // window

const obj = { foo }; // ES6 프로퍼티 축약 표현

// 메서드로서 호출
obj.foo(); // { foo: [Function: foo] }

// 생성자 함수로서 호출
const inst = new foo(); // foo {}

// 17-06
// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
// 즉, 일반 함수로서 호출된다.
const circle5 = Circle(15);

// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle5); // undefined

// 일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
console.log(radius); // 15

// 17.2.3 생성자 함수의 인스턴스 생성 과정
// 17-07

// 17-08

// 17-09

// 17-10

// 17-11

// 17-12

// 17.2.4 내부 메서드 [[Call]]과 [[Construct]]
// 17-13

// 17-14

// 17.2.5 constructor와 non-constructor의 구분
// 17-15

// 17-16

// 17.2.6 new 연산자
// 17-17

// 17-18

// 17.2.7 new.target
// 17-19

// 17-20

// 17-21

// 17-22
