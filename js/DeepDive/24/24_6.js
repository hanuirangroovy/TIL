// 24.6 자주 발생하는 실수
// 24-20
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}

// 24-21
var funcs21 = [];
for (var i = 0; i < 3; i++) {
  funcs21[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}

for (var j = 0; j < funcs21.length; j++) {
  console.log(funcs[j]());
}

// 24-22
const funcs22 = [];

for (let i = 0; i < 3; i++) {
  funcs22[i] = function () {
    return i;
  };
}

for (let i = 0; i < funcs22.length; i++) {
  console.log(funcs22[i]()); // 0 1 2
}

// 고차 함수를 사용하는 방법
// 24-23
// 요소가 3개인 배열을 생성하고 배열의 인덱스를 반환하는 함수를 요소로 추가하낟.
// 배열의 요소로 추가된 함수들은 모두 클로저다.
const funcs23 = Array.from(new Array(3), (_, i) => () => i);

// 배열의 요소로 추가된 함수들을 순차적으로 호출한다.
funcs23.forEach((f) => console.log(f())); // 0 1 2
