// 25.5 메서드

// 25.5.1 constructor
// constructor는 인스턴스를 생성하고 초기화하기 위한 특수한 메서드다
// constructor는 이름을 변경할 수 없다.

// 25-11
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}

// 25-12
// 클래스는 함수다. 개발자 도구.
console.log(typeof Person); // function
console.dir(Person); // [class Person]

// 25-13
// 인스턴스 생성
const me = new Person("Lee");
console.log(me);

// constructor 내부의 this는 생성자 함수와 마찬가지로 클래스가 생성한 인스턴스를 가리킨다.

// 25-14
class Person14 {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}

// 생성자 함수
function Person14_2(name) {
  // 인스턴스 생성 및 초기화
  this.name = name;
}

// 클래스의 constructor 메서드와 프로토타입의 constructor 프로퍼티
// 클래스의 constructor 메서드와 프로토타입의 constructor 프로퍼티는 이름이 같아 혼동하기 쉽지만 직접적인 관련이 없다.
// 프로토타입의 constructor 프로퍼티는 모든 프로토타입이 가지고 잇는 프로퍼티이며, 생성자 함수를 가리킨다.

// constructor는 클래스 내에 최대 한 개만 존재할 수 있다. 만약 클래스가 2개 이상의 constructor를 포함하면 문법 에러가 발생한다.

// 25-15
class Person15 {
  constructor() {}
  // constructor() {} // SyntaxError: A class may only have one constructor
}

// constructor는 생략할 수 있다.
// 25-16
class Person16 {}

// constructor를 생략하면 클래스에 다음과 같이 빈 constructor가 암묵적으로 정의된다.
// constructor를 생략한 클래스는 빈 constructor에 의해 빈 객체를 생성한다.
// 25-17
class Person17 {
  // constructor는 생략하면 아래와 같이 빈 constructor가 암묵적으로 정의된다.
  constructor() {}
}

// 빈 객체가 생성된다.
const me17 = new Person17();
console.log(me17); // Person17 {}

// 프로퍼티가 추가되어 초기화된 인스턴스를 생성하려면 constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다.
// 25-18
class Person18 {
  constructor() {
    // 고정값으로 인스턴스 초기화
    this.name = "Lee";
    this.address = "Seoul";
  }
}

// 인스턴스 프로퍼티가 추가된다.
const me18 = new Person18();
console.log(me18); // Person18 { name: 'Lee', address: 'Seoul' }

// 인스턴스를 생성할 때 클래스 외부에서 인스턴스 프로퍼티의 초기값을 전달하려면 constructor에 매개변수를 선언하고 인스턴스를 생성할 때 초기값을 전달한다.
// 이 때 초기값은 constructor의 매개변수에게 전달된다.
// 25-19
class Person19 {
  constructor(name, address) {
    // 인수로 인스턴스 초기화
    this.name = name;
    this.address = address;
  }
}

// 인수로 초기값을 전달한다. 초기값은 constructor에 전달된다.
const me19 = new Person19("Lee", "Seoul");
console.log(me19); // Person19 { name: 'Lee', address: 'Seoul' }

// 만약 this가 아닌 다른 객체를 명시적으로 반환하면 this, 즉 인스턴스가 반환되지 못하고 return 문에 명시된 객체가 반환된다.

// 25-20
class Person20 {
  constructor(name) {
    this.name = name;

    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    return {};
  }
}

// constructor에서 명시적으로 반환한 빈 객체가 반환된다.
const me20 = new Person20("Lee");
console.log(me20); // {}

// 명시적으로 우너시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
// 25-21
class Person21 {
  constructor(name) {
    this.name = name;

    // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
    return 100;
  }
}

const me21 = new Person21("Lee");
console.log(me21); // Person21 { name: 'Lee' }

// constructor 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 클래스의 기본 동작을 훼손한다.
// 따라서 constructor 내부에서 return 문을 반드시 생략해야 한다.

// 25.5.2 프로토타입 메서드
// 생성자 함수를 사용하여 인스턴스를 생성하는 경우 프로토타입 메서드를 생성하기 위해서는 명시적으로 프로토타입에 메서드를 추가해야 한다.
// 25-22
// 생성자 함수
function Person22(name) {
  this.name = name;
}

// 프로토타입 메서드
Person22.prototype.sayHi = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me22 = new Person22("Lee");
me22.sayHi(); // Hi! My name is Lee

// 클래스 몸체에서 정의한 메서드는 생성자 함수에 의한 객체 생성 방식과는 다르게 클래스의 prototype 프로퍼티에 메서드를 추가하지 않아도 기본적으로 프로토타입 메서드가 된다.

