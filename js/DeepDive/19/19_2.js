// 19.2 상속과 프로토타입
// 상속: 어떤 객체의 프로퍼티 또는 메서드를다른 객체가 상속받아 그대로 사용할 수 있는 것

// 19-03
// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    // Math.PI는 원주율을 나타내는 상수다.
    return Math.PI * this.radius ** 2;
  };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea); // false

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172

// 19-04
// 상속을 통해 불필요한 중복 제거
// 자바스크립트는 프로토타입을 기반으로 상속을 구현.

// 생성자 함수
function Circle1(radius) {
  this.radius = radius;
}

// Circle1 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
// 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle1.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle3 = new Circle1(1);
const circle4 = new Circle1(2);

// Circle1 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토타입 Circle1.prototype으로부터 getArea 메서드를 상속받는다.
// 즉, Circle1 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를공유한다.
console.log(circle3.getArea === circle4.getArea); // true

console.log(circle3.getArea()); // 3.141592653589793
console.log(circle4.getArea()); // 12.566370614359172
