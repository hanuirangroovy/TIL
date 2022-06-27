// 20.5 strict mode가 발생시키느 ㄴ에러
// 20.5.1 암묵적 전역
// 선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.
// 20-08
// (function () {
//   "use strict";

//   x = 1;
//   console.log(x); // ReferenceError: x is not defined
// })();

// 20.5.2 변수, 함수, 매개변수의 삭제
// delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.
// 20-09
// (function () {
//   "use strict";

//   var x = 1;
//   delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.

//   function foo(a) {
//     delete a; // SyntaxError: Delete of an unqualified identifier in strict mode.
//   }
//   delete foo; // SyntaxError: Delete of an unqualified identifier in strict mode.
// })();

// 20.5.3 매개변수 이름의 중복
// 중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.
// 20-10
// (function () {
//   "use strict";

//   // SyntaxError: Duplicate parameter name not allowed in this context
//   function foo(x, x) {
//     return x + x;
//   }
//   console.group(foo(1, 2));
// })();

// 20.5.4 with 문의 사용
// with 문을 사용하면 SyntaxError가 발생한다.
// 20-11
(function () {
  "use strict";

  // SyntaxError: Strict mode code may not include a with statement
  with ({ x: 1 }) {
    console.log(x);
  }
})();
