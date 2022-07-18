// 27.6 배열 요소의 추가와 갱신

// 객체에 프로퍼티를 동적으로 추가할 수 있는 것처럼 ㅁ배열에도 요소를 동적으로 추가할 수 있다.
// 존재하지 않는 인덱스를 사용해 값을 할당하면 새로운 요소가 추가된다. 이때 length 프로퍼티 값은 자동 갱신된다.

// 27-34
const arr = [0];

// 배열 요소의 추가
arr[1] = 1;

console.log(arr); // [ 0, 1 ]
console.log(arr.length); // 2

// 만약 현재 배열의 length 프로퍼티 값보다 큰 인덱스로 새로운 요소를 추가하면 희소 배열이 된다.

// 27-35
arr[100] = 100;

console.log(arr); // [ 0, 1, <98 empty items>, 100 ]
console.log(arr.length); // 101

// 27-36
// 명시적으로 값을 할당하지 않은 요소는 생성되지 않는다.
console.log(Object.getOwnPropertyDescriptors(arr));

// {
//     '0': { value: 0, writable: true, enumerable: true, configurable: true },
//     '1': { value: 1, writable: true, enumerable: true, configurable: true },
//     '100': { value: 100, writable: true, enumerable: true, configurable: true },
//     length: {
//       value: 101,
//       writable: true,
//       enumerable: false,
//       configurable: false
//     }
//   }

// 이미 요소가 존재하는 요소에 값을 재할당하면 요소값이 갱신된다.

// 27-37
// 요소값의 갱신
arr[1] = 10;
console.log(arr); // [ 0, 10, <98 empty items>, 100 ]

// 인덱스는 요소의 위치를 나타내므로 반드시 0 이상의 정수를 사용해야 한다.
// 만약 정수 이외의 값을 인덱스처럼 사용하면 요소가 생성되는 것이 아니라 프로퍼티가 생성된다. 이때 추가된 프로퍼티는 length 프로퍼티 값에 영향을 주지 않는 것이다.

// 27-38
const arr2 = [];

// 배열 요소의 추가
arr2[0] = 1;
arr2["1"] = 2;

// 프로퍼티 추가
arr2["foo"] = 3;
arr2.bar = 4;
arr2[1.1] = 5;
arr2[-1] = 6;

console.log(arr2); // [ 1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6 ]

// 프로퍼티 length에 영향을 주지 않는다.
console.log(arr2.length); // 2
