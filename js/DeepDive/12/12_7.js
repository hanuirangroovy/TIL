// 12.7 다양한 함수의 형태
// 12.7.1 즉시 실행 함수
// 12-34
// 익명 즉시 실행 함수
(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

// 12-35
// 기명 즉시 실행 함수
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
})();

// foo(); // ReferenceError: foo is not defined

// 즉시 실행 함수는 반드시 그룹 연산자 ()로 감싸야한다.
// 12-36
// 함수선언문의 형식에 맞지 않기에 에러 발생
// function () {
//     // ...
// }(); // SyntaxError: Function statements require a function name

// 12-37
// 세미콜론 자동 삽입 기능에 의해 함수 선언문이 끝나는 위치, 함수 코드 블록의 닫는 중괄호 뒤에 ;이 암묵적으로 추가되기 때문에 오류 발생
// function foo() {
//     // ...
// }(); // SyntaxError: Unexpected token ')'

// 12-38
// function foo() {}(); // function foo() {};();

// 12-39
// 그룹연산자에 피연산자가 없기 때문에 에러 발생
// (); // SyntaxError: Unexpected token ')'

// 12-40
console.log(typeof function f() {}); // function
console.log(typeof function () {}); // function

// 12-41
(function () {
  // ...
})();

(function () {
  // ...
})();

!(function () {
  // ...
})();

+(function () {
  // ...
})();

// 12-42
// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있따.
var res = (function () {
  var c = 3;
  var d = 5;
  return c * d;
})();

console.log(res); // 15

// 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
res2 = (function (e, f) {
  return e * f;
})(3, 5);

console.log(res2); // 15

// 12.7.2 재귀 함수
// 12-43
// 10부터 0까지 출력
function countdown(n) {
  for (var i = n; i >= 0; i--) console.log(i);
}

countdown(10);

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// 12-44
// 재귀함수 이용
function countdown2(n) {
  if (n < 0) return;
  console.log(n);
  countdown2(n - 1); // 재귀호출
}

countdown2(10);

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// 12-45
// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n-1) * n
function factorial(n) {
  // 탈출 조건 : n이 1이하일 때 재귀호출을 멈춘다.
  if (n <= 1) return 1;
  // 재귀 호출
  return n * factorial(n - 1);
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// 12-46
// 함수 표현식
var factorial = function foo(n) {
  // 탈출 조건: n이 1이하일 때 재귀 호출을 멈춘다.
  if (n <= 1) return 1;
  // 함수를 가리키는 식별자로 자기 자신을 재귀 호출
  return n * factorial(n - 1);

  // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
  // console.log(factorial === foo); //true
  // return n * foo(n-1);
};

console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

// 12-47
function factorial(n) {
  if (n <= 1) return 1;

  var res = n;
  while (--n) res *= n;
  return res;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// 12.7.3 중첩함수
// 중첩함수, 내부함수 : 함수 내부에 정의된 함수
// 외부함수 : 중첩 함수를 포함하는 함수

// 12-48
function outer() {
  var x = 1;

  // 중첩 함수
  function inner() {
    var y = 2;
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); // 3
  }

  inner();
}

outer();

// 12.7.4 콜백함수
// 12-49
// n만큼 어떤 일을 반복한다.
function repeat(n) {
  // i를 출력한다.
  for (var i = 0; i < n; i++) console.log(i);
}

repeat(5); // 0 1 2 3 4

// 12-50
// n만큼 어떤 일을 반복한다.
function repeat1(n) {
  // i를 출력한다.
  for (var i = 0; i < n; i++) console.log(i);
}

repeat1(5); // 0 1 2 3 4

// n만큼 어떤 일을 반복한다.
function repeat2(n) {
  for (var i = 0; i < n; i++) {
    // i가 홀수일 때만 출력한다.
    if (i % 2) console.log(i);
  }
}

repeat2(5); // 1 3

// 12-51
// 외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat3(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); // i를 전달하면서 f를 호출
  }
}

var logAll = function (i) {
  console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat3(5, logAll); // 0 1 2 3 4

var logOdds = function (i) {
  if (i % 2) console.log(i);
};

// 반복호출할 함수를 인수로 전달한다.
repeat3(5, logOdds); // 1 3

// 콜백 함수 : 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
// 고차 함수 : 매개 변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수

// 12-52
// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat3(5, function (i) {
  if (i % 2) console.log(i);
}); // 1 3

// 12-53
logOdds = function (i) {
  if (i % 2) console.log(i);
};

// 고차 함수에 함수 참조를 전달한다.
repeat3(5, logOdds); // 1 3

// 12-54
// 콜백 함수를 사용한 이벤트 처리
// myButton 버튼을 클릭하면 콜백 함수를 실행한다.

// document.getElementById("myButton").addEventListener("click", function () {
//   console.log("button clicked!");
// });

// 콜백 함수를 사용한 비동기 처리
// 1초 후에 메시지를 출력한다.
setTimeout(function () {
  console.log("1초 경과");
}, 1000);

// 12-55
// 콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
  return item * 2;
});

console.log(res); // [2, 4, 6]

// 콜백 함수를 사용하는 고차 함수 filter
var res = [1, 2, 3].filter(function (item) {
  return item % 2;
});

console.log(res); // [1, 3]

// 콜백 함수를 사용하는 고차 함수 reduce
var res = [1, 2, 3].reduce(function (acc, cur) {
  return acc + cur;
}, 0);

console.log(res); // 6

// 12.7.5 순수 함수와 바순수 함수
// 순수 함수 : 어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 즉 부수 효과가 없는 함수
// 비순수 함수 : 외부 상태에 의존하거나 외부 상태를 변경하는, 즉 부수 효과가 있는 함수
// 12-56
var count = 0; // 현재 카운트를 나타내는 상태

// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
  return ++n;
}

// 순수함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2

// 12-57
var count = 0; // 현재 카운트를 나타내는 상태 : increase 함수에 의해 변화한다.

// 비순수 함수
function increase() {
  return ++count; // 외부 상태에 의존하며 외부 상태를 변경한다.
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase();
console.log(count); // 1

increase();
console.log(count); // 2
