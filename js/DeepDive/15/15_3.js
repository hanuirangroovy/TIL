// 15.3 const 키워드

// 15.3.1 선언과 초기화
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.
// 15-13
const foo = 1;

// 15-14
// const foo1; // SyntaxError: Missing initializer in const declaration

// 15-15
{
  // 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
  // console.log(foo2); // ReferenceError: Cannot access 'foo2' before initialization
  const foo2 = 1;
  console.log(foo2); // 1
}

// 블록 레벨 스코프를 갖는다.
// console.log(foo2); // ReferenceError: foo2 is not defined

// 15.3.2 재할당 금지
// var 또는 let 키워드로 선언한 변수는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당이 금지된다.
// 15-16
const foo3 = 1;
// foo3 = 2; // TypeError: Assignment to constant variable.

// 15.3.3 상수
// 15-17
// 세전 가격
let preTaxPrice = 100;

// 세후 가격
// 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + preTaxPrice * 0.1;

console.log(afterTaxPrice); // 110

// const 키워드로 선언도니 변수에 원시 값을 할당한 경우 원시 값은 변경할 수 없는 값이고 const 키워드에 의해 재할당이 금지되므로 할당된 값을 변경할 수 있는 방법은 없다.

// 15-18
// 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 것이다.
// 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const TAX_RATE = 0.1;

// 세전 가격
let preTaxPrice1 = 100;

// 세후 가격
let afterTaxPrice1 = preTaxPrice1 + preTaxPrice1 * TAX_RATE;

console.log(afterTaxPrice1); // 110

// 15.3.4 const 키워드와 객체
// 15-19
// const 키워드로 선언도니 변수에 객체를 할당한 경우 값을 변경할 수 있다.
const person = {
  name: "Lee",
};

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = "Kim";

console.log(person); // { name: 'Kim' }

// const 키워드는 재할당을 금지할 뿐 '불변'을 의미하지는 앟는다.
