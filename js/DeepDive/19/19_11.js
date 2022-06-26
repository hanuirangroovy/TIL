// 19.11 직접 상속
// 19.11.1 Object.create에 의한 직접 상속

// 19-51
// 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
// obj -> null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); // true
// Object.prototype을 상속받지 못한다.
// console.log(obj.toString()); // TypeError: obj.toString is not a function

// obj -> Object.prototype -> null
// obj = {};와 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// obj -> Object.prototype -> null
// obj = { x: 1 };와 동일하다.
obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
});
// 위 코드는 아래와 동일하다.
// obj = Object.create(Object.prototype);
// obj.x = 1;
console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

const myProto = { x: 10 };
// 임의의 객체를 직접 상속받는다.
// obj -> myProto -> Object.prototype -> null
obj = Object.create(myProto);
console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj) === myProto); // true

// 생성자 함수
function Person(name) {
  this.name = name;
}

// obj -> Person.prototype -> Object.prototype -> null
// obj = new Person('Lee')와 동일하다.
obj = Object.create(Person.prototype);
obj.name = "Lee";
console.log(obj.name); // Lee
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true

// Object.create 메서드는 첫 번째 매개변수에 전달할 객체의 프로토타입 체인에 속하는 객체를 생성. 즉, 객체를 생성하면서 직접적으로 상속 구현
// 장점은 1. new 연산자가 없이도 객체 생성할 수 있음 2. 프로토타입을 지정하면서 객체 생성할 수 있음 3. 객체 리터럴에 의해 생성된 객체도 상속받을 수 있음

// 19-52
const obj1 = { a: 1 };

obj1.hasOwnProperty("a"); // true
obj1.propertyIsEnumerable("a"); // true

// 19-53
// 프로토타입이 null인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성한다.
const obj2 = Object.create(null);
obj2.a = 1;

console.log(Object.getPrototypeOf(obj2) === null); // true

// obj2는 Object.prototype의 빌트인 메서드를 사용할 수 없다.
// console.log(obj2.hasOwnProperty("a"));
// TypeError: obj2.hasOwnProperty is not a function

// 19-54
// 프로토타입이 null인 객체를 생성한다.
const obj3 = Object.create(null);
obj3.a = 1;

// Object.prototype의 빌트인 메서드는 객체로 직접 호출하지 않는다.
console.log(Object.prototype.hasOwnProperty.call(obj3, "a")); // true

// 19.11.2 객체 리터럴 내부에서 __proto__에 의한 직접 상속
// 19-55
const myProto1 = { x: 10 };

// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
const obj4 = {
  y: 20,
  // 객체를 직접 상속받는다.
  // obj4 -> myProto -> Object.prototype -> null
  __proto__: myProto1,
};

// 위 코드는 아래와 동일하다.
// const obj4 = Object.create(myProto1, {
//     y: { value: 20, writable: true, enumerable: true, configurable: true }
// });

console.log(obj4.x, obj4.y); // 10 20
console.log(Object.getPrototypeOf(obj4) === myProto1); // true
