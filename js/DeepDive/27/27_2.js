// 27.2 자바스크립트 배열은 배열이 아니다.

// 밀집 배열: 배열의 요소가 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있는 배열

// 27-08
// 선형 검색을 통해 배열(array)에 특정 요소(target)가 존재하는지 확인한다.
// 배열에 특정 요소가 존재하면 특정 요소의 인덱스를 반환하고, 존재하지 않으면 -1을 반환한다.
function linearSearch(array, target) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === target) return i;
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1

// 희소 배열 : 배열의 요소가 연속적으로 이어져 있지 않은 배열

// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체다.

// 27-09
// 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체 참고
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));

// {
//     '0': { value: 1, writable: true, enumerable: true, configurable: true },
//     '1': { value: 2, writable: true, enumerable: true, configurable: true },
//     '2': { value: 3, writable: true, enumerable: true, configurable: true },
//     length: { value: 3, writable: true, enumerable: false, configurable: false }
//   }

// 27-10
const arr = [
  "string",
  10,
  true,
  null,
  undefined,
  NaN,
  Infinity,
  [],
  {},
  function () {},
];

// 일반적인 배열은 인덱스로 요소에 빠르게 접근할 수 있다. 하지만 요소를 삽입 또는 삭제하는 경우에는 효율적이지 않다.
// 자바스크립트 배열은 해시 테이블로 구현된 객체이므로 인덱스로 요소에 접근하는 경우 일반적인 배열보다 성능적인 면에서 느릴 수 밖에 없는 구조적인 단점이 있다.
// 하지만 요소를 삽입 또는 삭제하는 경우에는 일반적은 배열보다 빠른 성능을 기대할 수 있다.

// 27-11
const arr1 = [];

console.time("Array Performance Test");

for (let i = 0; i < 10000000; i++) {
  arr1[i] = i;
}

console.timeEnd("Array Performance Test"); // 203.475ms

const obj = {};

console.time("Object Performance Test");

for (let i = 0; i < 10000000; i++) {
  obj[i] = i;
}

console.timeEnd("Object Performance Test"); // 272.938ms
