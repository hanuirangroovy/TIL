// 08-10
for (var i = 0; i < 2; i++) {
  console.log(i);
}

// 0
// 1

// 08-11
for (var i = 1; i >= 0; i--) {
  console.log(i);
}

// 1
// 0

// 08-12
// 무한루프
// for (;;) { ... }

// 08-13
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}

// [1, 5]
// [2, 4]
// [3, 3]
// [4, 2]
// [5, 1]

// 08-14
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count); // 0 1 2
  count++;
}

// 08-15
// 무한루프
// while (true) { ... }

// 08-16
var count = 0;

// 무한루프
while (true) {
  console.log(count);
  count++;
  // count가 3이면 코드 블록을 탈출한다.
  if (count === 3) break;
} // 0 1 2

// 08-17
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count); // 0 1 2
  count++;
} while (count < 3);
