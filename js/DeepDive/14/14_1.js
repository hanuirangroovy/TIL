// 14.1 변수의 생명 주기
// 14.1.1 지역 변수의 생명 주기
// 전역 변수의 생명주기는 애플리케이션의 생명 주기와 같음.
// 함수 내부에서 선언된 지역 변수는 함수가 호출되면 생성되고 함수가 종료하면 소멸.

// 14-01
function foo() {
  var x = "local";
  console.log(x); // local
  return x;
}

foo();
// console.log(x); // ReferenceError: x is not defined

// 14-02
var x = "global";

function foo() {
  console.log(x); // undefined
  var x = "local";
}

foo();
console.log(x); // global

// 호이스팅은 변수 선언이 스코프의 선두로 끌어 올려진 것처럼 작동하는 자바스크립트의 고유특징

// 14.1.2 전역 분수의 생명 주기
// var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명 주기와 일치한다.
