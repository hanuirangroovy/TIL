// 22.2 함수 호출 방식과 this 바인딩
// this 바인딩은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.

// 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정한다. 하지만 this 바인딩은 함수 호출 시점에 결정된다.

// 22-06
// this 바인딩은 함수 호출 방식에 따라 동적으로 결던된다.
const foo = function () {
  console.dir(this);
};

// 동일한 함수도 다양한 방식으로 호출할 수 있다.

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
// foo 함수 내부의 this는 전역 객체 window를 가리킨다.
foo();

// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다.
const obj = { foo };
obj.foo(); // { foo: [Function: foo] }

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo(); // foo {}

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정된다.
const bar = { name: "bar" };

foo.call(bar); // { name: 'bar' }
foo.apply(bar); // { name: 'bar' }
foo.bind(bar)(); // { name: 'bar' }

// 22.2.1 일반 함수 호출
// 기본적으로 this에는 전역 객체가 바인딩된다.
// 22-07
function foo7() {
  console.log("foo7's this", this);
  function bar7() {
    console.log("bar7's this: ", this);
  }
  bar7();
}
foo7();

// foo7's this <ref *1> Object [global] {
//     global: [Circular *1],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     performance: Performance {
//       nodeTiming: PerformanceNodeTiming {
//         name: 'node',
//         entryType: 'node',
//         startTime: 0,
//         duration: 35.69889998435974,
//         nodeStart: 0.5331000089645386,
//         v8Start: 2.3830000162124634,
//         bootstrapComplete: 25.236199975013733,
//         environment: 12.823099970817566,
//         loopStart: -1,
//         loopExit: -1,
//         idleTime: 0
//       },
//       timeOrigin: 1656855499315.121
//     },
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     structuredClone: [Function: structuredClone]
//   }
//   bar7's this:  <ref *1> Object [global] {
//     global: [Circular *1],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     performance: Performance {
//       nodeTiming: PerformanceNodeTiming {
//         name: 'node',
//         entryType: 'node',
//         startTime: 0,
//         duration: 37.144599974155426,
//         nodeStart: 0.5331000089645386,
//         v8Start: 2.3830000162124634,
//         bootstrapComplete: 25.236199975013733,
//         environment: 12.823099970817566,
//         loopStart: -1,
//         loopExit: -1,
//         idleTime: 0
//       },
//       timeOrigin: 1656855499315.121
//     },
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     structuredClone: [Function: structuredClone]
//   }

// 중첩 함수를 일반 함수로 호출하면 함수 내부의 this에ㅔ는 전역 객체가 바인딩된다.

// strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.
// 22-08
function foo8() {
  "use strict";

  console.log("foo8's this: ", this); // foo8's this:  undefined
  function bar8() {
    console.log("bar8's this: ", this); // bar8's this:  undefined
  }
  bar8();
}
foo8();

// 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩된다.
// 22-09
// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
var value = 1;

// const 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티가 아니다.
// const value = 1;

const obj9 = {
  value: 100,
  foo9() {
    console.log("foo9's this: ", this); // foo9's this:  { value: 100, foo9: [Function: foo9] }
    console.log("foo9's this.value: ", this.value); // foo9's this.value:  100

    // 메서드 내에서 정의한 중첩 함수
    function bar9() {
      console.log("bar9's this: ", this);
      console.log("bar9's this.value: ", this.value); // bar9's this.value:  undefined? 1?
    }

    // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩된다.
    bar9();
  },
};

obj9.foo9();

// 콜백 함수가 일반 함수로 호출된다면 콜백 함수 내부의 this에도 전역 객체가 바인딩된다.
// 어떠한 함수라도 일반함수로 호출되면 this에 전역 객체가 바인딩된다.
// 22-10
var value10 = 1;
const obj10 = {
  value10: 100,
  foo10() {
    console.log("foo10's this: ", this); // foo10's this:  { value10: 100, foo10: [Function: foo10] }
    // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      console.log("callback's this: ", this);
      console.log("callback's this.value: ", this.value); // callback's this.value:  undefined? 1?
    }, 100);
  },
};

obj10.foo10();

// setTimeout 함수: 두 번쨰 인수로 전달한 시간만큼 대기한 다음, 첫 번쨰 인수로 전달한 콜백 함수를 호출하는 타이머 함수
// 22-11
var value11 = 1;

const obj11 = {
  value11: 100,
  foo11() {
    // this 바인딩(obj)을 변수 that에 할당한다.
    const that = this;

    // 콜백 함수 내부에서 this 대신 that을 참조한다.
    setTimeout(function () {
      console.log(that.value11); // 100
    }, 100);
  },
};

