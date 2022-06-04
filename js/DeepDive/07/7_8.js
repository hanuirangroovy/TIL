// 7.8 typeof 연산자
// 07-31
typeof ""; // "string"
typeof 1; // "number"
typeof NaN; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof Symbol(); // "symbol"
typeof null; // "object" -> 값이 null인지 확인할 때는 일치연산자(===) 사용
typeof []; // "object"
typeof {}; // "object"
typeof new Date(); // "object"
typeof /test/gi; // "object"
typeof function () {}; // "function"

// 07-32
var foo = null;

typeof foo === null; // false
foo === null; // true

// 07-33
// 선언하지 않은 식별자를 typeof 연산자로 연산해 보면 ReferenceError가 발생하지 않고 undefined를 반환
// undeclared 식별자를 선언한 적이 없다.
typeof undeclared; // undefined
