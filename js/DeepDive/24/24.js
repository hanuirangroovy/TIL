// 24 클로저

// 클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

// 24-01
const x = 1;

function outerFunc() {
  const x = 10;
  function innerFunc() {
    console.log(x); // 10
  }

  innerFunc();
}

outerFunc();

// 만약 innerFunc 함수가 outerFunc 함수의 내부에서 정의된 중첩 함수가 아니라면 innerFunc 함수를 outerFunc 함수의 내부에서 호출한다 하더라도 outerFunc 함수의 변수에 접근할 수 없다.
// 24-02
const x2 = 1;

function outerFunc2() {
  const x2 = 10;
  innerFunc2();
}

function innerFunc2() {
  console.log(x2); // 1
}

outerFunc2();
