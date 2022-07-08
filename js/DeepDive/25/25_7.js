// 25.7 프로퍼티

// 25.7.1 인스턴스 프로퍼티
// 인스턴스 프로퍼티는 constructor 내부에서 정의해야 한다.
// 25-33
class Person {
  constructor(name) {
    // 인스턴스 프로퍼티
    this.name = name;
  }
}

const me = new Person("Lee");
console.log(me); // Person { name: 'Lee' }

// 25-34
class Person34 {
  constructor(name) {
    // 인스턴스 프로퍼티
    this.name = name; // name 프로퍼티는 public하다.
  }
}

const me34 = new Person34("Lee");
console.log(me34.name); // Lee

// 25.7.2 접근자 프로퍼티
// 접근자 프로퍼티는 자체적으로는 값([[Value]]내부슬롯)을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 떄 사용하는 접근자 함수로 구성된 프로퍼티다.
// 25-35
const person = {
  // 데이터 프로퍼티
  firstName: "Ungmo",
  lastName: "Lee",

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${person.firstName} ${this.lastName}`;
  },
  // setter 함수
  set fullName(name) {
    // 배열 디스트럭처링 할당
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${person.firstName} ${person.lastName}`); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = "Heegun Lee";
console.log(person); // { firstName: 'Heegun', lastName: 'Lee', fullName: [Getter/Setter] }

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName); // Heegun Lee

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(person, "fullName"));

// {
//     get: [Function: get fullName],
//     set: [Function: set fullName],
//     enumerable: true,
//     configurable: true
//   }

// 접근자 프로퍼티는 클래스에서도 사용할 수 있다.
// 객체 리터럴을 클래스로 표현하면 다음과 같다.
// 25-36
class Person36 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
}

