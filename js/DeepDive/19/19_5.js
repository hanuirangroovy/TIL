// 19.5 프로토타입의 생성 시점
// 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다.

// 19.5.1 사용자 정의 생성자 함수와 프로토타입 생성 시점
// 생성자 함수로서 호출할 수 이는 함수, 즉 constructor는 함수 정의가 평가디어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
// 19-20
// 함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시저에 프로토타입도 더불어 생성된다.
console.log(Person.prototype); // {}

// 생성자 함수
function Person(name) {
  this.name = name;
}

// 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor는 프로토타입이 생성되지 않는다.
// 19-21
// 화살표 함수는 non-constructor다.
const Person1 = (name) => {
  this.name = name;
};

// non-constructor는 프로토타입이 생성되지 않는다.
console.log(Person1.prototype); // undefined

// 19.5.2 빌트인 생성자 함수와 프로토타입 생성 시점
// 전역객체
// 전역 객체: 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 생성되는 특수한 객체. 클라이언트 사이드 환경에서는 window, 서버 사이드 환경에서는 global 객체 의미
// 19-22
// 전역 객체 window는 브라우저에 종속적이므로 아래 코드는 브라우저 환경에서 실행해야 한다.
// 빌트인 객체인 Object는 전역 객체 window의 프로퍼티다.
// window.Object === Object; // true

// 객체가 생성되기 이전에 생성자 함수와 프로토타이은 이미 객체화되어 존재
// 이후 생성자 함수 또는 리터럴 표기법으로 객체를 생성하면 프로토타입은 생성된 객체의 [[Prototype]] 내부 슬롯에 할당된다.
