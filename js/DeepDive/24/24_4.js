// 24.4 클로저의 활용
// 클로저는 상태를 안전하게 변경하고 유지하기 위해 사용한다.
// 상태를 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하기 위해 사용한다.

// 24-09
// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태를 1만큼 증가시킨다.
  return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3

// 위 예제가 바르게 동작하려면 다음의 전제 조건이 지켜져야 함
// 1. 카운트 상태(num 변수의 값)는 increase 함수가 호출되기 전까지 변경되지 않고 유지되어야 한다.
// 2. 이를 위해 카운트 상태(num 변수의 값)는 increase 함수만이 변경할 수 있어야 한다.

// 전역 변수 num을 increase 함수의 지역 변수로 바꾸어 의도치 않은 상태 변경 방지
// 24-10
// 카운트 상태 변경 함수
const increase10 = function () {
  // 카운트 상태 변수
  let num = 0;

  // 카운트 상태를 1만큼 증가시킨다.
  return ++num;
};

// 이전 상태를 유지하지 못한다.
console.log(increase10()); // 1
console.log(increase10()); // 1
console.log(increase10()); // 1

// 이전 상태를 유지할 수 있도록 클로저 사용
// 24-11
// 카운트 상태 변경 함수
const increase11 = (function () {
  // 카운트 상태 변수
  let num = 0;

  // 클로저
  return function () {
    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
  };
})();

console.log(increase11()); // 1
console.log(increase11()); // 2
console.log(increase11()); // 3

// 클로저는 상태가 의도치 않게 변경되지 않도록 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하고 상태를 아전하게 변경하고 유지하기 위해 사용한다.

// 카운트 상태를 감소시킬 수도 있도록 변경
// 24-12
const counter = (function () {
  // 카운트 상태 변수
  let num = 0;

  // 클로저인 메서드를 갖는 객체를 반환한다.
  // 객체 리터럴은 스코프를 만들지 않는다.
  // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다.
  return {
    // num: 0, // 프로퍼티는 public하므로 은닉되지 않는다.
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0

// 생성자 함수로 표현
// 24-13
const Counter = (function () {
  // 1. 카운트 상태 변수
  let num = 0;

  function Counter() {
    // this.num = 0; // 2. 프로퍼티는 public하므로 은닉되지 않는다.
  }

  Counter.prototype.increase = function () {
    return ++num;
  };

  Counter.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };
  return Counter;
})();

const counter13 = new Counter();

console.log(counter13.increase()); // 1
console.log(counter13.increase()); // 2
console.log(counter13.decrease()); // 1
console.log(counter13.decrease()); // 0

// 함수형 프로그래밍에서 클로저를 활용하는 예제
// 24-14
// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 우한 자유 변수 counter를 기억하는 클로저를 반환한다.
function makeCounter(aux) {
  // 카운트 상태를 유지하기 위한 자유 변수
  let counter = 0;

  // 클로저를 반환
  return function () {
    // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
    counter = aux(counter);
    return counter;
  };
}

// 보조 함수
function increase14(n) {
  return ++n;
}

// 보조함수
function decrease14(n) {
  return --n;
}

// 함수를 함수로 생성한다.
// makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다.
const increaser = makeCounter(increase14);
console.log(increaser()); // 1
console.log(increaser()); // 2

// increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
const decreaser = makeCounter(decrease14);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

// makeCounter 함수를 호출해 함수를 반환할 때 반환된 함수는 자신만의 독립된 렉시컬 환경을 갖는다.

// 독립된 카운터가 아니라 연동하여 증감이 가능한 카운터를 만들려면 렉시컬 환경을 공유하는 클로저를 만들어야 하고 이를 위해서 makeCounter 함수를 두 번 호출하지 말아야 한다.
// 24-15
// 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
const counter15 = (function () {
  // 카운트 상태를 유지하기 위한 자유 변수
  let counter = 0;

  // 함수를 인수로 전달받는 클로저를 반환
  return function (aux) {
    // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
    counter = aux(counter);
    return counter;
  };
})();

// 보조 함수
function increase15(n) {
  return ++n;
}

// 보조함수
function decrease15(n) {
  return --n;
}

// 보조 함수를 전달하여 호출
console.log(counter15(increase15)); // 1
console.log(counter15(increase15)); // 2

// 자유 변수를 공유한다.
console.log(counter15(decrease15)); // 1
console.log(counter15(decrease15)); // 0
