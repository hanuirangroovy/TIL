// 21.4 전역 객체
// 전역 객체: 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체. 어떤 객체에도 속하지 않은 최상위 객체

// globalThis: 브라우저 환경과 Node.js 환경에서 전역 객체를 가리키던 다양한 식별자를 통일한 식별자
// 21-08
// 브라우저 환경
// globalThis === this; // true
// globalThis === window; // true
// globalThis === self; // true
// globalThis === frames; // true

// Node.js 환경
globalThis === this; // true
globalThis === global; // true

// 전역 객체는 개발자가 의도적으로 생성할 수 없다. 즉, 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다.
// 전역 객체의 프로퍼티를 참조할 때 window(또는 global)를 생략할 수 있다.

// 21-09
// 문자열 'F'를 16진수로 해석하여 10진수로 변환하여 반환한다.
// window.parseInt("F", 16); // 15
// window.parseInt는 parseInt로 호출할 수 있다.
// parseInt('F', 16); // 15
// window.parseInt === parseInt; // true

// 전역 객체는 Object, String, Number, Boolean, Function, Array, RegExp, Date, Math, Promise 같은 모든 표준 빌트인 객체를 프로퍼티로 가지고 있다.
// 자바스크립트 실행 환경에 따라 추가적으로 프로퍼티와 메서드를 갖는다.
// var 키워드로 선언한 전역 변수와 선언하지 않은 변수에 값을 할당한 암묵적 전역, 그리고 전역 함수는 전역 객체의 프로퍼티가 된다.

// 21-10
// var 키워드로 선언한 전역 변수
// var foo = 1;
// console.log(window.foo); // 1

// 선언하지 않은 변수에 값을 암묵적 전역. bar은 전역 변수가 아니라 전역 객체의 프로퍼티다.
// bar = 2;
// console.log(window.bar); // 2

// 전역함수
// function baz() {return 3;}
// console.log(window.baz()); // 3

// let이나 const 키워드로 선언한 전역변수는 전역 객체의 프로퍼티가 아니다. 즉, window.foo와 같이 접근할 수 없다. let이나 const 키워드로 선언한 전역 변수는 보이지 않는 개념적인 블록 내에 존재하게 된다.

// 21-11
// let foo = 123;
// console.log(window.foo); // undefined

// 브라우저 환경의 모든 자바스크립트 코드는 하나의 전역 객체 window를 공유한다. 여러 개의 script 태그를 통해 자바스크립트 코드를 분리해도 하나의 전역 객체 window를 공유하는 것은 변함이 없다.
// 이는 분리되어 있는 자바스크립트 코드가 하나의 전역을 공유한다는 의미이다.

// 12.4.1
// 빌트인 전역 프로퍼티: 전역 객체의 프로퍼티

// Infinity프로퍼티는 무한대를 나타내는 숫자값 Infinity를 갖는다.
// 21-12
// 전역 프로퍼티는 window를 생략하고 참조할 수 있다.
// console.log(window.Infinity === Infinity); // true

// 양의 무한대
console.log(3 / 0); // Infinity

// 음의 무한대
console.log(-3 / 0); // -Infinity

// Infinity는 숫자값이다.
console.log(typeof Infinity); // number

// NaN 프로퍼티는 숫자가 아님을 나타내는 숫자값 NaN을 갖는다. NaN 프로퍼티는 Number.NaN 프로퍼티와 같다.
// 21-13
// console.log(window.NaN); // NaN

console.log(Number("xyz")); // NaN
console.log(1 * "string"); // NaN
console.log(typeof NaN); // number

// undefined 프로퍼티는 원시 타입 undefined를 값으로 갖는다.
// 21-14
// console.log(window.undefined); // undefined

var foo;
console.log(foo); // undefined
console.log(typeof undefined); // undefined

// 21.4.2 빌트인 전역 함수
// 빌트인 전역 함수: 애플리케이션 전역에서 호출할 수 있는 빌트인 함수로서 전역 객체의 메서드다.

