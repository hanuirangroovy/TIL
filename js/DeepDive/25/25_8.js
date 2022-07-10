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

// 25-75

// 25-76

// 25-77

// 25-78

// 25-79

// 25.8.7 표준 빌트인 생성자 함수 확장
// 25-80

// 25-81

// 25-82

// 25-83
