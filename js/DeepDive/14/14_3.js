// 14.3 전역 변수의 사용을 억제하는 방법
// 전역변수를 반드시 사용해야 할 이유를 찾지 못했다면 지역변수를 사용해야한다.
// 변수의 스코프는 좁으면 좁을수록 좋다.

// 14.3.1 즉시 실행 함수
// 14-04
// 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.
(function () {
  var foo = 10; // 즉시 실행 함수의 지역 변수
})();

// console.log(foo); // ReferenceError: foo is not defined

// 14.3.2 네임스페이스 객체
// 14-05
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name = "Lee";

console.log(MYAPP.name); // Lee

// 14-06
// 네임스페이스 객체에 또 다른 네임 스페이스 객체를 프로퍼티로 추가 -> 네임스페이스를 계층적으로 구성
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.person = {
  name: "Lee",
  address: "Seoul",
};

console.log(MYAPP.person.name); // Lee

// 14.3.3 모듈 패턴
// 모듈패턴: 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만듦.
// 캡슐화: 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작 메서드를 하나로 묶는 것.
// 정보은닉: 캡슐화를 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하는 것
// 14-07
var Counter = (function () {
  // private 변수
  var num = 0;

  // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

// private 변수는 외부로 노출되지 않는다.

console.log(Counter.num); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0

// 외부로 노출하고 싶지 않은 변수나 함수는 반환하는 객체에 추가하지 않으면 외부에서 접근할 수 없는 프라이빗 멤버가 된다.

// 14.3.4 ES6 모듈
// ES6 모듈을 사용하면 더는 전역 변수를 사용할 수 없다.
// ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다.
// 14-08
// <script type="module" src="lib.mjs"></script>
// <script type="module" src="app.mjs"></script>