// eval 함수: 자바스크립트 코드를 나타내는 문자열을 인수로 전달받는다.
// 전달받은 문자열 코드가 표현식이라면 eval 함수는 문자열 코드를 런타임에 평가하여 값을 생성
// 전달받은 인수가 표현식이 아닌 문이라면 eval 함수는 문자열 코드를 런타임에 실행
// 문자열 코드가 여러 개의 문으로 이루어져 있다면 모든 문을 실행

// 21-15
// 표현식인 문
eval("1 + 2;"); // 3
// 표현식이 아닌 문
eval("var x = 5;"); // undefined

// eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언되었다.
console.log(x); // 5

// 객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval("({ a: 1 })");
console.log(o); // { a: 1 }

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval("(function() {return 1;})");
console.log(f()); // 1

// 인수로 전달받은 문자열 코드가 여러 개의 문으로 이루어져 있다면 모든 문을 실행한 다음, 마지막 결과값을 반환한다.
// 21-16
eval("1 + 2; 3 + 4;");

// eval 함수는 자신이 노출된 위치에 해당하는 기존의 스코프를 런타임에 동적으로 수정한다.
// 21-17
const x1 = 1;

function foo() {
  // eval 함수는 런타임에 foo 함수의 스코프를 동적으로 수정한다.
  eval("var x1 = 2;");
  console.log(x1); // 2
}

foo();
console.log(x1); // 1

// strict mode에서 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다.
// 21-18
const x2 = 1;

function foo1() {
  "use strict";

  // strict mode에서 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다.
  eval("var x2 = 2; console.log(x2);"); // 2
  console.log(x2); // 1
}

foo1();
console.log(x2); // 1

// 인수로 전달받은 문자열 코드가 let, const 키워드로 사용한 변수 선언문이라면 암묵적으로 strict mode가 적용된다.
// 21-19
const x3 = 1;

function foo2() {
  eval("var x3 = 2; console.log(x3);"); // 2
  // let, const 키워드를 사용한 변수 선언문은 strict mode가 적용된다.
  eval("const x3 = 3; console.log(x3);"); // 3
  console.log(x3); // 2
}

foo2();
console.log(x3); // 1

// isFinite: 전달받은 인수가 정상적인 유한수인지 검사
// 유한수이면 true를 반환하고, 무한수이면 false를 반환
// 전달받은 인수의 타입이 숫자가 아닌 경우, 숫자로 타입을 변환한 후 검사를 수행한다. 이때 인수가 NaN으로 평가되는 값이라면 false를 반환한다.
// 21-20
// 인수가 유한수이면 true를 반환한다.
isFinite(0); // true
isFinite(2e64); // true
isFinite("10"); // true
isFinite(null); // true

// 인수가 무한수 또는 NaN으로 평가되는 값이라면 false를 반환한다.
isFinite(Infinity); // false
isFinite(-Infinity); // false

// 인수가 NaN으로 평가되는 값이라면 false를 반환한다.
isFinite(NaN); // false
isFinite("Hello"); // false
isFinite("2005/12/12"); // false

// isFinite(null)은 true를 반환. null을 숫자로 변환하여 검사 수행. null을 숫자 타입으로 변환하면 0이 된다.
// 21-21
console.log(+null); // 0

// isNaN: 전달받은 인수가 NaN인지 검사하여 그 결과를 불리언 타입으로 반환. 전달받은 인수의 타입이 숫자가 아닌 경우 숫자로 타입을 변환한 후 검사 수행.
// 21-22
// 숫자
isNaN(NaN); // true
isNaN(10); // false

// 문자열
isNaN("blabla"); // true
isNaN("10"); // false
isNaN("10.12"); // false
isNaN(""); // false
isNaN(" "); // false

// 불리언
isNaN(true); // false
isNaN(null); // false

// undefined
isNaN(undefined); // true

// 객체
isNaN({}); // true

// date
isNaN(new Date()); // false
isNaN(new Date().toString()); // true

// parseFloat: 전달받은 문자열 인수를 부동 소수점 숫자, 즉 실수로 해석하여 반환
// 21-23
// 문자열을 실수로 해석하여 반환한다.
parseFloat("3.14"); // 3.14
parseFloat("10.00"); // 10

