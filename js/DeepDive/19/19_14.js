// 19.14 프로퍼티 열거

// 19.14.1 for... in 문
// 객체의 모든 프로퍼티를 순회하며 열거하려면 for...in 문을 사용
// for (변수선언문 in 객체) {...}

// 19-64
const person = {
  name: "Lee",
  address: "Seoul",
};

// for...in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
for (const key in person) {
  console.log(key + ": " + person[key]);
}

// name: Lee
// address: Seoul

// 19-65
// in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다.
console.log("toString" in person); // true

// for ... in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거한다.
// 하지만 toString과 같은 Object.prototype의 프로퍼티가 열거되지 않는다.
for (const key in person) {
  console.log(key + ": " + person[key]);
}

// name: Lee
// address: Seoul

// 19-66
// Object.getOwnPropertyDescriptor 메서드는 프로퍼티 디스크립터 객체를 반환한다.
// 프로퍼티 디스크립터 객체는 프로퍼티 어트리뷰트 정보를 담고 있는 객체다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));

// {
//     value: [Function: toString],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }

// for...in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerbale]]의 값이 true인 프로퍼티를 순회하며 열거한다.

// 19-67
const person1 = {
  name: "Lee",
  address: "Seoul",
  __proto__: { age: 20 },
};

for (const key in person1) {
  console.log(key + ": " + person1[key]);
}

// name: Lee
// address: Seoul
// age: 20

// for...in 문은 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않는다.
// 19-68
const sym = Symbol();
const obj = {
  a: 1,
  [sym]: 10,
};

for (const key in obj) {
  console.log(key + ": " + obj[key]);
}

// a: 1

// 19-69
for (const key in person1) {
  // 객체 자신의 프로퍼티인지 확인한다.
  if (!person1.hasOwnProperty(key)) continue;
  console.log(key + ": " + person1[key]);
}

// name: Lee
// address: Seoul

// 19-70
const obj1 = {
  2: 2,
  3: 3,
  1: 1,
  b: "b",
  a: "a",
};

for (const key in obj1) {
  if (!obj1.hasOwnProperty(key)) continue;
  console.log(key + ": " + obj1[key]);
}

// 1: 1
// 2: 2
// 3: 3
// b: b
// a: a

// 배열에는 for...in문을 사용하지 말고 일반적인 for문이나 for...of문 또는 Array.prototype.forEach 메서드 사용 권장
// 배열도 객체이므로 프로퍼티와 상속받은 프로퍼티가 포함될 수 있다.
// 19-71
const arr = [1, 2, 3];
arr.x = 10; // 배열도 객체이므로 프로퍼티를 가질 수 있다.

for (const i in arr) {
  // 프로퍼티 x도 출력된다.
  console.log(arr[i]); // 1 2 3 10
}

// arr.length는 3이다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1 2 3
}

// forEach 메서드는 요소가 아닌 프로퍼티는 제외한다.
arr.forEach((v) => console.log(v)); // 1 2 3

// for...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.
for (const value of arr) {
  console.log(value); // 1 2 3
}

// for... of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.

// 19.14.2 Object.keys/values/entries 메서드
// Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환
// 19-72
const person2 = {
  name: "Lee",
  address: "Seoul",
  __proto__: { age: 20 },
};

console.log(Object.keys(person2)); // [ 'name', 'address' ]

// 19-73
console.log(Object.values(person2)); // [ 'Lee', 'Seoul' ]

// 19-74
console.log(Object.entries(person2)); // [ [ 'name', 'Lee' ], [ 'address', 'Seoul' ] ]

Object.entries(person2).forEach(([key, value]) => console.log(key, value));

// name Lee
// address Seoul
