// 19.7 프로토타입 체인
// 19-29
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person("Lee");

// hasOwnProperty는 Object.prototype의 메서드다.
console.log(me.hasOwnProperty("name")); // true

// 19-30
Object.getPrototypeOf(me) === Person.prototype; // true

// 19-31
Object.getPrototypeOf(Person.prototype) === Object.prototype; // true

// 프로토타입 체인: 자바스크립트에서 객체의 프로퍼티에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부 슬롯의 참조를 따라
// 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차저으로 검색하는 것.
// 프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘

// 19-32
// hasOwnProeprty는 Object.prototype의 메서드다.
// me 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색하여 사용한다.
me.hasOwnProperty("name"); // true

// 19-33
Object.prototype.hasOwnProperty.call(me, "name");

// call 메서드: this로 사용할 객체를 전달하면서 함수를 호출

// Object.prototype을 프로토타입 체인의 종점

// 프로토타입 체인의 종점인 Object.prototype에서도 프로퍼티를 검색할 수 없는 경우 undefined를 반환. 에러 발생X
// 19-34
console.log(me.foo); // undefined

// 프로토타입 체인은 상속과 프로퍼티 검색을 위한 메커니즘
// 스코프 체인은 식별자 검색을 위한 메커니즘
// 19-35
me.hasOwnProperty("name");

// 스코프 체인과 프로토타입 체인은 서로 연관없이 별도로 동작하는 것이 아니라 서로 협력하여 식별자와 프로퍼티를 검색하는 데 사용된다.
