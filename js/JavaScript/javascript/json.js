// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

// 배열을 JSON으로 변환
json = JSON.stringify(["apple", "banana"]);
console.log(json);

// Object를 JSON으로 변환
const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

// json = JSON.stringify(rabbit, (key, value) => {
//   console.log(`key: ${key}, value: ${value}`);
//   return value;
// });
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);
// const obj = JSON.parse(json, (key, value) => {
//   console.log(`key: ${key}, value: ${value}`);
//   return value;
// });
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);
// console.log(obj.birthDate.getDate());
console.log(obj.birthDate.getDate());

console.log(json);
