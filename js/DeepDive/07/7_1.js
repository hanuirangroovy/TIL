// 7.1 산술 연산자
// 07-02
5 + 2; // 7
5 - 2; // 3
5 * 2; // 10
5 / 2; // 2.5
5 % 2; // 1

// 07-03
var x = 1;
// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++; // x = x + 1;
console.log(x); // 2

// -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x--; // x = x - 1;
console.log(x); // 1

// 07-04
var x = 5,
  result;
// 선할당 후증가
result = x++;
console.log(result, x); // 5 6

// 선증가 후할당
result = ++x;
console.log(result, x); // 7 7

// 선할당 후감소
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당
result = --x;
console.log(result, x); // 5 5

// 07-05
// dkanfjs gyrhkrk djqtek.
+10; // 10
+-10; // -10

//07-06
var x = "1";

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1

// 부수 효과는 없다.
console.log(x); // "1"

// 불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x); // 1

// 부수 효과는 없다.
console.log(x); // true

// 불리언 값을 숫자로 타입 변환한다.
x = false;
console.log(+x); // 0

// 부수 효과는 없다.
console.log(x); // false

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = "Hello";
consolelog(+x); // NaN

// 부수 효과는 없다.
console.log(x); // "Hello"

// 07-07
// 부호를 반전한다.
-(-10); // 10

// 문자열을 숫자로 타입 변환한다.
-"10"; /// -10

// 불리언 값을 숫자로 타입 변환한다.
-true; // -1

// 문자열은 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
-"Hello"; //NaN

// 07-08
// 문자열 연결 연산자
"1" + 2; // 12
1 + "2"; // 12

// 산술 연산자
1 + 2; // 3

// true는 1로 타입 변환된다.
1 + true; // 2

// false는 0으로 타입 변환된다.
1 + false; // 1

// null은 0으로 타입 변환된다.
1 + null; // 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // NaN
1 + undefined; // NaN
