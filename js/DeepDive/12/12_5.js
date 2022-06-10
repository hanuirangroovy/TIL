// 12.5 함수 호출
// 12.5.1 매개변수와 인수
// 12-16
// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 호출
// 인수1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1, 2);

// 12-17
function add2(x, y) {
  console.log(x, y); // 2 5
  return x + y;
}

add2(2, 5);

// add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(x, y); // ReferenceError: x is not defined

// 12-18
function add3(x, y) {
  return x + y;
}

console.log(add3(2)); // NaN -> 매개변수 y는 undefined로 초기화된 상태로 2 + undefined와 같음

// 12-19
function add4(x, y) {
  return x + y;
}

console.log(add4(2, 5, 10)); // 7

// 12-20
function add5(x, y) {
  console.log(arguments);
  // [Arguments] { '0': 2, '1': 5, '2': 10 }

  return x + y;
}

console.log(add5(2, 5, 10)); // 7

// 12.5.2 인수 확인
// 12-21
function add6(x, y) {
  return x + y;
}

// 12-22
function add7(x, y) {
  return x + y;
}

console.log(add(2)); // NaN
console.log(add("a", "b")); // 'ab'

// 12-23
function add8(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다.
    throw new TypeError("인수는 모두 숫자 값이어야 합니다.");
  }
  return x + y;
}

// console.log(add8(2)); // TypeError: 인수는 모두 숫자 값이어야 합니다.
// console.log(add8("a" + "b")); // TypeError: 인수는 모두 숫자 값이어야 합니다.

// 12-24
function add9(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(add9(1, 2, 3)); // 6
console.log(add9(1, 2)); // 3
console.log(add9(1)); // 1
console.log(add9()); // 0

// 12-25
function add10(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add10(1, 2, 3)); // 6
console.log(add10(1, 2)); // 3
console.log(add10(1)); // 1
console.log(add10()); // 0

// 12.5.3 매개변수의 최대 개수
// 12-26
// $.ajax({
//   method: "POST",
//   url: "/user",
//   data: { id: 1, name: "Lee" },
//   cache: false,
// });

// 12.5.4 반환문
// 12-27
function multiply(x, y) {
  return x * y; // 반환문
}

// 함수 호출은 반환값으로 평가된다.
var result = multiply(3, 5);
console.log(result); // 15

// 12-28
function multiply2(x, y) {
  return x * y; // 반환문
  // 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된ㄷ.ㅏㅏ
  console.log("실행되지 않는다.");
}

console.log(multiply(3, 5)); // 15

// 12-29
function foo() {
  return;
}

console.log(foo()); // undefined

// 12-30
function foo2() {
  // 반환문을 생략하면 암묵적으로 undefined가 반환된다.
}

console.log(foo2()); // undefined

// 12-31
// function multiply3(x, y) {
//   // return 키워드와 반환값 사이에 줄바꿈이 있으면
//   return // 세미콜론 자동 삽입 기능(ASI)에 의해 세미콜론이 추가된다.
//   x * y; // 무시된다.
// }

function multiply3(x, y) {
  // return 키워드와 반환값 사이에 줄바꿈이 있으면
  return; // 세미콜론 자동 삽입 기능(ASI)에 의해 세미콜론이 추가된다.
  x * y; // 무시된다.
}

console.log(multiply3(3, 5));

// // 12-32
// <!DOCTYPE html>
// <html>
// <body>
//   <script>
//     return; // SyntaxError: Illegal return statement
//   </script>
// </body>
// </html>
