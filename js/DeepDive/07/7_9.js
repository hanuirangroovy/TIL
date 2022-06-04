// 7.9 지수 연산자
// 07-34
2 ** 2; // 4
2 ** 2.5; // 5.65685424949238
2 ** 0; // 1
2 ** -2; // 0.25

// 07-35
Math.pow(2, 2); // 4
Math.pow(2, 2.5); // 5.65685424949238
Math.pow(2, 0); // 1
Math.pow(2, -2); // 0.25

// 07-36
// 지수 연산자의 결합 순서는 우항에서 좌항이다. 즉, 우결합성을 갖는다.
2 ** (3 ** 2); // 512
Math.pow(2, Math.pow(3, 2)); // 512

// 07-37
-5 ** 2;
// SyntaxError: Unary operator used immediately before exponentiation expression.
// Parenthesis must be used to disambiguate operator precedence

(-5) ** 2; // 25

// 07-38
var num = 5;
num **= 2; // 25

// 07-39
// 지수 연산자는 이항 연산자 중에서 우선순위가 높다
2 * 5 ** 2; // 50