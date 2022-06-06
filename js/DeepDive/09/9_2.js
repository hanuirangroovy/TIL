// 9.2 암묵적 타입 변환

// 09-03
// 피연산자가 모두 문자열 타입이어야 하는 문맥
"10" + 2; // 102
console.log("10" + 2);

// 피연산자가 모두 숫자 타입이어야 하는 문맥
5 * "10"; // 50
console.log(5 * "10");

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0; // true
if (1) {
}

console.log(!0);

// 9.2.1 문자열 타입으로 변환
// 09-04
console.log(1 + "2"); // 12

// 09-05
`1 + 1 = ${1 + 1}`;
console.log(`1 + 1 = ${1 + 1}`); //1 + 1 = 2

// 09-06
// 숫자 타입
console.log(0 + "");
console.log(-0 + "");
console.log(1 + "");
console.log(-1 + "");
console.log(NaN + "");
console.log(Infinity + "");
console.log(-Infinity + "");

// 0
// 0
// 1
// -1
// NaN
// Infinity
// -Infinity

// 불리언 타입
console.log(true + "");
console.log(false + "");

// true
// false

// null 타입
console.log(null + ""); // null

// undefined 타입
console.log(undefined + ""); // undefined

// 심벌 타입
// console.log(Symbol() + ""); // TypeError: Cannot convert a Symbol value to a string

// 객체 타입
console.log({} + "");
console.log(Math + "");
console.log([] + "");
console.log([10, 20] + "");
console.log(function () {} + "");
console.log(Array + "");

// [object Object]
// [object Math]
//
// 10,20
// function () {}
// function Array() { [native code] }

// 9.2.2 숫자 타입으로 변환
// 09-07
console.log(1 - "1"); // 0
console.log(1 * "10"); // 10
console.log(1 / "one"); // NaN

// 09-08
console.log("1" > 0); // true

// 09-09
// 문자열 타입
console.log(+""); // 0
console.log(+"0"); // 0
console.log(+"1"); // 1
console.log(+"string"); // NaN

// 불리언 타입
console.log(+true); // 1
console.log(+false); // 0

// null 타입
console.log(+null); // 0

// undefined 타입
console.log(+undefined); // NaN

// 심벌 타입
// console.log(+Symbol()); // TypeError: Cannot convert a Symbol value to a number

// 객체 타입
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+[10, 20]); // NaN
console.log(+function () {}); // NaN

// 9.2.3 불리언 타입으로 변환
// 09-10
if ("") console.log(x);

// 09-11
if ("") console.log("1");
if (true) console.log("2");
if (0) console.log("3");
if ("str") console.log("4");
if (null) console.log("5");

// 2 4

// Falsy 값 - false, undefined, null, 0, -0, NaN, ''(빈 문자열)

// 09-12
// 아래의 조건문은 모두 코드 블록을 실행한다.
if (!false) console.log(false + " is falsy value");
if (!undefined) console.log(undefined + " is falsy value");
if (!null) console.log(null + " is falsy value");
if (!0) console.log(0 + " is falsy value");
if (!NaN) console.log(NaN + " is falsy value");
if (!"") console.log("" + " is falsy value");

// false is falsy value
// undefined is falsy value
// null is falsy value
// 0 is falsy value
// NaN is falsy value
//  is falsy value

// 09-13
// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
  return !v;
}

// 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v) {
  return !v;
}

// 모두 true를 반환한다.
console.log(isFalsy(false)); // true
console.log(isFalsy(undefined)); // true
console.log(isFalsy(null)); // true
console.log(isFalsy(0)); // true
console.log(isFalsy(NaN)); // true
console.log(isFalsy("")); // true

// 모두 true를 반환한다.
console.log(isTruthy(true)); // false
console.log(isTruthy("0")); // false
console.log(isTruthy({})); // false
console.log(isTruthy([])); // false
