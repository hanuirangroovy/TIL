// 16.5 객체 변경 방지
// 16.5.1 객체 확장 금지
// 16-10

const person = { name: "Lee" };

// person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person)); // true

// person 객체의 확장을 금지항 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체다.
console.log(Object.isExtensible(person)); // false

// 프로퍼티 추가가 금지된다.
person.age = 20; // 무시. strict mode에서는 에러
console.log(person); // { name: 'Lee' }

// 프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name;
console.log(person); // {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
// Object.defineProperty(person, "age", { value: 20 });
// TypeError: Cannot define property age, object is not extensible

// 16.5.2 객체 밀봉
// 16-11
const person1 = { name: "Lee" };

// person1 객체는 밀봉(seal)된 객체가 아니다.
console.log(Object.isSealed(person1)); // false

// person1 객체를 밀봉(seal)하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
Object.seal(person1);

// person 객체는 밀봉(seal)된 객체다.
console.log(Object.isSealed(person1)); // true

// 밀봉(seal)된 객체는 configurable이 false다.
console.log(Object.getOwnPropertyDescriptors(person1));

// {
//     name: {
//       value: 'Lee',
//       writable: true,
//       enumerable: true,
//       configurable: false
//     }
//   }

// 프로퍼티 추가가 금지된다.
person1.age = 20; // 무시. strict mode에서는 에러
console.log(person1); // { name: 'Lee' }

// 프로퍼티 삭제가 금지된다.
delete person1.name; // 무시. strict mode에서는 에러
console.log(person1); // { name: 'Lee' }
