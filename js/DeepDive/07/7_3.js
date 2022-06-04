// 7.3 비교 연산자
// 07-12

// 동등비교
5 == 5; // true

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다
5 == "5"; //true

// 07-13
// 동등 비교, 결과를 예측하기 어렵다.
"0" == ""; // false
0 == ""; // true
0 == "0"; //true
false == "false"; // false
false == "0"; // true
false == null; // false
false == undefined; // false

// 동등 비교(==) 연산자는 예측하기 어려운 결과를 만들기에 일치 비교(===) 연산자를 사용하는 편이 좋다.

// 07-14
// 일치 비교
5 === 5; // true

// 암묵적 타입 변환을 하지 않고 값을 비교한다.
// 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
5 === "5"; //false

// 07-15
// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // false

// 07-16
// Number.isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
Number.isNaN(NaN); // true
Number.isNaN(10); // false
Number.isNaN(1 + undefined); //true

// 07-17
// 양의 0과 음의 0의 비교. 일치 비교/ 동등 비교 모두 결과는 true다.
0 === -0; // true
0 == -0; // true

// 07-18
-0 === +0; // true
Object.is(-0, +0); // false

NaN === NaN; // false
Object.is(NaN, NaN); // true

// 07-19
// 부동등 비교
5 != 8; // true
5 != 5; // false
5 != "5"; // false

// 불일치 비교
5 !== 8; // true
5 !== 5; // false
5 !== "5"; // true

//07-20
// 대소 관계 비교
5 > 0; // true
5 > 5; // false
5 >= 5; // true
5 <= 5; // true