// 공백으로 구분된 문자열은 첫 번째 문자열만 반환한다.
parseFloat("34 45 66"); // 34
parseFloat("40 years"); // 40

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
parseFloat("he was 40"); // NaN

// 앞뒤 공백은 무시된다.
parseFloat(" 60 "); // 60

// parseInt: 전달받은 문자열 인수를 정수로 해석하여 반환한다.
// 21-24
// 문자열을 정수로 해석하여 반환한다.
parseInt("10"); // 10
parseInt(10.123); // 10

// 전달받은 인수가 문자열이 아니면 문자열로 변환한 다음, 정수로 해석하여 변환한다.
// 21-25
parseInt(10); // 10
parseInt(10.123); // 10

// 두 번째 진수로 진법을 나타내는 기수(2~36)을 전달할 수 있다.
// 기수를 지정하면 첫 번째 인수로 전달된 문자열을 해당 기수의 숫자로 해석하여 반환한다. 이때 반환값은 언제느 10진수다.
// 21-26
// '10'을 10진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt("10"); // 10

// '10'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt("10", 2); // 2

// '10'을 8진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt("10", 8); // 8

// '10'을 16진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt("10", 16); // 16

// 기수를 지정하여 10진수 숫자를 해당 기수의 문자열로 변환하여 반환하고 싶을 때는 Number.prototype.toString 메서드를 사용한다.
// 21-27
const x4 = 15;

// 10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환한다.
x4.toString(2); // '1111'
// 문자열 '1111'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt(x4.toString(2), 2); // 15

// 10진수 15를 8진수로 변환하여 그 결과를 문자열로 반환한다.
x4.toString(8); // '17'
// 문자열 '17'을 8진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt(x4.toString(8), 8); // 15

// 10진수 15를 16진수로 변환하여 그 결과를 문자열로 반환한다.
x4.toString(16); // 'f'
// 문자열 'f'를 16진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt(x4.toString(16), 16); // 15

// 숫자값을 문자열로 변환한다.
x4.toString(); // 15
// 문자열 '15'를 10진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt(x4.toString()); // 15

// 두 번째 인수로 진법을 나타내는 기수를 지정하지 않더라도 첫 번째 인수로 전달된 문자열이 '0x' 또는 '0X'로 시작하는 16진수 리터럴이라면 16진수로 해석하여 10진수 정수로 반환한다.
// 21-28
// 16진수 리터럴 '0xf'를 16진수로 해석하고 10진수 정수로 그 결과를 반환한다.
parseInt("0xf"); // 15
// 위 코드와 같다.
parseInt("f", 16); // 15

// 하지만 2진수 리터럴과 8진수 리터럴은 제대로 해석하지 못한다.
// 21-29
// 2진수 리터럴(0b로 시작)은 제대로 해석하지 못한다. 0 이후가 무시된다.
parseInt("0b10"); // 0
// 8진수 리터럴은 제대로 해석하지 못한다. 0 이후가 무시된다.
parseInt("0o10"); // 0

// 21-30
// 문자열 '10'을 2진수로 해석한다.
parseInt("10", 2); // 2

// 문자열 '10'을 8진수로 해석한다.
parseInt("10", 8); // 8

// 첫 번째 인수로 전달한 문자열의 첫 번째 문자가 해당 지수의 숫자로 변환될 수 없다면 NaN을 반환한다.
// 21-31
// 'A'는 10진수로 해석할 수 없다.
parseInt("A0"); // NaN

// '2'는 2진수로 해석할 수 없다.
parseInt("20", 2); // NaN

// 첫 번째 인수로 전달한 문자열의 두 번째 문자부터 해당 진수를 나타내는 숫자가 아닌 문자와 마주치면 이 문자와 계속되는 문자들은 전부 무시되며 해석된 정수값만 반환한다.
// 21-32
// 10진수로 해석할 수 없는 'A' 이후의 문자는 모두 무시된다.
parseInt("1A0"); // 1
// 2진수로 해석할 수 없는 '2' 이후의 문자는 모두 무시된다.
parseInt("102", 2); // 2
// 8진수로 해석할 수 없는 '8' 이후의 문자는 모두 무시된다.
parseInt("58", 8); // 5
// 16진수로 해석할 수 없는 'G' 이후의 문자는 모두 무시된다.
parseInt("FG", 16); // 16

