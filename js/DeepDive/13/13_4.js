// 13.4 함수 레벨 스코프
// 코드 블록이 아닌 함수에 의해서만 지역 스코프가 생성
// var키워드로 선언된 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정

// 13-07
var x = 1;
if (true) {
  // var 키워드로 선언된 변수는 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
  // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
  // 따라서 x는 전역변수다. 이미 선언된 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
  // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
  var x = 10;
}

console.log(x); // 10

// 13-08
var i = 10;

// for 문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

// 의도치 않게 변수의 값이 변경되었다.
console.log(i); // 5
