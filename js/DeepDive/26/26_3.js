// 26.3 화살표 함수
// 화살표 함수는 function 키워드 대신 화살표(=>)를 사용하여 기존의 함수 정의 방식보다 간략하게 함수를 정의할 수 있다.

// 26.3.1 화살표 함수 정의
// 함수 정의
// 화살표 함수는 함수 선언문으로 정의할 수 없고 함수 표현식으로 정의해야 한다. 호출 방식은 기존 함수와 동일하다.
// 26-11
const multiply = (x, y) => x * y;
multiply(2, 3);

// 매개변수 선언
// 매개변수가 여러 개인 경우 소괄호 () 안에 매개변수를 선언한다.
// 26-12
// const arrow = (x, y) => { ... };

// 매개변수가 한 개인 경우 소괄호 ()를 생략할 수 있다.
// 26-13
// const arrow = x => { ... };

// 매개변수가 없는 경우 소괄호 ()를 생략할 수 없다.
// 26-14
// const arrow = () => { ... };

// 함수 몸체 정의
// 함수 몸체가 하나의 문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략할 수 있다.
// 이때 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식인 문이라면 암묵적으로 반환된다.
// 26-15
// concise body
const power = (x) => x ** 2;
power(2);

// 위 표현은 다음과 동일하다
// block body
const power2 = (x) => {
  return x ** 2;
};

// 함수 몸체를 감싸는 중괄호 {}를 생략한 경우 함수 몸체 내부의 문이 표현식이 아닌 문이라면 에러가 발생한다. 표현식이 아니 문은 반환할 수 없기 때문이다.
// 26-16
// const arrow16 = () => const x16 = 1; // SyntaxError: Unexpected token 'const'

// 위 표현은 다음과 같이 해석된다.
// const arrow16 = () => { return const x16 = 1; };

// 26-17
const arrow17 = () => {
  const x17 = 1;
};

// 객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호 ()로 감싸 주어야 한다.

// 26-18
const create = (id, content) => ({ id, content });
create(1, "JavaScript");

// 위 표현은 다음과 동일하다.
const create18 = (id, content) => {
  return { id, content };
};

// 객체 리터럴을 소괄호 ()로 감싸지 않으면 객체 리터럴의 중괄호 {}를 함수 몸체를 감싸는 중괄호 {}로 잘못 해석한다.

// 26-19
// { id, content }를 함수 몸체 내의 수미표 연산자문으로 해석한다.
const create19 = (id, content) => {
  id, content;
};
create19(1, "JavaScript");

// 함수 몸체가 여러 개의문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략할 수 없다. 이때 반환값이 있다면 명시적으로 반환해야 한다.

// 26-20
const sum = (a, b) => {
  const result = a + b;
  return result;
};

// 화살표 함수도 즉시 실행 함수로 상요할 수 있따.

// 26-21
const person = ((name) => ({
  sayHi() {
    return `Hi? My name is ${name}.`;
  },
}))("Lee");

console.log(person.sayHi()); // Hi? My name is Lee.

// 화살표 함수도 일급 객체이므로 고차 함수에 인수로 전달할 수 있다.

// 26-22
// ES5
[1, 2, 3].map(function (v) {
  return v * 2;
});

// ES6
[1, 2, 3].map((v) => v * 2);

// 26.3.2 화살표 함수와 일반 함수의 차이
// 1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.
// 26-23
const Foo = () => {};
// 화살표 함수는 생성자 함수로서 호출할 수 없다.
// new Foo(); // TypeError: Foo is not a constructor

// 화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.

// 26-24
const Foo24 = () => {};
// 화살표 함수는 prototype 프로퍼티가 없다.
Foo24.hasOwnProperty("prototype"); // false

// 2. 중복된 매개변수 이름을 선언할 수 없다.
// 일반 함수는 중복된 매개변수 이름을 선언해도 에러가 발생하지 않는다.

// 26-25
function normal(a, a) {
  return a + a;
}
console.log(normal(1, 2)); // 4

// 단, strict mode에서 중복된 매개변수 이름을 선언하면 에러가 발생한다.

// 26-26
// 'use strict';

// function normal(a, a) {
//   return a + a;
// }
// SyntaxError: Duplicate parameter name not allowed in this context

// 화살표 함수에서도 중복된 매개변수 이름을 선언하면 에러가 발생한다.

// 26-27
// const arrow27 = (a, a) => a + a; // SyntaxError: Duplicate parameter name not allowed in this context

// 3. 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.

// 26.3.3 this

// 26-28
// class Prefixer {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   add(arr) {
//     // add 메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다.
//     return arr.map(function (item) {
//       return this.prefix + item;
//       // TypeError: Cannot read properties of undefined (reading 'prefix')
//     });
//   }
// }

// const prefixer = new Prefixer("-webkit-");
// console.log(prefixer.add(["transition", "user-select"]));

// 1. add 메서드를 호출한 prefixer 객체를 가리키는 this를 일단 회피시킨 후에 콜백 함수 내부에서 사용한다.

// 26-29
class Prefixer29 {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    // this를 일단 회피시킨다.
    const that = this;
    return arr.map(function (item) {
      // this 대신 that을 참조한다.
      return this.prefix + " " + item;
    });
  }
}

// 2. Array.prototype.map의 두 번째 인수로 add 메서드를 호출한 prefixer 객체를 가리키는 this를 전달한다.
// 26-30
class Prefixer30 {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map(function (item) {
      return this.prefix + " " + item;
    }, this); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
  }
}

// 3. Function.prototype.bind 메서드를 사용하여 add 메서드를 호출한 prefixer 객체를 가리키는 this를 바인딩한다.
// 26-31
class Prefixer31 {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map(
      function (item) {
        return this.prefix + " " + item;
      }.bind(this)
    ); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
  }
}

