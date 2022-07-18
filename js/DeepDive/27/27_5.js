// 27.5 배열 요소의 참조

// 27-31
const arr = [1, 2];

// 인덱스가 0인 요소를 참조
console.log(arr[0]); // 1

// 인덱스가 1인 요소를 참조
console.log(arr[1]); // 2

// 존재하지 않는 요소에 접근하면 undefined가 반환된다.

// 27-32
const arr2 = [1, 2];

// 인덱스가 2인 요소를 참조. 배열 arr2에는 인덱스가 2인 요소가 존재하지 않는다.
console.log(arr2[2]); // undefined

// 27-33
// 희소 배열
const arr3 = [1, , 3];

// 배열 arr3에는 인덱스가 1인 요소가 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(arr3));

// {
//     '0': { value: 1, writable: true, enumerable: true, configurable: true },
//     '2': { value: 3, writable: true, enumerable: true, configurable: true },
//     length: { value: 3, writable: true, enumerable: false, configurable: false }
//   }

// 존재하지 않는 요소를 참조하면 undefined가 반환된다.
console.log(arr3[1]); // undefined
console.log(arr3[3]); // undefined