// 첫 번째 인수로 전달한 문자열에 공백이 있다면 첫 번째 문자열만 해석하여 반환하며 앞뒤 공백은 무시된다. 만일 첫 번째 문자열을 숫자로 해석할 수 없는 경우 NaN을 반환한다.
// 21-33
// 공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
parseInt("34 45 66"); // 34
parseInt("40 years"); // 40

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
parseInt("He was 40"); // NaN

// 앞뒤 공백은 무시된다.
parseInt(" 60 "); // 60

// encodeURI / decodeURI
// encodeURI 함수: 완전한 URI를 문자열로 전닯다아 이스케이프 처리를 위해 인코딩한다.
// decodeURI 함수: 인코딩된 URI를 인수로 전달받아 이스케이프 처리 이전으로 디코딩한다.

// 인코딩: URI 문자들을 이스케이프 처리하는 것
// 이스케이프 처리: 네트워크를 통해 정보르 ㄹ공유할 때 어떤 시스템에서도 읽을 수 있는 아스키 문자 셋으로 변환하는 것

// 21-34
const uri = "http://example.com?name=이웅모&job=programmer&teacher";

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc); // http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

// 21-35
const dec = decodeURI(enc);
console.log(dec); // http://example.com?name=이웅모&job=programmer&teacher

// encodeURIComponent / decodeURIComponent
// encodeURIComponent: URI 구성요소를 인수로 전달받아 인코딩. 인수로 전달된 문자열을 URI의 구성요소인 쿼리 스트링의 일부로 간주. 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &까지 인코딩
// 12-36
// URI의 쿼리 스트링
const uriComp = "name=이웅모&job=programmer&teacher";

// encodeURIComponent 함수는 인수로 전달받은 문자열을 URI의 구성요소인 쿼리 스트링의 일부로 간주한다.
// 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &까지 인코딩한다.
let enc1 = encodeURIComponent(uriComp);
console.log(enc1); // name%3D%EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher

let dec1 = decodeURIComponent(enc1);
console.log(dec1); // name=이웅모&job=programmer&teacher

// encodeURI 함수는 인수로 전달받은 문자열을 완전한 URI로 간주한다.
// 따라서 쿼리 스트리이 구분자로 사용되는 =, ?, &를 인코딩하지 않는다.
enc1 = encodeURI(uriComp);
console.log(enc1); // name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

dec1 = decodeURI(enc1);
console.log(dec1); // name=이웅모&job=programmer&teacher

// 21.4.3 암묵적 전역
// 21-37
var x5 = 10; // 전역 변수

function foo3() {
  // 선언하지 않은 식별자에 값을 할당
  y5 = 20;
}
foo3();

// 선언하지 않은 식별자 y5를 전역에서 참조할 수 있다.
console.log(x5 + y5); // 30

// 암묵적 전역: y5=20을 window.y=20으로 해석하여 전역 객체에 프 로퍼티를 동적 생성. 결국 y5는 전역 객체의 프로퍼티가 되어 마치 전역 변수처럼 동작

// 21-38
// 전역 변수 x6는 호이스팅이 발생한다.
console.log(x6); // undefined
// 전역 변수가 아니라 단지 전역 객체의 프로퍼티인 y6는 호이스팅이 발생하지 않는다.
// console.log(y6); // ReferenceError: y6 is not defined

var x6 = 10; // 전역 변수

function foo4() {
  // 선언하지 않은 식별자에 값을 할당
  y6 = 20; // window.y6 = 20;
}

foo4();

// 선언하지 않은 식별자 y6를 전역에서 참조할 수 있다.
console.log(x6 + y6); // 30

// 변수가 아니라 단지 프로퍼티인 y6는 delete 연산자로 삭제할 수 있다. 전역 변수는 프로퍼티이지만 delete 연산자로 삭제할 수 없다.
// 21-39
console.log(x6); // 10
console.log(y6); // 20

delete x6; // 전역 변수는 삭제되지 않는다.
delete y6; // 프로퍼티는 삭제된다.

// console.log(window.x6); // 10
// console.log(window.y6); // undefined
