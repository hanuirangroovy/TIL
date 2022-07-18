// 27.4 배열 생성

// 27.4.1 배열 리터럴

// 가장 일반적이고 간편한 배열 생성 방식은 배열 리터럴을 사용하는 것이다.
// 배열 리터럴은 0개 이상의 요소를 쉼표로 구분하여 대괄호로 묶는다.
// 배열 리터럴은 객체 리터럴과 달리 프로퍼티 키가 없고 값만 존재한다.

// 27-18
const arr = [1, 2, 3];
console.log(arr.length); // 3

// 배열 리터럴에 요소를 하나도 추가하지 않으면 배열의 기링, 즉 length 프로퍼티 값이 0인 빈 배열이 된다.

// 27-19
const arr2 = [];
console.log(arr2.length); // 0

// 배열 리터럴에 요소를 생략하면 희소 배열이 생성된다.

// 27-20
const arr3 = [1, , 3]; // 희소 배열

// 희소 배열의 length는 배열의 실제 요소 개수보다 언제나 크다.
console.log(arr3.length); // 3
console.log(arr3); // [ 1, <1 empty item>, 3 ]
console.log(arr3[1]); // undefined

// 27.4.2 Array 생성자 함수

// Array 생성자 함수를 통해 배열을 생성할 수도 있따.

// 전달된 인수가 1개이고 숫자인 경우 length 프로퍼티 값이 인수인 배열을 생서한다.

// 27-21
const arr4 = new Array(10);

console.log(arr4); // [ <10 empty items> ]
console.log(arr4.length); // 10

// 이떄 생성된 배열은 희소배열이다. length 프로퍼티 값은 0이 아니지만 실제로 배열의 요소는 존재하지 않는다.

// 27-22
console.log(Object.getOwnPropertyDescriptors(arr4));
// {
//     length: { value: 10, writable: true, enumerable: false, configurable: false }
//   }

// 전달된 인수가 범위를 벗어나면 RangeError가 발생한다.

// 27-23
// 배열은 요소를 최대 4,294,967,295개 가질 수 있다.
new Array(4294967295);

// 전달된 인수가 0 ~ 4,294,967,295를 벗어나면 RangeError가 발생한다.
// new Array(4294967296); // RangeError: Invalid array length

// 전달된 인수가 음수이면 에러가 발생한다.
// new Array(-1); // RangeError: Invalid array length

// 전달된 인수가 없는 경우 빈 배열을 생성한다. 즉, 배열 리터럴 []과 같다.

// 27-24
new Array();

// 전달된 인수가 2개 이상이거나 숫자가 아닌 경우 ㅇ니수를 요소로 갖는 배열을 생성한다.

// 27-25
// 전달된 인수가 2개 이상이면 인수를 요소로 갖는 배열을 생성한다.
new Array(1, 2, 3);

// 전달된 인수가 1개지만 숫자가 아니면 ㅇ니수를 요소로 갖는 배열을 생성한다.
new Array({});

// Array 생성자 함수는 new 연산자와 함께 호출하지 않더라도, 즉 일반 함수로서 호출해도 배열을 생성하는 생성자 함수로 동작한다.
// 이는 Array 생성자 함수 내부에서 new.target을 확인하기 때문이다.

// 27-26
Array(1, 2, 3);

// 27.4.3 Array.of
// Array.of 메서드는 전달된 인수를 요소로 갖는 배열을 생성한다.
// Array.of는 Array 생성자 함수와 다르게 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.

// 27-27
// 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
Array.of(1);

Array.of(1, 2, 3);

Array.of("string");

// 27.4.4 Array.from
// Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 반환한다.

// 27-28
// 유사 배열 객체를 변환하여 배열을 생성한다.
Array.from({ length: 2, 0: "a", 1: "b" });

// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
Array.from("Hello");

// 27-29
// Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다.
Array.from({ length: 3 });

// Array.from은 두 번째 인수로 전달한 콜백 함수ㅡ이 반환값으로 구성된 배열을 반환한다.
Array.from({ length: 3 }, (_, i) => i);

// 유사 배열 객체와 이터러블 객체
// 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다.
// 유사 배열 객체는 마치 배열처럼 for 문으로 순회할 수도 있다.

// 27-30
// 유사 배열 객체
const arrayLike = {
  0: "apple",
  1: "banana",
  2: "orange",
  length: 3,
};

// 유사 배열 객체는 마치 배열처럼 for 문으로 순회할 수도 있다.
for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}

// apple
// banana
// orange
