// 27.8 배열 메서드

// 배열에는 원본 배열을 직접 변경하는 메서드와 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드가 있다.

// 27-41
const arr = [1];

// push 메서드는 원본 배열(arr)을 직접 변경한다.
arr.push(2);
console.log(arr); // [ 1, 2 ]

// concat 메서드는 원본 배열(arr)을 직접 변겨앟지 않고 새로운 배열을 생성하여 반환한다.
const result = arr.concat(3);
console.log(arr); // [ 1, 2 ]
console.log(result); // [ 1, 2, 3 ]

// 27.8.1 Array.isArray
// Array.isArray는 Array 생성자 함수의 정적 메서드다ㅏ
// Array.isArray 메서드는 전달된 인수가 배열이면 true, 배열이 아니면 false를 반환한다.

// 27-42
// true
Array.isArray([]);
Array.isArray([1, 2]);
Array.isArray(new Array());

// false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ 0: 1, length: 1 });

// 27.8.2 Array.prototype.indexOf
// indexOf 메서드는 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.
// 원본 배열에서 인수로 전달한 요소와 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환한다.
// 원본 배열에 인수로 전달한 요소가 존재하지 않으면 -1을 반환한다.

// 27-43
const arr43 = [1, 2, 2, 3];

// 배열 arr43에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환한다.
arr43.indexOf(2); // 1

// 배열 arr43에 요소 4가 없으므로 -1을 반환한다.
arr43.indexOf(4); // -1

// 두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
arr43.indexOf(2, 2); // 2

// index 메서드는 배열에 특정 요소가 존재하는지 확인할 때 유용하다.
// 27-44
const foods = ["apple", "banana", "orange"];

// foods 배열에 'orange' 요소가 존재하는지 확인한다.
if (foods.indexOf("orange") === -1) {
  // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다.
  foods.push("orange");
}

console.log(foods); // [ 'apple', 'banana', 'orange' ]

// indexOf 메서드 대신 Array.prototype.includes 메서드를 사용하면 가독성이 더 좋다.
// 27-45
const foods45 = ["apple", "banana", "orange"];

// foods45 배열에 'orange' 요소가 존재하는지 확인한다.
if (!foods45.includes("orange")) {
  // foods45 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다.
  foods45.push("orange");
}

console.log(foods45); // [ 'apple', 'banana', 'orange' ]

// 27.8.3 Array.prototype.push
// push 메서드는 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다.

// 27-46
const arr46 = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열 arr46의 마지막 요소로 추가하고 변경된 length 값을 반환한다.
let result46 = arr46.push(3, 4);
console.log(result46); // 4

// push 메서드는 원본 배열을 직접 변경한다.
console.log(arr46); // [ 1, 2, 3, 4 ]

// push 메서드는 성능 면에서 좋지 않기에 마지막 요소로 추가할 요소가 하나뿐이라면 length 프로퍼티를 사용하여 직접 추가할 수도 있다.
// 27-47
const arr47 = [1, 2];

// arr47.push(3)과 동일한 처리를 한다. 이 방법이 push 메서드보다 빠르다.
arr47[arr47.length] = 3;
console.log(arr47); // [ 1, 2, 3 ]

// 스프레드 문법을 사용하면 함수 호출 없이 표현식으로 마지막에 요소를 추가할 수 있으며 부수 효과도 없다.
// 27-48
const arr48 = [1, 2];

// ES6 스프레드 문법
const newArr = [...arr48, 3];
console.log(newArr); // [ 1, 2, 3 ]
