// 26.4 Rest 파라미터
// 26.4.1 기본 문법
// Rest 파라미터는 매개변수 이름 앞에 세개의 점 ...을 붙여서 정의한 매개변수를 의미한다.
// Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

// 26-49
function foo(...rest) {
  // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

// 일반 매개변수와 Rest 파라미터는 함께 사용할 수 있다.
// 이때 함수에 전달된 인수들은 매개변수와 Rest 파라미터에 순차적으로 할당된다.

// 26-50
function foo50(param, ...rest) {
  console.log(param); // 1
  console.log(rest); // [ 2, 3, 4, 5 ]
}

foo50(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest); // [ 3, 4, 5 ]
}

bar(1, 2, 3, 4, 5);

// Rest 파라미터는 이름 그대로 먼저 선언된 매개변수에 할당된 인수를 제외한 나머지 인수들로 구성된 배열이 할당된다.
// 따라서 Rest 파라미터는 반드시 마지막 파라미터이어야 한다.

// 26-51
// function foo51(...rest, param1, param2) { }

// foo51(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter

// Rest 파라미터는 단 하나만 선언할 수 있따.
// 26-52
// function foo52(...rest1, ...rest2) { }

// foo52(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter

// Rest 파라미터는 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.

// 26-53
function foo53(...rest) {}
console.log(foo53.length); // 0

function bar53(x, ...rest) {}
console.log(bar53.length); // 1

function baz(x, y, ...rest) {}
console.log(baz.length); // 2

// 26.4.1 Rest 파라미터와 arguments 객체

// 26-54
// 매개변수의 개수를 사전에 알 수 없는 가변 인자 함수
function sum54() {
  // 가변 인자 함수는 arguments 객체를 토앻 인수를 전달받는다.
  console.log(arguments);
}

sum54(1, 2); // [Arguments] { '0': 1, '1': 2 }

// 26-55
function sum55() {
  // 유사 배열 객체인 arguments 객체를 배열로 변환한다.
  var array = Array.prototype.slice.call(arguments);

  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum55(1, 2, 3, 4, 5)); // 15

// 26-56
function sum56(...args) {
  // Rest 파라미터 args에는 배열 [1, 2, 3, 4, 5]가 할당된다.
  return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum56(1, 2, 3, 4, 5)); // 15
