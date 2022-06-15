// 16.3 데이터 프로퍼티와 접근자 프로퍼티
// 데이터 프로퍼티: 키와 값으로 구성된 일반적인 프로퍼티다. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티다.
// 접근자 프로퍼티: 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티다.

// 16.3.1 데이터 프로퍼티
// 16-04
const person = {
  name: "Lee",
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취급한다.
console.log(Object.getOwnPropertyDescriptor(person, "name")); // { value: 'Lee', writable: true, enumerable: true, configurable: true }

// 16-05
const person1 = {
  name: "Lee",
};

// 프로퍼티 동적 생성
person1.age = 20;

console.log(Object.getOwnPropertyDescriptors(person1));

// {
//     name: {
//       value: 'Lee',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     age: { value: 20, writable: true, enumerable: true, configurable: true }
//   }

// 16.3.2 접근자 프로퍼티
// 16-06
const person2 = {
  // 데이터 프로퍼티
  firstName: "Ungmo",
  lastName: "Lee",

  // fullName은 접근자 함수로 구성된 접근자 프로퍼타다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set fullName(name) {
    // 배열 디스트럭처링 할당: "31.1 배열 디스트럭처링 할당" 참고
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(person2.firstName + " " + person2.lastName); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장.
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person2.fullName = "Heegun Lee";
console.log(person2); // { firstName: 'Heegun', lastName: 'Lee', fullName: [Getter/Setter] }

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person2.fullName); // Heegun Lee

// firstName은 프로퍼티다
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
// 프로퍼티는 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person2, "firstName");
console.log(descriptor);

// {
//   value: 'Heegun',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[get]], [[set]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person2, "fullName");
console.log(descriptor);

// {
//   get: [Function: get fullName],
//   set: [Function: set fullName],
//   enumerable: true,
//   configurable: true
// }

// 16-07
// 일반 객체의 __proto__는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

// 함수 객체의 prototype은 데이터 프로퍼티다.
Object.getOwnPropertyDescriptor(function () {}, "prototype");
