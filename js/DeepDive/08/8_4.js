// 8.4 break 문
// 08-18
// if (true) {
//   break; // Uncaught SyntaxError: Illegal break statement
// }

// 08-19
// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log("foo");

// foo

// 08-20
// foo라는 식별자가 붙은 레이블 블록문
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 탈출한다.
  console.log(2);
}

console.log("Done!");

// 1
// Done!

// 08-21
// outer라는 식별자가 붙은 레이블 for문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for문을 탈출한다.
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}

console.log("Done!");

// inner [0, 0]
// inner [0, 1]
// inner [0, 2]
// inner [1, 0]
// inner [1, 1]
// Done!

// 08-22
var string = "Hello World.";
var search = "l";
var index;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 문자열의 개별 문자가 'l'이면
  if (string[i] === search) {
    index = i;
    break; // 반복문을 탈출한다.
  }
}

console.log(index); // 2
// 참고로 String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search)); // 2
