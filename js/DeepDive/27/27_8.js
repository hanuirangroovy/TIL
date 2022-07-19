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

// 27.8.4 Array.prototype.pop
// pop 메서드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
// 원본 배열이 빈 배열이면 undefined를 반환한다.
// pop 메서드는 원본 배열을 직접 변경한다.

// 27-49
const arr49 = [1, 2];

// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
let result49 = arr49.pop();
console.log(result49); // 2

// pop 메서드는 원본 배열을 직접 변경한다.
console.log(arr49); // [ 1 ]

// 스택은 데이터를 마지막에 밀어 넣고, 마지막에 밀어 넣은 데이터를 먼저 꺼내는 후입 선출 방식의 자료구조다.
// 스택은 언제나 가장 마지막에 밀어 넣은 최신 데이터를 먼저 취득한다.
// 스택에 데이터를 밀어 넣는 것을 푸시라 하고 스택에서 데이터를 꺼내는 것을 팝이라고 한다.

// 27-50
const Stack = (function () {
  function Stack(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }

  Stack.prototype = {
    constructor: Stack,
    // 스택의 가장 마지막에 데이터를 밀어 넣는다.
    push(value) {
      return this.array.push(value);
    },

    // 스택의 가장 마지막 데이터, 즉 가장 나중에 밀어 넣은 최신 데이터를 꺼낸다.
    pop() {
      return this.array.pop();
    },
    // 스택의 복사본 배열을 반환한다.
    entries() {
      return [...this.array];
    },
  };

  return Stack;
})();

const stack = new Stack([1, 2]);
console.log(stack.entries()); // [ 1, 2 ]

stack.push(3);
console.log(stack.entries()); // [ 1, 2, 3 ]

stack.pop();
console.log(stack.entries()); // [ 1, 2 ]

// 27-51
class Stack2 {
  #array; // private class member

  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.#array = array;
  }

  // 스택의 가장 마지막에 데이터를 밀어 넣는다.
  push(value) {
    return this.#array.push(value);
  }

  // 스택의 가장 마지막 데이터, 즉 가장 나중에 밀어 넣은 최신 데이터를 꺼낸다.
  pop() {
    return this.#array.pop();
  }

  // 스택의 복사본 배열을 반환한다.
  entries() {
    return [...this.#array];
  }
}

const stack2 = new Stack2([1, 2]);
console.log(stack2.entries()); // [ 1, 2 ]

stack2.push(3);
console.log(stack2.entries()); // [ 1, 2, 3 ]

stack2.pop();
console.log(stack2.entries()); // [ 1, 2 ]

// 27.8.5 Array.prototype.unshift
// unshift 메서드는 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다.
// unshift 메서드는 원본 배열을 직접 변경한다.

// 27-52
const arr52 = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 값을 반환한다.
let result52 = arr52.unshift(3, 4);
console.log(result52); // 4

// unshift 메서드는 원본 배열을 직접 변경한다.
console.log(arr52); // [ 3, 4, 1, 2 ]

// 스프레드 문법을 사용하면 함수 호출 없이 표현식으로 선두에 요소를 추가할 수 있으며 부수효과도 없다.

// 27-53

const arr53 = [1, 2];

// ES6 스프레드 문법
const newArr53 = [3, ...arr53];
console.log(newArr53); // [ 3, 1, 2 ]

// 27.8.6 Array.prototype.shift
// shift 메서드는 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
// 원본 배열이 빈 배열이면 undefined를 반환한다.
// shift 메서드는 원본 배열을 직접 변경한다.

// 27-54
const arr54 = [1, 2];

// 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
let result54 = arr54.shift();
console.log(result54); // 1

// shift 메서드는 원본 배열을 직접 변경한다.
console.log(arr54); // [ 2 ]

// 큐는 데이터를 마지막에 밀어 넣고, 처음 데이터, 즉 가장 먼저 밀어넣은 데이터를 먼저 꺼내는 선입선출 방식의 자료구조다.
// 스택은 언제나 마지막에 밀어 넣은 최신 데이터를 취득하지만 큐는 언제나 데이터를 밀어 넣은 순서대로 취득한다.

// 27-55
const Queue = (function () {
  function Queue(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }

  Queue.prototype = {
    constructor: Queue,
    // 큐의 가장 마지막에 데이터를 밀어 넣는다.
    enqueue(value) {
      return this.array.push(value);
    },
    // 큐의 가장 처음 데이터, 즉 가장 먼저 밀어 넣은 데이트를 꺼낸다.
    dequeue() {
      return this.array.push(value);
    },
    // 큐의 가장 처음 데이터, 즉 가장 먼저 밀어 넣은 데이터를 꺼낸다.
    dequeue() {
      return this.array.shift();
    },
    // 큐의 복사본 배열을 반환한다.
    entries() {
      return [...this.array];
    },
  };

  return Queue;
})();

