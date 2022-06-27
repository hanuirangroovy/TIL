// 19.13 프로퍼티 존재 확인
// 19.13.1 in 연산자
// in 연산자는 객체 내에 특정 프로퍼티가 존재하는지 여부 확인
// key: 프로퍼티 키를 나타내는 문자열
// object: 객체로 평가되는 표현식
// key in object

// 19-59
const person = {
  name: "Lee",
  address: "Seoul",
};

// person 객체에 name 프로퍼티가 존재한다.
console.log("name" in person); // true
// person 객체에 address 프로퍼티가 존재한다.
console.log("address" in person); // true
// person 객체에 age 프로퍼티가 존재하지 않는다.
console.log("age" in person); // false

// 16-60
console.log("toString" in person); // true

// 19-61
const person1 = { name: "Lee" };

console.log(Reflect.has(person1, "name")); // true
console.log(Reflect.has(person1, "toString")); // true

// 19.13.2 Object.prototype.hasOwnProperty 메서드
// 19-62
console.log(person1.hasOwnProperty("name")); // true
console.log(person1.hasOwnProperty("age")); // false

// Object.prototype.hasOwnProperty 메서드는 이름에서 알 수 있듯이 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고
// 상속받은 프로토타입의 프로퍼티인 경우 false를 반환
// 19-63
console.log(person1.hasOwnProperty("toString")); // false
