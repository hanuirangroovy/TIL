// 20.2 strict mode 적용
// strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict'; 추가

// 20-02
// "use strict";
// function foo() {
//   x = 10; // ReferenceError: x is not defined
// }
// foo();

// 20-03
// function foo() {
//   "use strict";

//   x = 10; // ReferenceError: x is not defined
// }
// foo();

// 20-04
function foo() {
  x = 10;
  ("use strict");
}
foo();
