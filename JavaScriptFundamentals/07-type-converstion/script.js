'use strict'

/* 
Most of the time, operators and functions automatically convert the values given to them to the right type.
There are also cases when we need to explicitly convert a value to the expected type.
*/

// String conversion
let isLoggedIn = true;
console.log(typeof isLoggedIn); // Boolean

isLoggedIn = String(isLoggedIn);
console.log(typeof isLoggedIn); // String

// Numberic conversion
let str = '123';
console.log(typeof str); // String

str = Number(str);
console.log(typeof str) // Number

// Boolean conversion
let istrue = Boolean('')
console.log(typeof istrue); // Boolean
