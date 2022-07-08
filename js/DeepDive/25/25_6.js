// 25.6 클래스의 인스턴스 생성 과정

// 1. 인스턴스 생성과 this 바인딩
// new 연산자와 함께 클래스를 호출하면 constructor의 내부 코드가 실행되기에 앞서 암묵저긍로 빈 객체가 생성된다.
// 이 빈 객체가 바로 클래스가 생성한 인스턴스
// 이때 클래스가 생성한 인스턴스의 프로토타입으로 클래스의 prototype 프로퍼티가 가리키는 객체가 설정된다.
// 암묵적으로 생성된 빈 객체, 즉 인스턴스는 this에 바인딩된다.
// 따라서 constructor 내부의 this는 클래스가 생성한 인스턴스를 가리킨다.

// 2. 인스턴스 초기화
// constructor의 내부 코드가 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.
// 즉, this에 바인딩 되어 있는 인스턴스에 프로퍼티를 추가하고 constructor가 인수로 전달받은 초기값으로 인스턴스의 프로퍼티 값을 초기화한다.

// 3. 인스턴스 반환
// 클래스의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.

// 25-32
class Person {
  // 생성자
  constructor(name) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Person {}
    console.log(Object.getPrototypeOf(this) === Person.prototype); // true

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.name = name;

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  }
}