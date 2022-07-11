// 25.8 상속에 의한 클래스 확장
// 25.8.1 클래스 상속과 생성자 함수 상속

// 프로토타입 기반 상속은 프로토타입 체인을 통해 다른 객체의 자산을 상속받는 개념이지만
// 상속에 의한 클래스 확장은 기존 클래스를 상속받아 새로운 클래스를 확장하여 정의하는 것이다.

// 25-54
class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() {
    return "eat";
  }
  move() {
    return "move";
  }
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
  fly() {
    return "fly";
  }
}

const bird = new Bird(1, 5);

console.log(bird); // Bird { age: 1, weight: 5 }
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // ture

console.log(bird.eat()); // eat
console.log(bird.move()); // move
console.log(bird.fly()); // fly

// 25-55
// 의사 클래스 상속(pseudo classical inheritance) 패턴
var Animal55 = (function () {
  function Animal55(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  Animal55.prototype.eat = function () {
    return "eat";
  };

  Animal55.prototype.move = function () {
    return "move";
  };

  return Animal55;
})();

// Animal55 생성자 함수를 상속하여 확장한 Bird55 생성자 함수
var Bird55 = (function () {
  function Bird55() {
    // Animal55 생성자 함수에게 this와 인수를 전달하면서 호출
    Animal55.apply(this, arguments);
  }

  // Bird55.prototype을 Animal55.prototype을 프로토타입으로 갖는 객체로 교체
  Bird55.prototype = Object.create(Animal55.prototype);
  // Bird55.prototype.constructor을 Animal55에서 Bird55로 교체
  Bird55.prototype.fly = function () {
    return "fly";
  };

  return Bird55;
})();

var bird55 = new Bird55(1, 5);

console.log(bird55); // Bird55 { age: 1, weight: 5 }
console.log(bird55.eat()); // eat
console.log(bird55.move()); // move
console.log(bird55.fly()); // fly

// 25.8.2 extends 키워드
// 상속을 통해 클래스를 확장하려면 extends 키워드를 사용하여 상속받을 클래스를 정의한다.
// 25-56
// 수퍼(베이스/부모)클래스
class Base {}

// 서브(파생/자식)클래스
class Derived extends Base {}

// 상속을 통해 확장된 클래스를 서브클래스라 부르고, 서브클래스에게 상속된 클래스는 수퍼클래스
// 서브클래스를 파생 클래스 또는 자식 클래스, 수퍼클래스를 베이스 클래스 또는 부모 클래스라고 부른다

// extends 키워드의 역할은 수퍼클래스와 서브클래스 간의 상속 관계를 설정하는 것
// 클래스도 프로토타입을 통해 상속 관계를 구현
// 수퍼클래스와 서브클래스는 인스턴스의 프로토타입 체인뿐 아니라 클래스 간의 프로토타입 체인도 생성한다. 이를 통해 프로토타입 메서드, 정적 메서드 모두 상속이 가능하다.

// 25.8.3 동적 상속
// extends 키워드는 클래스뿐만 아니라 생성자 함수를 상속받아 클래스를 확장할 수도 있다. 단, extends 키워드 앞에는 반드시 클래스가 와야 한다.
// 단, extends 키워드 앞에는 반드시 클래스가 와야 한다.
// 25-57
// 생성자 함수
function Base57(a) {
  this.a = a;
}

// 생성자 함수를 상속받는 서브클래스
class Derived57 extends Base57 {}

const derived57 = new Derived57(1);
console.log(derived57); // Derived57 { a: 1 }

// 25-58
function Base1() {}

class Base2 {}

let condition = true;

// 조건에 따라 동적으로 상속 대상을 결정하는 서브클래스
class Derived58 extends (condition ? Base1 : Base2) {}

const derived58 = new Derived58();
console.log(derived58); // Derived58 {}

console.log(derived58 instanceof Base1); // true
console.log(derived58 instanceof Base2); // false

// 25.8.4 서브캘래스의 constructor
// 클래스에서 constructor를 생략하면 클래스에 다음과 같이 비어있는 constructor가 암묵적으로 정의된다.
// 25-59
//constructor() {}

// 서브클래스에서 constructor를 생략하면 클래스에 다음과 같은 constructor가 암묵적으로 정의된다.
// args는 new 연산자와 함께 클래스를 호출할 때 전달한 인수의 리스트다.

// 25-60
// constructor(...args) { super(...args); }

// super는 수퍼클래스의 constructor를 호출하여 인스턴스를 생성한다.

// Rest 파라미터: 매개변수에 ...을 붙이면 Rest 파라미터가 된다. Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

// 25-61
// 수퍼클래스
class Base61 {}

// 서브클래스
class Derived61 extends Base {}

// 25-62
// 수퍼 클래스
class Base62 {
  constructor() {}
}

// 서브클래스
class Derived62 extends Base62 {
  constructor(...args) {
    super(...args);
  }
}

const derived62 = new Derived62();
console.log(derived62); // Derived62 {}

// 수퍼클래스와 서브클래스 모두 constructor를 생략하면 빈 객체가 생성된다. 프로퍼티를 소유하는 인스턴스를 생성하려면 constructor 내부에서 인스턴스에 프로퍼티를 추가해야 한다.

// 25.8.5 super 키워드
// super 키워드는 함수처럼 호출할 수도 있고 this오 같이 식별자처럼 차조할 수 있는 특수한 키워드다.
// super을 호출하면 수퍼클래스의 constructor를 호출한다.
// super을 참조하면 수퍼클래스의 메서드를 호출할 수 있다.

// super 호출
// super를 호출하면 수퍼클래스의 constructor를 호출한다.
// 25-63
// 수퍼클래스
class Base63 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// 서브클래스
class Derived63 extends Base63 {
  // 다음과 같이 암묵적으로 constructor가 정의된다.
  // constructor(...args) { super(...args); }
}

const derived63 = new Derived63(1, 2);
console.log(derived63); // Derived63 { a: 1, b: 2 }

// 수퍼클래스에서 추가한 프로퍼티와 서브클래스에서 추가한 프로퍼티를 갖는 인스턴스를 생성한다면 서브클래스의 constructor를 생략할 수 없다.
// 이 때 new 연산자와 함께 서브클래스를 호출하면서 전달한 인수 중에서 수퍼클래스의 constructor에 전달할 필요가 있는 인수는 서브클래스의 constructor에서 호출하는 super를 통해 전달한다.
// 25-64
// 수퍼클래스
class Base64 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// 서브클래스
class Derived64 extends Base64 {
  constructor(a, b, c) {
    super(a, b);
    this.c = c;
  }
}

const derived64 = new Derived64(1, 2, 3);
console.log(derived64); // Derived64 { a: 1, b: 2, c: 3 }

// super를 호출할 때 주의할 사항
// 1. 서브클래스에서 constructor를 생략하지 않는 경우 서브클래스의 constructor에서는 반드시 super를 호출해야 한다.
// 25-65
// class Base65 {}

// class Derived65 extends Base65 {
//   constructor() {
//     // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//     console.log('constructor call')
//   }
// }

// const derived65 = new Derived65();

// 2. 서브클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없다.
// 25-66
// class Base66 {}

// class Derived66 extends Base66 {
//   constructor() {
//     // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//     this.a = 1;
//     super();
//   }
// }

// const derived66 = new Derived66(1);

// 3. super는 반드시 서브클래스의 constructor에서만 호출한다. 서브클래스가 아닌 클래스의 constructor나 함수에서 super를 호출하면 에러가 발생한다.
// 25-67
// class Base67 {
//   constructor() {
//     super(); // SyntaxError: 'super' keyword unexpected here
//   }
// }

// function Foo67() {
//   super(); // SyntaxError: 'super' keyword unexpected here
// }

// super 참조
// 메서드 내에서 super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.
// 1. 서브클래스의 프로토타입 메서드 내에서 super.sayHi는 수퍼클래스의 프로토타입 메서드 sayHi를 가리킨다.
// 25-68
// 수퍼클래스
class Base68 {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

// 서브클래스
class Derived68 extends Base68 {
  sayHi() {
    // super.sayHi는 수퍼클래스의 프로토타입 메서드를 가리킨다.
    return `${super.sayHi()}. how are you doing?`;
  }
}

const derived68 = new Derived68("Lee");
console.log(derived68.sayHi()); // Hi! Lee. how are you doing?

// 25-69
// 수퍼클래스
class Base69 {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Derived69 extends Base69 {
  sayHi() {
    // __super는 Base.prototype을 가리킨다.
    const __super = Object.getPrototypeOf(Derived69.prototype);
    return `${__super.sayHi.call(this)} how are you doing?`;
  }
}

// 25-70
// [[HomeObject]]는 메서드 자신을 바인딩하고 있는 객체를 가리키낟.
// [[HomeObject]]를 통해 메서드 자신을 바인딩하고 있는 객체의 프로토타입을 찾을 수 있다.
// 예를 들어, Derived 클래스의 sayHi 메서드는 Derived.prototype에 바인딩되어 있다.
// 따라서 Derived 클래스의 sayHi aptjemdml [[HomeObject]]는 Derived.prototype이고
// 이를 통해 Derived 클래스의 sayHi 메서드 내부의 super 참조가 Base.prototype으로 결정된다.
// 따라서 super.sayHi는 Base.prototype.sayHi를 가리키게 된다.

// super = Object.getPrototypeOf([HomeObject])

// 주의할 것은 ES6의 메서드 축약 표현으로 정의된 함수만이 [[HomeObject]]를 갖는다는 것이다.
// 25-71
const obj71 = {
  // foo71은 ES6의 메서드 축약 표현으로 정의한 메서드다. 따라서 [[HomeObject]]를 갖는다.
  foo71() {},
  // bar는 ES6의 메서드 축약 표현으로 정의한 메서드가 아니라 일반 함수다.
  // 따라서 [[HomeObject]]를 갖지 않는다.
  bar: function () {},
};

// [[HomeObject]]를 가지는 함수만이 super를 참조할 수 있다. 따라서 [[HomeObject]]를 갖는 ES6의 메서드 축약 표현으로 정의된 함수만이 super 참조를 할 수 있다.
// 단, super 참조는 수퍼클래스의 메서드를 참조하기 위해 사용하므로 서브클래스의 메서드에서 사용해야 한다.

// 객체 리터럴에서도 super 참조를 사용할 수 있다. 단, ES6의 메서드 축약표현으로 정의된 함수만 가능하다.

// 25-72
const base72 = {
  name: "Lee",
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const derived72 = {
  __proto__: base72,
  // ES6 메서드 축약 표현으로 정의한 메서드다. 따라서 [[HomeObject]]를 갖는다.
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  },
};

console.log(derived72.sayHi()); // Hi! Lee. how are you doing?

// 2. 서브클래스의 정적 메서드 내에서 super.sayHi는 수퍼클래스의 정적 메서드 sayHi를 가리킨다.
// 25-73
// 수퍼클래스
class Base73 {
  static sayHi() {
    return "Hi!";
  }
}

// 서브클래스
class Derived73 extends Base73 {
  static sayHi() {
    // super.sayHi는 수퍼클래스의 정적 메서드를 가리킨다.
    return `${super.sayHi()} how are you doing?`;
  }
}

console.log(Derived73.sayHi()); // Hi! how are you doing?

// 25.8.6 상속 클래스의 인스턴스 생성 과정
// 25-74
class Rectangle74 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }
}

// 서브클래스
class ColorRectangle extends Rectangle74 {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  // 메서드 오버라이딩
  toString() {
    return super.toString() + `, color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(2, 4, "red");
console.log(colorRectangle.getArea()); // 8
// 오버라이딩된 toString 메서드를 호출
console.log(colorRectangle.toString()); // width = 2, height = 4, color = red

// 1. 서브클래스의 super 호출
// 서브클래스는 자신이 직접 인스턴스를 생성하지 않고 수퍼클래스에게 인스턴스 생성을 위임한다.
// 이것이 바로 서브클래스의 constructor에서 반드시 super를 호출해야 하는 이유다.

// 2. 수프클래스의 인스턴스 생성과 this 바인딩
// 25-75
// 수퍼클래스
class Rectangle75 {
  constructor(width, height) {
    // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this);
    // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
    console.log(new.target);
  }
}

// 인스턴스는 new.target이 가리키는 서브클래스가 생성한 것으로 처리된다.

// 25-76
// 서브클래스
class Rectangle76 {
  constructor(width, height) {
    // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this);
    // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
    console.log(new.target);

    // 생성된 인스턴스의 프로토타입으로 ColorRectangle.prototype이 설정된다.
    console.log(Object.getPrototyypeOf(this) === ColorRectangle.prototype);
    console.log(this instanceof ColorRectangle);
    console.log(this instanceof Rectangle76);
  }
}

// 3. 수퍼클래스의 인스턴스 초기화
// 수퍼클래스의 constructor가 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.
// 즉, this에 바인딩되어 있는 인스턴스에 프로퍼티를 추가하고 constructor가 인수로 전달받은 초기값으로 인스턴스의 프로퍼티를 초기화한다.
// 25-77
// 수퍼클래스
class Rectangle77 {
  constructor(width, height) {
    // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this);
    // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
    console.log(new.target);

    // 생성된 인스턴스의 프로토타입으로 ColorRectangle.prototype이 설정된다.
    console.log(Object.getPrototyypeOf(this) === ColorRectangle.prototype);
    console.log(this instanceof ColorRectangle);
    console.log(this instanceof Rectangle76);

    // 인스턴스 초기화
    this.width = width;
    this.height = height;

    console.log(this);
  }
}

// 4. 서브 클래스 constructor로의 복귀와 this 바인딩
// super가 반환한 인스턴스가 this에 바인딩된다.
// 서브클래스는 별도의 인스턴스를 생성하지 않고 super가 반환한 인스턴스를 this에 바인딩하여 그대로 사용한다.
// 25-78
// 서브클래스
class ColorRectangle78 extends Rectangle77 {
  constructor(width, height, color) {
    super(width, height);

    // super가 반환한 인스턴스가 this에 바인딩된다.
    console.log(this);
  }
}

// super가 호출되지 앟으면 인스턴스가 생성되지 않으며, this 바인딩도 할 수 없다.
// 서브클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없는 이유가 바로 이 때문이다.

// 5. 서브클래스의 인스턴스 초기화

// 6. 인스턴스 반환
// 클래스의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환한다.
// 25-79
class ColorRectangle79 extends Rectangle77 {
  constructor(width, height, color) {
    super(width, height);

    // super가 반환한 인스턴스가 this에 바인딩된다.
    console.log(this);

    // 인스턴스 초기화
    this.color = color;

    // 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    console.log(this);
  }
}
// 25.8.7 표준 빌트인 생성자 함수 확장
// 25-80
// Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray extends Array {
  // 중복된 배열 요소를 제거하고 반환한다: [1, 1, 2, 3] => [1, 2, 3]
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  // 모든 배열 요소의 평균을 구한다: [1, 2, 3] => 2
  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}
const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray); // MyArray(4) [ 1, 1, 2, 3 ]

// MyArray.prototype.uniq 호출
console.log(myArray.uniq()); // MyArray(3) [ 1, 2, 3 ]
// MyArray.prototype.average 호출
console.log(myArray.average()); // 1.75

// Array 생성자 함수를 상속받아 확장한 MyArray 클래스가 생성한 인스턴스는 Array.prototype과 MyArray.prototype의 모든 메서드를 사용할 수 있다.
// 이 때 주의할 것은 Array.prototype의 메서드 중에서 map, filter와 같이 새로운 배열을 반환하는 메서드가 MyArray 클래스의 인스턴스를 방황한다는 것이다.

// 25-81
console.log(myArray.filter((v) => v % 2) instanceof MyArray); // true

// 만약 새로운 배열을 반환하는 메서드가 MyArray 클래스의 인스턴스를 반환하지 않고 Array의 인스턴스를 반환하면 MyArray 클래스의 메서드와 메서드 체이닝이 불가능하다.
// 25-82
// 메서드 체이닝
// [1, 1, 2, 3] => [1, 1, 3] => [1, 3] => 2
console.log(
  myArray
    .filter((v) => v % 2)
    .uniq()
    .average()
); // 2

// 25-83
// Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray83 extends Array {
  // 모든 메서드가 Array 타입의 인스턴스를 반환하도록 한다.
  static get [Symbol.species]() {
    return Array;
  }

  // 중복된 배열 요소를 제거하고 반환한다.: [1, 1, 2, 3] => [1, 2, 3]
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  // 모든 배열 요소의 평균을 구한다: [1, 2, 3] => 2
  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray83 = new MyArray83();

console.log(myArray83.uniq() instanceof MyArray83); // false
console.log(myArray83.uniq() instanceof Array); // true

// 메서드 체이닝
// uniq 메서드는 Array 인스턴스를 반환하므로 average 메서드를 호출할 수 없다.
console.log(myArray83.uniq().average()); // TypeError: myArray83.uniq(...).average is not a function
