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

// 25-63

// 25-64

// 25-65

// 25-66

// 25-67

// 25-68

// 25-69

// 25-70

// 25-71

// 25-72

// 25-73

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