const queue = new Queue([1, 2]);
console.log(queue.entries()); // [ 1, 2 ]

queue.enqueue(3);
console.log(queue.entries()); // [ 1, 2, 3 ]

queue.dequeue();
console.log(queue.entries()); // [ 2, 3 ]

// 27-56
class Queue56 {
  #array; // private class member
  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.#array = array;
  }

  // 큐의 가장 마지막에 데이터를 밀어 넣는다.
  enqueue(value) {
    return this.#array.push(value);
  }

  // 큐의 가장 처음 데이터, 즉 가장 먼저 밀어 넣은 데이트를 꺼낸다.
  dequeue() {
    return this.#array.push(value);
  }

  // 큐의 가장 처음 데이터, 즉 가장 먼저 밀어 넣은 데이터를 꺼낸다.
  dequeue() {
    return this.#array.shift();
  }

  // 큐의 복사본 배열을 반환한다.
  entries() {
    return [...this.#array];
  }
}

const queue56 = new Queue56([1, 2]);
console.log(queue56.entries()); // [ 1, 2 ]

queue56.enqueue(3);
console.log(queue56.entries()); // [ 1, 2, 3 ]

queue56.dequeue();
console.log(queue56.entries()); // [ 2, 3 ]

// 27.8.7 Array.prototype.concat
// concat 메서드는 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다.
// 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.
// 원본 배열은 변경되지 않는다.

// 27-57
const arr1 = [1, 2];
const arr2 = [3, 4];

// 배열 arr2를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
// 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.
let result57 = arr1.concat(arr2);
console.log(result57); // [ 1, 2, 3, 4 ]

// 숫자를 dnjsqhs 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
result57 = arr1.concat(3);
console.log(result57); // [ 1, 2, 3 ]

// 배열 arr2와 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
result57 = arr1.concat(arr2, 5);
console.log(result57); // [ 1, 2, 3, 4, 5 ]

// 원본 배열은 변경되지 않는다.
console.log(arr1); // [ 1, 2 ]

// push와 unshift 메서드는 concat 메서드로 대체할 수 있다.
// push와 unshift 메서드는 원본 배열을 직접 변경하지만 concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
// 따라서 push와 unshift 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 하며 concat 메서드를 사용할 경우 반환값을 반드시 변수에 할당받아야 한다.

// 27-58
const arr3 = [3, 4];

// unshift 메서든ㄴ 원본 배열을 직접 변경한다.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없다.
arr3.unshift(1, 2);
// unshift 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있다.
console.log(arr3); // [ 1, 2, 3, 4 ]

// push 메서드는 원본 배열을 직접 변경한다.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없다.
arr3.push(5, 6);
// push 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수있다.
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// unshfit와 push 메서드는 concat 메서드로 대체할 수 있다.
const arr4 = [3, 4];

// concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
// arr3.unshift(1, 2)를 다음과 같이 대체할 수 있다.
let result58 = [1, 2].concat(arr4);
console.log(result58); // [ 1, 2, 3, 4 ]

// arr3.push(5, 6)를 다음과 같이 대체할 수 있다.
result58 = result58.concat(5, 6);
console.log(result58); // [ 1, 2, 3, 4, 5, 6 ]

// 인수로 전달받은 값이 배열인 경우 push와 unshfit 메서드는 배열을 그대로 원본 배열의 마지막/첫 번째 요소로 추가하지만 concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 마지막 요소로 추가한다.

// 27-59
const arr59 = [3, 4];

// unshift와 push 메서드는 인수로 전달받은 배열을 그대로 원본 배열의 요소로 추가한다.
arr59.unshift([1, 2]);
arr59.push([5, 6]);
console.log(arr59); // [ [ 1, 2 ], 3, 4, [ 5, 6 ] ]

// concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 요소로 추가한다.
let result59 = [1, 2].concat([3, 4]);
result59 = result59.concat([5, 6]);

console.log(result59); // [ 1, 2, 3, 4, 5, 6 ]

// 27-60
let result60 = [1, 2].concat([3, 4]);
console.log(result60);

// concat 메서드는 ES6의 스프레드 문법으로 대체할 수 있다.
result60 = [...[1, 2], ...[3, 4]];
console.log(result60); // [ 1, 2, 3, 4 ]
