// 7.4 삼항 조건 연산자
// 조건식? 조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값

// 07-21
var x = 2;

// 2 % 2 는 0이고 0은 false로 암묵적 타입 변환을 한다.
var result = x % 2 ? "홀수" : "짝수";

console.log(result); // 짝수

// 07-22
var x = 2,
  result;

// 2 % 2 는 0이고 0은 false로 암묵적 타입 변환을 한다.
if (x % 2) result = "홀수";
else result = "짝수";

console.log(result); // 짝수

// 07-23
var x = 10;

// if ... else 문은 표현식이 아닌 문이다. 따라서 값처럼 사용할 수 없다.
// var result = if (x % 2) {result = '홀수';} else {result = '짝수';};
// SyntaxError: Unexpected token 'if'

// 07-24
var x = 10;

// 삼항 조건 연산자 표현식은 표현식인 문이다. 따라서 값처럼 사용할 수 있다.
var result = x % 2 ? "홀수" : "짝수";
console.log(result); // 짝수
