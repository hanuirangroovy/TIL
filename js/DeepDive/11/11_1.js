// 11.1 원시 값
// 11.1.1 변경 불가능한 값
// 11-01
// const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.

const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시 값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o); // { a: 1 }

// 11.1.2 문자열과 불변성
// 11-02
// 문자열은 0개 이상의 문자로 이뤄진 집합이다.
var str1 = ""; // 0 개의 문자로 이뤄진 문자열(빈 문자열)
var str2 = "Hello"; // 5개의 문자로 이뤄진 문자열

// 11-03
var str = "Hello";
str = "world";

// 11-04
var str4 = "string";

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
console.log(str4[0]); // s

// 원시 값인 문자열이 객체처럼 동작한다.
console.log(str4.length); // 6
console.log(str4.toUpperCase()); // STRING

// 11-05
var str5 = "string";

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
// 하지만 문자열은 원시 값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
str5[0] = "S";

console.log(str5); // string

// 11.1.3 값에 의한 전달
// 11-06
var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy); // 80

score = 100;

console.log(score); // 100
console.log(copy); // 80

// 11-07
var score1 = 80;

// copy1 변수에는 score1 변수의 값 80이 복사되어 할당된다.
var copy1 = score1;

console.log(score1, copy1); // 80 80
console.log(score1 === copy1); // true

// score1 변수와 copy1 변수의 값 80은 다른 메모리 공간에 저장된 별개의 값

// 11-08
var score2 = 80;

// copy2 변수에는 score2 변수의 값 80이 복사되어 할당된다.
var copy2 = score2;

console.log(score2, copy2); // 80 80
console.log(score2 === copy2); // true

score2 = 100;

console.log(score2, copy2); // 100 80
console.log(score2 === copy2); // false

// 11-09
var x = 10;

// 11-10
var copy = score;
