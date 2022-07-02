// 22.1 this 키워드

// 22-01
const circle = {
  // 프로퍼티: 객체 고유의 상태 데이터
  radius: 5,
  // 메서드: 상태 데이터를 참조하고 조작하는 동작
  getDiameter() {
    // 이 메서드가 자신이 속한 객체의 플포ㅓ티나 다른 메서드를 참조하려면 자신이 속한 객체인 circle을 참조할 수 있어야 한다.
    return 2 * circle.radius;
  },
};

console.log(circle.getDiameter()); // 10

// 22-02
// function Circle(radius) {
//     // 이 시점에는 새엉자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
//     ????.radius = radius;
// }

// Circle.prototype.getDiameter = function () {
//     // 이 시점에는 생성자 함수 자신이 생성할 인스터느를 가리키는 식별자를 알 수 없다.
//     return 2 * ????.radius;
// };

// // 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다.
// const circle = Circle(5);

// this: 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수
// this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
// this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.

// 바인딩: 식별자와 값을 연결하는 과정

// 22-03
// 객체 리터럴
const circle1 = {
  radius: 5,
  getDiameter() {
    // this는 메서드를 호출한 객체를 가리킨다.
    return 2 * this.radius;
  },
};

console.log(circle1.getDiameter()); // 10

// 22-04
// 생성자 함수
function Circle(radius) {
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // this가 생성자 함수가 생성할 인스턴스를 가리키낟.
  return 2 * this.radius;
};

// 인스턴스 생성
const circle2 = new Circle(5);
console.log(circle2.getDiameter()); // 10

// 자바사크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩될 값, 즉 this 바인딩이 동적으로 결정된다.

// 22-05
// this는 어디서든지 참조 가능하다.
// 전역에서 this는 전역 객체 window를 가리킨다.
console.log(this); // window

function square(number) {
  // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
  console.log(this); // window
  return number * number;
}
square(2);

const person = {
  name: "Lee",
  getName() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    console.log(this); // { name: 'Lee', getName: [Function: getName] }
    return this.name;
  },
};
console.log(person.getName()); // Lee

function Person(name) {
  this.name = name;
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  console.log(this); // Person { name: 'Lee' }
}

const me = new Person("Lee");
