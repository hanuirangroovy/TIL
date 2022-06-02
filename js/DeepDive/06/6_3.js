// 6.3 템플릿 리터럴

// 06-08
// var template = `Template literal`;
// console.log(template); // Template literal

// 06-09
// var str = 'Hello
// world.';
// SyntaxError: Invalid or unexpected token. 일반 문자열 내에서는 줄바굼이 허용X
// 공백을 표현하려면 백슬래시(\)로 시작하는 이스케이프 시퀀스를 사용.

// 06-10
// var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
// console.log(template);

{
  /* <ul>
	<li><a href="#">Home</a></li>
</ul> */
}

// 템플릿 리터럴 내에서는 이스켘이프 시퀀스를 사용하지 않고도 줄바꿈이 허용되며, 모든 공백도 있는 그대로 적용

// 06-11
var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;

console.log(template);

{
  /* <ul>
    <li><a href="#">Home</a></li>
</ul> */
}

// 06-12
var first = "Ung-mo";
var last = "Lee";

// ES5: 문자열 연결
console.log("My name is " + first + " " + last + "."); // My name is Ung-mo Lee.

// 06-13
var first = "Ung-mo";
var last = "Lee";

// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.

// 06-14
console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3

// 06-15
console.log("1 + 2 = ${1 + 2}"); // 1 + 2 = ${1 + 2}
