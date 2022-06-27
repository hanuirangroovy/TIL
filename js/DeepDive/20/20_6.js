// 20.6 strict mode 적용에 의한 변화
// 20.6.1 일반 함수의 this
// strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다.
// 20-12
(function () {
  "use strict";

  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this); // Foo {}
  }
  new Foo();
})();

// 20.6.2 arguments 객체
// strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.
// 20-13
(function (a) {
  "use strict";
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2;

  // 변경된 인수가 arguments 객체에 반영되지 않는다.
  console.log(arguments); // [Arguments] { '0': 1 }
})(1);
