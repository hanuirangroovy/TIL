// 27.7 배열 요소의 삭제
// 배열은 사실 객체이기 떄문에 배열의 특정 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다.
// 27-39
const arr = [1, 2, 3];

// 배열 요소의 삭제
delete arr[1];
console.log(arr); // [ 1, <1 empty item>, 3 ]

// length 프로퍼티에 영향을 주지 않는다. 즉, 희소 배열이 된다.
console.log(arr.length); // 3

// 27-40
const arr2 = [1, 2, 3];

// Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
// arr[1]부터 1개의 요소를 제거
arr2.splice(1, 1);
console.log(arr2); // [ 1, 3 ]

// length 프로퍼티가 자동 갱신된다.
console.log(arr2.length); // 2
