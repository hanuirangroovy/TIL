// 15.2 let 키워드

// 15.2.1 변수 중복 선언 금지
// 15-05
var foo = 123;
// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var foo = 456;

let bar = 123;
// let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
// let bar = 456; // SyntaxError: Identifier 'bar' has already been declared

// 15.2.2 블록 레벨 스코프
// 15-06
let foo2 = 1; // 전역 변수

{
  let foo2 = 2; // 지역 변수
  let bar2 = 3; // 지역 변수
}

console.log(foo2); // 1
// console.log(bar2); // ReferenceError: bar2 is not defined

// 15.2.3 변수 호이스팅
// 15-07
// console.log(foo3); // ReferenceError: Cannot access 'foo3' before initialization
// let foo3;

// 15-08
// var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행된다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.
console.log(foo3); // undefined

var foo3;
console.log(foo3); // undefined

foo3 = 1;
console.log(foo3); // 1

// 15-09
// 런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않았다.
// 초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다.
// console.log(foo4); // ReferenceError: Cannot access 'foo4' before initialization

let foo4; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo4); // undefined

foo4 = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo4); // 1

// 15-10
let foo5 = 1; // 전역 변수

{
  //  console.log(foo5); // ReferenceError: Cannot access 'foo5' before initialization
  let foo5 = 2; // 지역 변수
}

// 15.2.4 전역 객체와 let
// 15-11
// // 이 예제는 브라우저 환경에서 실행해야 한다.

// // 전역 변수
// var x = 1;
// // 암묵적 전역
// y = 2;
// // 전역 함수
// function foo6() {}

// // var6 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
// console.log(window.x); // 1
// // 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
// console.log(x); // 1

// // 암묵적 전역은 전역 객체 window의 프로퍼티다.
// console.log(window.y); // 2
// console.log(y); // 2

// // 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다.
// console.log(window.foo6); // f foo() {}
// // 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
// console.log(foo6); // f foo() {}

// 15-12
// // 이 예제는 브라우저 환경에서 실행해야 한다.
// let x1 = 1;

// // let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
// console.log(window.x1); // undefined
// console.log(x1); // 1
