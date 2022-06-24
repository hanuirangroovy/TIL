// 19.8 오버라이딩과 프로퍼티 섀도잉

// 19-36
const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  // 생성자 함수를 반환
  return Person;
})();

const me = new Person("Lee");

// 인스턴스 메서드
me.sayHello = function () {
  console.log(`Hey! My name is ${this.name}`);
};

// 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
me.sayHello(); // Hey! My name is Lee

// 오버라이딩: 상위 클래스가 가지고 이는 메서드를 하위 클래스가 재정의하여 사용하는 방식
// 오버로딩: 함수의 이름은 동일하지만 매개변수의 타입 또는 개수가 다른 메서드를 구현하고 매개변수에 의해 메서드를 구별하여 호출하는 방식

// 19-37
// 인스턴스 메서드를 삭제한다.
delete me.sayHello;

// 인스턴스에는 sayHello  메서드가 없으므로 프로토타입 메서드가 호출된다.
me.sayHello(); // Hi! My name is Lee

// 프로토타입 메서드가 아닌 인스턴스 메서드 sayHello가 삭제

// 19-38
// 프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않는다.
delete me.sayHello;

// 프로토타입 메서드가 호출된다.
me.sayHello(); // Hi! My name is Lee

// 하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능.
// 하위객체를 통해 프로토타입에 get 액세스는 허용되나 set 액세스는 혀용X

// 19-39
// 프로토타입 메서드 변경
Person.prototype.sayHello = function () {
  console.log(`Hey! My name is ${this.name}`);
};
me.sayHello(); // Hey! My name is Lee

// 프로토타입 메서드 삭제
delete Person.prototype.sayHello;
me.sayHello(); // TypeError: me.sayHello is not a function