const me36 = new Person36("Ungmo", "Lee");

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${me36.firstName} ${me36.lastName}`); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
me36.fullName = "Heegun Lee";
console.log(me36); // { firstName: 'Heegun', lastName: 'Lee', fullName: [Getter/Setter] }

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(me36.fullName); // Heegun Lee

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(Person36.prototype, "fullName"));

// {
//     get: [Function: get fullName],
//     set: [Function: set fullName],
//     enumerable: false,
//     configurable: true
//   }

// 접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수, getter와 setter 함수로 구성되어 있다.
// getter은 인스턴스 프로퍼티에 접근할 때마다 프로퍼티 값을 조작하거나 별도의 행위가 필요할 때 사용한다.
// getter는 메서드 이름 앞에 get 키워드를 사용해 정의한다.
// setter는 인스턴스 프로퍼티에 값을 할당할 때마다 프로퍼티 값을 조작하거나 별도의 행위가 필요할 때 사용한다.
// setter는 메서드 이름 앞에 set 키워드를 사용해 정의한다.
// 이때 getter와 setter 이름은 인스턴스 프로퍼티처럼 사용되는데 getter는 호출하는 것이 아니라 프로퍼티처럼 참조하는 형식으로 사용하며, 참조 시에 내부적으로 getter가 호출된다.
// setter도 호출하는 것이 아니라 프로퍼티처럼 값을 할당하는 형식으로 사용하며, 할당 시에 내부적으로 setter가 호출된다.

// getter는 이름 그대로 무언가를 취득할 때 사용하므로 반드시 무언가를 반환해야 하고 setter는 무언가를 프로퍼티에 할당해야 할 때 상요하므로 반드시 매개변수가 있어야 한다.
// setter는 단 하나의 값만 할당받기 때문에 단 하나의 매개변수만 선언할 수 있다.

// 클래스의 메서드는 기본적으로 프로토타입 메서드가 된다. 따라서 클래스의 접근자 프로퍼티 도한 인스턴스 프로퍼티가 아닌 프로토타입의 프로퍼티가 된다.

// 25-37
// Object.getOwnPropertyNames는 비열거형을 포함한 모든 프로퍼티의 이름을 반환한다.(상속제외)
// Object.getOwmPropertyNames(me); // ["firstName", "lastName"]
// Object.getOwnPropertyNames(Object.getPrototypeOf(me));// ["constructor", "fullName"]

// 25.7.3 클래스 필드 정의 제안
// 클래스 필드는 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어다.

// 25-38
// 자바의 클래스 정의
// public class Person38 {
//     // 클래스 필드 정의
//     // 클래스 필드는 클래스 몸체에 this없이 선언해야 한다.
//     private String firstName = "";
//     private String lastName = """

//     // 생성자
//     Person38(String firstName, String lastName) {
//         // this는 언제나 클래스가 생성할 인스턴스를 가리킨다.
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     piblic String getFullName() {
//         // 클래스 필드 참조
//         // this 없이도 클래스 필드를 참조할 수 있다.
//         return this.firstName + " " + this.lastName;
//     }
// }

// 자바스크립트의 클래스 몸체에는 메서드만 선언할 수 있다.
// 클래스 몸체에 자바와 유사하게 클래스 필드를 선언하면 문법 에러가 발생한다.

// 25-39
class Person39 {
  // 클래스 필드 정의
  name = "Lee";
}

const me39 = new Person("Lee");

// 최신 브라우저와 최신 Node.js에서는 클래스 필드를 클래스 몸체에 정의할 수 있다.

// 25-40
console.log(me39); // Person { name: 'Lee' }

// 클래스 몸체에서 클래스 필드를 정의하는 경우 this에 클래스 필드를 바인딩해서는 안 된다. this는 클래스의 constructor와 메서드 내에서만 유효하다.
// 25-41
// class Person41 {
//     // this에 클래스 필드를 바인딩해서는 안 된다.
//     this.name = ''; // SyntaxError: Unexpected token '.'
// }

// 클래스 필드를 참조하는 경우 자바와 같은 클래스 기반 객체지향 언어에서는 this를 생략할 수 있으나 자바스크립트에서는 this를 반드시 사용해야 한다.

// 25-42
// class Person42 {
//   // 클래스 필드
//   name = "Lee";

//   constructor() {
//     console.log(name); // ReferenceError: name is not defined
//   }
// }

// new Person42();

// 클래스 필드에 초기값을 할당하지 않으면 undefined를 갖는다.
// 25-43
class Person43 {
  // 클래스 필드를 초기화하지 않으면 undefined를 갖는다.
  name;
}

const me43 = new Person43();
console.log(me43); // Person43 { name: undefined }

// 인스턴스를 생성할 때 외부의 초기값으로 클래스 필드를 초기화해야 할 필요가 없다면 constructor에서 클래스 필드를 초기화해야 한다.
// 25-44
class Person44 {
  name;
  constructor(name) {
    // 클래스 필드 초기화
    this.name = name;
  }
}

const me44 = new Person44("Lee");
console.log(me44); // Person44 { name: 'Lee' }

// 인스턴스를 생성할 때 클래스 필드를 초기화할 필요가 있다면 constructor 밖에서 클래스 필드를 정의할 필요가 없다.
// 클래스 필드를 초기화할 필요가 있다면 어차피 constructor 내부에서 클래스 필드를 참조하여 초기값을 할당해야 한다.
// 이때 this, 즉 클래스가 생성한 인스턴스에 클래스 필드에 해당하는 프로퍼티가 없다면 자동 추가 되기 때문이다.

// 25-45
class Person45 {
  constructor(name) {
    this.name = name;
  }
}

const me45 = new Person45("Lee");
console.log(me45); // Person45 { name: 'Lee' }

// 함수는 일급 객체이므로 함수를 클래스 필드에 할당할 수 있다. 따라서 클래스 필드를 통해 메서드를 정의할 수도 있다.

// 25-46
class Person46 {
  // 클래스 필드에 문자열을 할당
  name = "Lee";

  // 클래스 필드에 함수를 할당
  getName = function () {
    return this.name;
  };
  // 화살표 함수로 정의할 수도 있다.
  // getName = () => this.name;
}

const me46 = new Person46();
console.log(me46); // Person46 { name: 'Lee', getName: [Function: getName] }
console.log(me46.getName()); // Lee

// 클래스 필드에 함수를 할당하는 경우, 이 함수는 프로토타입 메서드가 아닌 인스턴스 메서드가 된다.
// 모든 클래스 필드는 인스턴스 프로퍼티가 되기 때문이다.
// 따라서 클래스 필드에 함수를 할당하는 것은 권장하지 않는다.

// 클래스 필드와 화살표 함수
// 클래스 필드에 화살표 함수를 할당하여 화살표 함수 내부의 this가 인스턴스를 가리키게 하는 경우도 있다.
// 25-47 -> 25_47.html

// 클래스 필드 정의 제안으로 인해 인스턴스 프로퍼티를 정의하는 방식은 두 가지가 되었다.
// 1. 인스턴스를 생성할 때 외부 초기값으로 클래스 필드를 초기화할 필요가 있다면 constructor에서 인스턴스 프로퍼티를 정의하는 기존 방식 사용
// 2. 인스턴스를 생성할 때 외부 초기값으로 클래스 필드를 초기화할 필요가 없다면 기존의 constructor에서 인스턴스 프로퍼티를 정의하는 방식과 클래스 필드 저의 제안 모두 사용

// 25.7.4 private 필드 정의 제안
// 인스턴스 프로퍼티는 인스턴스를 통해 클래스 외부에서 언제나 참조할 수 있다. 언제나 public이다.
// 25-48
class Person48 {
  constructor(name) {
    this.name = name; // 인스턴스 프로퍼티는 기본적으로 public하다.
  }
}

const me48 = new Person48("Lee");
console.log(me48.name); // Lee

// 클래스 필드 정의 제안을 사용하더라도 클래스 필드는 기본적으로 public하기 때문에 외부에 그대로 노출된다.
// 25-49
class Person49 {
  name = "Lee"; // 클래스 필드도 기본적으로 public하다.
}

// 인스턴스 생성
const me49 = new Person49();
console.log(me49.name); // Lee

// private 선두에는 #을 붙여준다. private 필드를 참조할 때도 #을 붙여줘야 한다.
// 25-50
class Person50 {
  // private 필드 정의
  #name = " ";

  constructor(name) {
    // private 필드 참조
    this.#name = name;
  }
}

const me50 = new Person50("Lee");

// private 필드 #name은 클래스 외부에서 참조할 수 없다.
// console.log(me60.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class

// 클래스 외부에서 private 필드에 직접 접근할 수 있는 방법은 없다. 다만 접근자 프로퍼티를 통해 간접적으로 접근하는 방법은 유효하다.
// 25-51
class Person51 {
  // private 필드 정의
  #name = " ";
  constructor(name) {
    this.#name = name;
  }

  // name은 접근자 프로퍼티다.
  get name() {
    // private 필드를 참조하여 trim한 다음 반환한다.
    return this.#name.trim();
  }
}

const me51 = new Person51(" Lee ");
console.log(me51.name); // Lee

// private 필드는 반드시 클래스 몸체에 정의해야 한다. private 필드를 직접 constructor에 정의하면 에러가 발생한다.

// 25-52
class Person52 {
  constructor(name) {
    // private 필드는 클래스 몸체에서 정의해야 한다.
    // this.#name = name;
    // SyntaxError: Private field '#name' must be declared in an enclosing class
  }
}

// 25.7.5 static 필드 정의 제안
// 25-53
class MyMath {
  // static public 필드 정의
  static PI = 22 / 7;

  // static private 필드 정의
  static #num = 10;

  // static 메서드
  static increment() {
    return ++MyMath.#num;
  }
}

console.log(MyMath.PI); // 3.142857142857143
console.log(MyMath.increment()); // 11