obj11.foo11();

// 22-12
var value12 = 1;

const obj12 = {
  value12: 100,
  foo12() {
    // 콜백 함수에 명시적으로 this를 바인딩한다.
    setTimeout(
      function () {
        console.log(this.value12); // 100
      }.bind(this),
      100
    );
  },
};

obj12.foo12();

// 22-13
var value13 = 1;

const obj13 = {
  value13: 100,
  foo13() {
    // 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
    setTimeout(() => console.log(this.value13), 100); // 100
  },
};

obj13.foo13();

// 22.2.2 메서드 호출
// 22-14
const person = {
  name: "Lee",
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
    return this.name;
  },
};

// 메서드 getName을 호출한 객체는 person이다.
console.log(person.getName()); // Lee

// 22-15
const anotherPerson = {
  name: "Kim",
};

// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName;

// getName 메서드를 호출한 객체는 anotherPerson이다.
console.log(anotherPerson.getName()); // Kim

// getName 메서드를 변수에 할당
const getName = person.getName;

// getName 메서드를 일반 함수로 호출
console.log(getName()); // undefined

// 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
// 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다.
// Node.js 환경에서 this.name은 undefined다.

// 22-16
function Person16(name) {
  this.name = name;
}

Person16.prototype.getName = function () {
  return this.name;
};

const me = new Person16("Lee");

// getName 메서드를 호출한 객체는 me다.
console.log(me.getName()); // Lee

Person16.prototype.name = "Kim";

// getName 메서드를 호출한 객체는 Person16.prototype이다.
console.log(Person16.prototype.getName()); // Kim

// 22.2.3 생성자 함수 호출
// 22-17
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 반지름이 5인 Circle 객체를 생성
const circle1 = new Circle(5);
// 반지름이 10인 Circle 객체를 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

// 22-18
// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다. 즉, 일반적인 함수의 호출이다.
const circle3 = Circle(15);

// 일반 함수로 호출된 Circle에는 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3); // undefined

// 일반 함수로 호출된 Circle 내부의 this는 전역 객체를 가리킨다.
console.log(radius); // 15

// 22.2.4 Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// 22-19
function getThisBinding() {
  return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };

console.log(getThisBinding());

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg)); // { a: 1 }
console.log(getThisBinding.call(thisArg)); // { a: 1 }

// apply와 call 메서드의 본질적인 기능은 함수를 호출하는 것이다.

// 22-20
function getThisBinding20() {
  console.log(arguments);
  return this;
}

// this로 사용할 객체
const thisArg20 = { a: 1 };

// getThisBinding20 함수를 호출하면서 인수로 전달한 객체를 getThisBinding20 함수의 THIS에 바인딩한다.
// apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다.
console.log(getThisBinding20.apply(thisArg20, [1, 2, 3]));

// [Arguments] { '0': 1, '1': 2, '2': 3 }
// { a: 1 }

// call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThisBinding20.call(thisArg20, 1, 2, 3));

// [Arguments] { '0': 1, '1': 2, '2': 3 }
// { a: 1 }

// 22-21
function convertArgsToArray() {
  console.log(arguments);

  // arguments 객체를 배열로 변환
  // Array.prototype.slice를 인수 없이 호출하면 배열의 복사본을 생성한다.
  const arr = Array.prototype.slice.call(arguments);
  console.log(arr);

  return arr;
}

convertArgsToArray(1, 2, 3); // [ 1, 2, 3 ]

// 22-22
function getThisBinding22() {
  return this;
}

// this로 사용할 객체
const thisArg22 = { a: 1 };

// bind 메서드는 첫 번째 인수로 전달한 thisArg22로 this 바인딩이 교체된 getThisBinding22 함수를 새롭게 생성해 반환한다.
console.log(getThisBinding22.bind(thisArg22)); // [Function: bound getThisBinding22]

// bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다.
console.log(getThisBinding22.bind(thisArg22)()); // { a: 1 }

// 22-23
const person23 = {
  name: "Lee",
  foo(callback) {
    setTimeout(callback, 100);
  },
};

person23.foo(function () {
  console.log(`Hi! my name is ${this.name}.`); // Hi! my name is undefined.
  // 일반 함수로 호출된 콜백 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
  // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다.
  // Node.js 환경에서 this.name은 undefined다.
});

// 22-24
const person24 = {
  name: "Lee",
  foo(callback) {
    // bind 메서드로 callback 함수 내부의 this 바인딩을 전달
    setTimeout(callback.bind(this), 100);
  },
};

person24.foo(function () {
  console.log(`Hi! my name is ${this.name}.`); // Hi! my name is Lee.
});
