var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5;
console.log(x); // 10

x *= 5; // x = x * 5;
console.log(x); // 50

x /= 5; // x = x / 5;
console.log(x); // 10

x %= 5; // x = x % 5;
console.log(x); // 0

var str = "My name is ";

// 문자열 연결 연산자
str += "Lee"; // str = str + 'Lee';
console.log(str); // 'My name is Lee'

// 07-10
var x;

// 할당문은 표현식인 문이다.
console.log((x = 10)); // 10

// 07-11
var a, b, c;

// 연쇄 할당, 오른쪽에서 왼쪽으로 진행.
// 1. c = 0 : 0으로 평가된다.
// 2. b = 0 : 0으로 평가된다.
// 3. a = 0 : 0으로 평가된다.
a = b = c = 0;

console.log(a, b, c); // 0 0 0
