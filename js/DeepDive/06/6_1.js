// 6.1 숫자타입

// 06-01
// 모두 숫자 타입이다.
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

// 06-02
var binary = 0b01000001; //2진수
var octal = 0o101; //16진수
var hex = 0x41; //16진수

console.log(binary);
console.log(octal);
console.log(hex);
console.log(binary === octal);
console.log(octal === hex);

// 65
// 65
// 65
// true
// true

// 06-03
// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0);
console.log(4 / 2);
console.log(3 / 2);

// true
// 2
// 1.5

// 06-04
// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0);
console.log(10 / -0);
console.log(1 * "String");

// Infinity
// -Infinity
// NaN

// 06-05
// 자바스크립트는 대소문자를 구별한다.
var x = nan; // ReferenceError: nan is not defined
