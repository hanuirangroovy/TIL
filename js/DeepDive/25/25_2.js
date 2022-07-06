// 25.2 클래스 정의
// 클래스는 class 키워드를 사용하여 정의한다.
// 클래스 이름은 생성자 함수와 마찬가지로 파스칼 케이스를 사용하는 것이 일반적이다.
// 파스칼 케이스를 사용하지 않아도 에러가 발생하지는 않는다.

// 25-02
// 클래스 선언문
class Person {}

// 25-03
// 익명 클래스 표현식
const Person2 = class {};

// 기명 클래스 표현식
const Person3 = class MyClass {};

// 클래스를 표현식으로 정의할 수 있다는 것은 클래스가 값으로 사용할 수 있는 일급 객체라는 것을 의미

// 클래스는 일급 객체로서 다음과 같은 특징을 갖는다.
// 1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
// 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
// 3. 함수의 매개변수에게 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.

// 클래스 몸체에는 0개 이상의 메서드만 정의할 수 있다.
// 클래스 몸체에서 정의할 수 있는 메서드는 constructor(생성자), 프로토타입 메서드, 정적 메서드. 세 가지가 있다.
// 25-04
// 클래스 선언문
class Person4 {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log("Hello!");
  }
}

// 인스턴스 생성
const me = new Person4("Lee");

// 인스턴스의 프로퍼티 참조
console.log(me.name); // Lee
// 프로토타입 메서드 호출
me.sayHi(); // Hi! My name is Lee
// 정적 메서드 호출
Person4.sayHello(); // Hello!
