// 클래스 호이스팅

// 25-05
// 클래스 선언문
class Person {}

console.log(typeof Person); // function

// 클래스는 클래스 정의 이전에 참조할 수 없다.
// 25-06
// console.log(Person2); // ReferenceError: Cannot access 'Person2' before initialization

// 클래스 선언문
class Person2 {}

// 클래스 선언문은 마치 호이스팅이 발생하지 않는 것처럼 보이나 그렇지 않다.
// 25-07
const Person3 = " ";
{
  // 호이스팅이 발생하지 않는다면 ' '이 출력되어야 한다.
  console.log(Person3); // ReferenceError: Cannot access 'Person3' before initialization

  // 클래스 선언문
  class Person3 {}
}

// 클래스 선언문도 변수 선언, 함수 정의와 마찬가지로 호이스팅이 발생한다.
// 단, 클래스는 let, const 키워드로 선언한 변수처럼 호이스팅된다.
// 따라서 클래스 선언문 이전에 일시적 사각지대에 빠지기 때문에 호이스팅이 발생하지 않는 것처럼 동작한다.

// var, let, const, function, function*, class 키워드를 사용하여 선언된 모든 식별자는 호이스팅된다. 모든 선언문은 런타임 이전에 먼저 실행되기 때문이다.
