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
// 생성자 함수 역할
// 1. 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿(클래스)으로서 동작하여 인스턴스를 생성하는 것
// 2. 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)하는 것
// 17-07
// 생성자 함수
function Circle1(radius) {
  // 인스턴스 초기화
  this.radius = radius;
  this.getDiameter1 = function () {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const circle6 = new Circle1(5); // 반지름이 5인 Circle1 객체를 생성

// 1. 인스턴스 생성과 this 바인딩
// 암묵적으로 생성된 빈 객체, 즉 인스턴스는 this에 바인딩됨. 이 처리는 함수 몸체의 코드가 한 줄씩 실행되는 런타임 이전에 실행

// 바인딩: 식별자와 값을 연결하는 과정

// 17-08
function Circle2(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  console.log(this); // Circle2 {}

  this.radius = radius;
  this.getDiameter2 = function () {
    return 2 * this.radius;
  };
}

// 2. 인스턴스 초기화
// 생성자 함수에 기술되어 있느 ㄴ코드가 한 줄씩 실행되어 this에 바인딩되어 있는 인스턴스를 초기화
// this에 바인딩되어 잇는 인스턴스에 프로퍼티나 메서드를 추가하고 생성자 함수가 인수로 전달받은 초기값을 인스턴스 프로퍼티에 할당하여 초기화하거나 고정값을 할당
// 17-09
function Circle3(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter3 = function () {
    return 2 * this.radius;
  };
}

// 3. 인스턴스 반환
// 생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this로 암묵적으로 반환된다.

// 17-10
function Circle4(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter4 = function () {
    return 2 * this.radius;
  };

  // 3. 완성된 인스턴스가 바인딩된 this로 암묵적으로 반환된다.
}

// 인스턴스 생성. Circle4 생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle7 = new Circle4(1);
console.log(circle7); // Circle4 { radius: 1, getDiameter4: [Function (anonymous)] }

// 만약 this가 아닌 다른 객체를 명시적으로 반환하면 this가 반환되지 못하고 return 문에 명시한 객체가 반환된다.
// 17-11
function Circle5(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter5 = function () {
    return 2 * this.radius;
  };

  // 3. 암묵적으로 this를 반환한다.
  // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
  return {};
}

// 인스턴스 생성. Circle5 생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle8 = new Circle5(1);
console.log(circle8); // {}

// 하지만 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
// 17-12
function Circle6(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter6 = function () {
    return 2 * this.radius;
  };

  // 3. 암묵적으로 this를 반환한다.
  // 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
  return 100;
}

// 인스턴스 생성. Circle6 생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle9 = new Circle6(1);
console.log(circle9); // Circle6 { radius: 1, getDiameter6: [Function (anonymous)] }

// 17.2.4 내부 메서드 [[Call]]과 [[Construct]]
// 17-13
// 함수는 객체다.
function foo1() {}

// 함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo1.prop = 10;

// 함수는 객체이므로 메서드를 소유할 수 있다.
foo1.method = function () {
  console.log(this.prop);
};

foo1.method(); // 10

// 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.
// 17-14
function foo2() {}

// 일반적인 함수로서 호출: [[Call]]이 호출된다.
foo2();

// 생성자 함수로서 호출: [[Construct]]가 호출된다.
new foo2();

// 17.2.5 constructor와 non-constructor의 구분
// constructor: 함수 선언문, 함수 표현식. 클래스
// non-constructor: 메서드, 화살표 함수
// 17-15
// 일반 함수 정의: 함수 선언문, 함수 표현식
function foo3() {}
const bar = function () {};
// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정되지 않는다.
const baz = {
  x: function () {},
};

// 일반 함수로 정의된 함수만이 constructor다.
new foo3(); // foo3 {}
new bar(); // bar {}
new baz.x(); // x {}

// 화살표 함수 정의
const arrow = () => {};

// new arrow(); // TypeError: arrow is not a constructor

// 메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정한다.
const obj1 = {
  x() {},
};

// new obj1.x(); // TypeError: obj1.x is not a constructor

// 17-16
function foo4() {}
// 일반 함수로서 호출
// [[Call]]이 호출된다. 모든 함수 객체는 [[Call]]이 구현되어 있다.
foo4();

// 생성자 함수로서 호출
// [[Construct]]가 호출된다. 이때 [[Construct]]를 갖지 않는다면 에러가 발생한다.
new foo4();

// 17.2.6 new 연산자
// 17-17

// 17-18

// 17.2.7 new.target
// 17-19

// 17-20

// 17-21

// 17-22