// 26-32
class Prefixer32 {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map((item) => this.prefix + item);
  }
}

const prefixer32 = new Prefixer32("-webkit-");
console.log(prefixer32.add(["transition", "user-select"])); // [ '-webkit-transition', '-webkit-user-select' ]

// lexical this: 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.

// 26-33
// 화살표 함수는 상위 스코프의 this를 참조한다.
() => this.x;

// 익명 함수에 상위 스코프의 this를 주입힌다. 위 화살표 함수와 동일하게 동작한다.
(function () {
  return this.x;
}.bind(this));

// 만약 화살표 함수와 화살표 함수가 중첩되어 있다면 상위 화살표 함수에도 this 바인딩이 없으므로 스코프 체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this를 참조한다.

// 26-34
(function () {
  const foo = () => console.log(this);
  foo();
}.call({ a: 1 })); // { a: 1 }

// bar 함수는 화살표 함수를 반환한다.
// bar 함수가 반환한 화살표 함수의 상위 스코프는 화살표 함수 bar다.
// 하지만 화살표 함수는 함수 자체의 this 바인딩을 갖지 않으므로 bar 함수가 반환한
// 화살표 함수 내부에서 참조하는 this는 화살표 함수가 아닌 즉시 실행 함수의 this를 가리킨다.

(function () {
  const bar = () => () => console.log(this);
  bar()();
}.call({ a: 1 })); // { a: 1 }

// 26-35
// 전역 함수 foo35의 상위 스코프는 전역이므로 화살표 함수 foo35의 this는 전역 객체를 가리킨다.
const foo35 = () => console.log(this);
foo35();

// 26-36
// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다.
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킨다.
const counter = {
  num: 1,
  increase: () => ++this.num,
};

console.log(counter.increase()); // NaN

// 26-37
// window.x = 1;

// const normal37 = function () {
//   return this.x;
// };
// const arrow37 = () => this.x;

// console.log(normal37.call({ x: 10 })); // 10
// console.log(arrow37.call({ x: 10 })); // 1

// 26-38
const add38 = (a, b) => a + b;

console.log(add38.call(null, 1, 2)); // 3
console.log(add38.apply(null, [1, 2])); // 3
console.log(add38.bind(null, 1, 2)()); // 3

// 26-39
// Bad
const person39 = {
  name: "Lee",
  sayHi: () => console.log(`Hi ${this.name}`),
};

// sayHi 프로퍼티에 할당된 화살표 내부의 this는 상위의 스코프인 전역의 this가 가리키는
// 전역 객체를 가리키므로 이 예제를 브라우저에서 실행하면 this.name은 빈 문자열을 갖는 window.name과 같다.
// 전역 객체 window에는 빌트인 프로퍼티 name이 존재한다.
person.sayHi();

// 26-40
// Good
const person40 = {
  name: "Lee",
  sayHi() {
    console.log(`Hi! ${this.name}`);
  },
};

person40.sayHi(); // Hi! Lee

// 26-41
// Bad
function Person41(name) {
  this.name = name;
}

Person41.prototype.sayHi = () => console.log(`Hi ${this.name}`);

const person41 = new Person41("Lee");
// 이 예제를 브라우저에서 실행하면 this.name은 빈 문자열을 갖는 window.name과 같다.
person41.sayHi();

// 26-42
// Good
function Person42(name) {
  this.name = name;
}

Person42.prototype.sayHi = function () {
  console.log(`Hi ${this.name}`);
};

const person42 = new Person42("Lee");
person42.sayHi(); // Hi Lee

// 26-43
function Person43(name) {
  this.name = name;
}

Person43.prototype = {
  // constructor: Person,
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};

const person43 = new Person43("Lee");
person43.sayHi(); // Hi Lee

// 클래스 필드 정의 제안을 사용하여 클래스 필드에 화살표 함수를 할당할 수도 있다.

// 26-44
// Bad
class Person44 {
  // 클래스 필드 정의 제안
  name = "Lee";
  sayHi = () => console.log(`Hi ${this.name}`);
}

const person44 = new Person44();
person44.sayHi(); // Hi Lee

// 26-45
class Person45 {
  constructor() {
    this.name = "Lee";
    // 클래스가 생성한 인스턴스(this)의 sayHi 프로퍼티에 화살표 함수를 할당한다.
    // 따라서 sayHi 프로퍼티는 인스턴스 프로퍼티다.
    this.sayHi = () => console.log(`Hi ${this.name}`);
  }
}

// 26-46
// Good
class Person46 {
  // 클래스 필드 정의
  name = "Lee";

  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}
const person46 = new Person46();
person46.sayHi(); // Hi Lee

// 26.3.4 super
// 화살표 함수는 함수 자체의 super 바인딩을 갖지 않는다.
// 26-47
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Derived47 extends Base {
  // 화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
  sayHi = () => `${super.sayHi()} how are you doing?`;
}

const derived47 = new Derived47("Lee");
console.log(derived47.sayHi()); // Hi! Lee how are you doing?

// 26.3.5 arguments
// 화살표 함수는 함수 자체의 arguments 바인딩을 갖지 않는다.
// 26-48
(function () {
  // 화살표 함수 foo48의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 가리킨다.
  const foo48 = () => console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
  foo48(3, 4);
})(1, 2);

// 화살표 함수 foo48의 arguments는 상위 스코프인 전역의 arguments를 가리킨다.
// 하지만 전역에는 arguments 객체가 존재하지 않는다. argumnets 객체는 함수 내부에서만 유효하다.
const foo48 = () => console.log(arguments);
foo48(1, 2);
