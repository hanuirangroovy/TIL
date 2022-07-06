// 25.4 인스턴스 생성

// 클래스는 생성자 함수이며 new 연산자와 함께 호출되어 인스턴스를 생성한다.
// 25-08
class Person {}

// 인스턴스 생성
const me = new Person();
console.log(me); // Person {}

// 클래서는 인스턴스를 생성하는 것이 유일한 존재 이유이므로 반드시 new 연산자와 함께 호출해야 한다.
// 25-09
class Person2 {}
// 클래스를 new 연산자 없이 호출하면 타입 에러가 발생한다.
// const me2 = Person2(); // TypeError: Class constructor Person2 cannot be invoked without 'new'

// 클래스 표현식으로 정의된 클래스의 경우 클래스를 가리키는 식별자를 사용해 인스턴스를 생성하지 않고 기명 클래스 표현식의 클래스 이름을 사용해 인스턴스를 생성하면 에러가 발생한다.
// 25-10
const Person3 = class MyClass {};

// 함수 표현식과 마찬가지로 클래스를 가리키는 식별자로 인스턴스를 생성해야 한다.
const me3 = new Person3();

// 클래스 이름 MyClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자다.
// console.log(Myclass); // ReferenceError: Myclass is not defined

const you = new MyClass(); // ReferenceError: Myclass is not defined

// 클래스 표현식에서 사용한 클래스 이름은 외부 코드에서 접근 불가능하다.
