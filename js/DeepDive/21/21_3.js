// 21.3 원시값과 래퍼 객체
// 원시값은 객체가 아니므로 프로퍼티나 메서드를 가질 수 없는데도 원시값인 문자열이 마치 객체처럼 동작한다.
// 21-04
const str = "hello";

// 원시타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO

// 래퍼 객체: 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체
const str1 = "hi";
// 원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환된다.
console.log(str1.length); // 2
console.log(str1.toUpperCase()); // HI

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof str1); // string

// 21-06
// 1. 식벽자 str2은 문자열을 값으로 가지고 있다.
const str2 = "hello";

// 2. 식벽자 str2은 암묵적으로 생성되니 래퍼 객체를 가리킨다.
// 식별자 str2의 값 'hello'는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
// 래퍼 객체에 name 프로퍼티가 동적 추가된다.
str2.name = "Lee";

// 3. 식별자 str2은 다시 원래의 문자열, 즉 래퍼 객체의 [[StirngData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이때 2에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

// 4. 식별자 str2은 새롭게 암묵적으로 생성된(2에서 생성된 래퍼 객체와는 다른) 래퍼 객체를 가리킨다.
// 새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않는다.
console.log(str2.name); // undefined

// 5. 식별자 str2은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이떄 4에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
console.log(typeof str2, str2); // string hello

// 21-07
const num = 1.5;

// 원시 타입인 숫자가 래퍼 객체인 Number 객체로 변환된다.
console.log(num.toFixed()); // 2

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof num, num); // number 1.5
