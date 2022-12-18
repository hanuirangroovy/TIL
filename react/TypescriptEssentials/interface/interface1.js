"use strict";
// function hello1(person:{name:string; age: number}):void {
//     console.log(`안녕하세요! ${person.name}입니다.`);
// }
function hello1(person) {
    console.log(`안녕하세요! ${person.name}입니다.`);
}
// const p1: {name : string; age: number} = {
//     name: "Jiae",
//     age: 32,
// };
const p1 = {
    name: "Jiae",
    age: 32,
};
hello1(p1);
