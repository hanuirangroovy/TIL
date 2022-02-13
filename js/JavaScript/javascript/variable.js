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

// 3. Constant
const daysInWeek = 7;
const maxNumber = 5;


// 4. Variable types
const count = 17;  //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


//number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);