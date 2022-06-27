// 20.4 함수 단위로 strict mode를 적용하는 것도 피하자
// 20-07
(function () {
  // non-strict mode
  var let = 10; // 에러가 발생하지 않는다.
  function foo() {
    "use strict";

    let = 20; // SyntaxError: Unexpected strict mode reserved word
  }
  foo();
})();
