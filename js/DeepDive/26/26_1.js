// 26.1 함수의 구분

// 26-01
var foo = function () {
  return 1;
};

// 일반적인 함수로서 호출
foo();

// 생성자 함수로서 호출
new foo();

// 메서드로서 호출
var obj = { foo: foo };
obj.foo();

// ES6 이전의 모든 함수는 일반함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수 있다.

// 26-02
var foo2 = function () {};

// ES6 이전의 모든 함수는 callable이면서 constructor다.
foo2();
new foo2();

// "내부 메서드 [[Call]]과 [[Construct]]"에서 살펴보았듯이 호출할 수 있는 함수 객체를 callable이라 하며,
// 인스턴스를 생성할 수 있는 객체를 constructor, 인스턴스를 생성할 수 없는 함수 객체를 non-constructor라고 부른다.

// 26-03
// 프로퍼티 f에 바인딩된 함수는 callable이며 constructor다.
var obj3 = {
  x: 10,
  f: function () {
    return this.x;
  },
};

// 프로퍼티 f에 바인딩된 함수를 메서드로서 호출
console.log(obj3.f()); // 10

// 프로퍼티 f에 바인딩된 함수를 일반 함수로서 호출
var bar3 = obj3.f;
console.log(bar3()); // undefined

// 프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출
console.log(new obj3.f()); // f {}

// 26-04
// 콜백 함수를 사용하는 고차 함수 map. 콜백 함수도 constructor이며 프로토타입을 생성한다.
[1, 2, 3].map(function (item) {
  return item * 2;
});