// 25-23
class Person23 {
  // 생성자
  constructor(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const me23 = new Person23("Lee");
me23.sayHi(); // Hi! My name is Lee

// 생성자 함수와 마찬가지로 클래스가 생성한 인스턴스는 프로토타입 체인의 일원이 된다.
// 25-24
// me 객체의 프로토타입은 Person.prototype이다.
Object.getPrototypeOf(me) === Person.prototype; // true
me instanceof Person; // true

// Person.prototype의 프로토타입은 Object.prototype이다.
Object.getPrototypeOf(Person.prototype) === Object.prototype; // true
me instanceof Object; // true

// me 객체의 constructor는 Person 클래스다.
me.constructor === Person; // true

// 클래스 몸체에서 정의한 메서드는 인스턴스의 프로토타입에 존재하는 프로토타입 메서드가 된다. 인스턴스는 프로토타입 메서드를 상속받아 사용할 수 있다.
// 프로토타입 체인은 기존의 모든 객체 생성 방식 뿐만 아니라 클래스에 의해 생성된 인스턴스에도 등일하게 적용된다. 생성자 함수의 역할을 클래스가 할 뿐이다.
// 클래스는 생성자 함수와 같이 인스턴스를 생성하는 생성자 함수라고 볼 수 있다.
// 클래스는 생성자 함수와 마찬가지로 프로토타입 기반의 객체 생성 메커니즘이다.

// 25.5.3 정적 메서드
// 정적 메서드는 인스턴스를 새엇ㅇ하지 않아도 호출할 수 있는 메서드를 말한다.
// 생성자 함수의 경우 정적 메서드를 생성하기 위해서는 명시적으로 생성자 함수에 메서드를 추가해야 한다.

// 25-25
// 생성자 함수
function Person25(name) {
  this.name = name;
}

// 정적 메서드
Person25.sayHi = function () {
  console.log("Hi!");
};

// 정적 메서드 호출
Person25.sayHi(); // Hi!

// 클래스에서는 메서드에 static 키워드를 붙이면 정적 메서드(클래스 메서드)가 된다.
// 25-26
class Person26 {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // 정적 메서드
  static sayHi() {
    console.log("Hi!");
  }
}

// 정적 메서드는 클래스에 바인딩된 메서드가 된다. 클래스는 함수 객체로 평가되므로 자신의 프로퍼티/메서드를 소유할 수 있다.
// 클래스는 클래스 정의나 평가되는 시점에 함수 객체가 되므로 인스턴스와 달리 별다른 생성 과정이 필요없다.
// 정적 메서드는 클래스 정의 이후 인스턴스를 생성하지 않아도 호출할 수 있다.
// 정적 메서든ㄴ 프로토타입 메서드처럼 인스턴스로 호출하지 않고 클래스로 호출한다.

// 25-27
// 정적 메서드는 클래스로 호출한다.
// 정적 메서드는 인스턴스 없이도 호출할 수 있다.
Person26.sayHi(); // Hi!

// 정적 메서드는 인스턴스로 호출할 수 없다.
// 정적 메서드가 바인딩된 클래스는 인스턴스의 프로토타입 체인상에 존재하지 않기 때문이다.
// 인스턴스의 프로토타입 체인 상에는 클래스가 존재하지 않기 때문에 인스턴스로 클래스의 메서드를 상속받을 수 없다.
// 25-28
// 인스턴스 생성
const me28 = new Person26("Lee");
// me28.sayHi(); // TypeError: me28.sayHi is not a function

// 25.5.4 정적 메서드와 프로토타입 메서드의 차이
// 1. 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다.
// 2. 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다.
// 3. 정적 메서드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메서드는 인스턴스 프로퍼티를 참조할 수 있다.

// 25-29
class Square {
  // 정적 메서드
  static area(width, height) {
    return width * height;
  }
}
console.log(Square.area(10, 10)); // 100

// 정적 메서드 area는 인스턴스 프로퍼티를 참조하지 않는다. 만약 인스턴스 프로퍼티를 참조해야 한다면 정적 메서드 대신 프로토타입 메서드를 사용해야 한다.

// 25-30
class Square30 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // 프로토타입 메서드
  area() {
    return this.width * this.height;
  }
}

const square = new Square30(10, 10);
console.log(square.area()); // 100

// 25-31
// 표준 빌트인 객체의 정적 메서드
Math.max(1, 2, 3); // 3
Number.isNaN(NaN); // true
JSON.stringify({ a: 1 }); // "{"a":1}"
Object.is({}, {}); // false
Reflect.has({ a: 1 }, "a"); // true

// 25.5.5 클래스에서 정의한 메서드의 특징
// 1. function 키워드를 생략한 메서드의 축약 표현을 사용한다.
// 2. 객체 리터럴과는 다르게 클래스에 메서드를 정의할 떄는 콤마가 필요 없다.
// 3. 암묵적으로 strict mode로 실행된다.
// 4. for...in문이나 Object.keys 메서드 등으로 열거할 수 없다. 즉, 프로퍼티의 열거 가능 여부를 나타내며, 불리언 값을 갖는 프로퍼티 어트리뷰터 [[Enumerable]]의 값이 false다.
// 5. 내부 메서드 [[Construct]]를 갖지 않는 non-constructor다. 따라서 new 연산자와 함께 호출할 수 없다.
