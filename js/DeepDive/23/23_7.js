// 23.7 실행 컨텍스트와 블록 레벨 스코프
// 23-11
let x = 1;

if (true) {
  let x = 10;
  console.log(x); // 10
}

console.log(x); // 1
