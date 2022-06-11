// 13.1 스코프란?
// 13-01
function add(x, y) {
  // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
  // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
  console.log(x, y); // 2 5
  return x + y;
}

add(2, 5);

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(x, y); // ReferenceError: x is not defined

// 13-02
var var1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수

if (true) {
  var var2 = 2; // 코드 블록 내에서 선언한 변수
  if (true) {
    var var3 = 3; // 중첩된 코드 불록 내에서 선언한 변수
  }
}

function foo() {
  var var4 = 4; // 함수 내에서 선언한 변수
  function bar() {
    var var5 = 5; //중첩된 함수 내에서 선언한 변수
  }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
// console.log(var4); // ReferenceError: var4 is not defined
// console.log(var5); // ReferenceError: var5 is not defined

// 13-03
var x = "global";

function foo() {
  var x = "local";
  console.log(x); // local
}

foo();

console.log(x); // global

// 식별자 결정 : 이름이 같은 두 개의 변수 중에서 어떤 변수를 참조해야 할 것인지를 결정해야하는 것

// var 키워드로 선언한 변수의 중복 선언
// 13-04
function foo() {
  var x = 1;
  // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 혀용한다.
  // 아래 변수 선언문은 자바스크립트 엔진에 의해  var 키워드가 없는 것처럼 동작한다.
  var x = 2;
  console.log(x); // 2
}
foo();

// 13-05
// let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선은을 허용하지 않는다.
function foo() {
  let x = 1;
  // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 혀용하지 않는다.
  let x = 2; // SyntaxError: Identifier 'x' has already been declared
}
foo();
