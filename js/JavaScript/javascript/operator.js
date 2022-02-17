// 1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log("ellie's \n \t book")


// 2. Numeric operators
console.log(1 + 1);  //add
console.log(1 - 1);  //substract
console.log(1 / 1);  //divide
console.log(1 * 1);  //multiply
console.log(5 % 2);  //remainder
console.log(2 ** 3);  //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement= counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);  // less than
console.log(10 <= 6);  // less than or equal
console.log(10 > 6);  // greater than
console.log(10 >= 6);  //greater than or equal


// 6. Logical operators: || (or), && (and), !(not) (논리 연산자)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()} `);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);


// often used to comparess long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }
function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('🙃');
    }
    return true;
}

// !(not) 
console.log(!value1)

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = { namme: 'ellie2' };
const ellie2 = { namme: 'ellie2' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);




