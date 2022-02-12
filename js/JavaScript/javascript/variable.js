// 1.'use strict';
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable
let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);


// var
// var hoisting
// console.log(age);
// age = 4;
// console.log(age);
// var age;

// name = 4;
// let name;

// has no block scope

{
    age = 4;
    var age;
}
console.log(age);