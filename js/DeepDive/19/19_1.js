// 19.1 객체 지향 프로그래밍
// 19-01
// 이름과 주소 속성을 갖는 객체
const person = {
  name: "Lee",
  address: "Seoul",
};

console.log(person); // { name: 'Lee', address: 'Seoul' }

// 객체: 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조

// 19-02
const circle = {
  radius: 5, // 반지름

  // 원의 지름: 2r
  getDiameter() {
    return 2 * this.radius;
  },

  // 원의 둘레: 2πr
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  // 원의 넓이: πrr
  getArea() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(circle);

// {
//     radius: 5,
//     getDiameter: [Function: getDiameter],
//     getPerimeter: [Function: getPerimeter],
//     getArea: [Function: getArea]
//   }

console.log(circle.getDiameter()); // 10
console.log(circle.getPerimeter()); // 31.41592653589793
console.log(circle.getArea()); // 78.53981633974483

// 객체지향 프로그래밍은 객체의 상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각
// 따라서 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조
