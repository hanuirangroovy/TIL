// 11.2 객체

// 11.2.1 변경 가능한 값
// 11-11
var person = {
  name: "Lee",
};

// 11-12
// 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
var person1 = {
  name: "Lee",
};

// person1 변수에 ㅓ장되어 있던 참조 값으로 실제 객체에 접근한다.
console.log(person1); // { name: 'Lee' }

// 11-13
var person3 = {
  name: "Lee",
};

// 프로퍼티 값 갱신
person3.name = "Kim";

// 프로퍼티 동적 생성
person3.address = "Seoul";

console.log(person3); // { name: 'Kim', address: 'Seoul' }

// 얕은 복사와 깊은 복사
// 11-14
const o = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...o }; // 35장 "스프레드 문법" 참고
console.log(c1 === o); // false
console.log(c1.x === o.x); // true

// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행
const _ = require("lodash");

// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false

// 11-15
const v = 1;

// "깊은 복사"라고 부르기도 한다.
const c3 = v;
console.log(c3 === v); // true

const o3 = { x: 1 };

// "얕은 복사"라고 부르기도 한다.
const c4 = o3;
console.log(c4 === o3); // true

// 11.2.2
// 11-16
var person4 = {
  name: "Lee",
};

// 참조 값을 복사(얕은 복사)
var copy = person4;

// 11-17
var person5 = {
  name: "Lee",
};

// 참조 값을 복사(얕은 복사)
var copy2 = person5;

// copy2와 person5는 동일한 객체를 참조한다.
console.log(copy2 === person5); // true

// copy2를 통해 객체를 변경한다.
copy2.name = "Kim";

// person5를 통해 객체를 변경한다.
person5.address = "Seoul";

// copy2와 person5은 동일한 객체를 가리킨다.
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.
console.log(person5); // { name: 'Kim', address: 'Seoul' }
console.log(copy2); // { name: 'Kim', address: 'Seoul' }

// 11-18
var person6 = {
  name: "Lee",
};

var person7 = {
  name: "Lee",
};

console.log(person6 === person7); // false
console.log(person6.name === person7.name); // true
