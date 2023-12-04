/*
A value in JavaScript is always of a certain type. For example, a string or a number which are called as datatypes.

There are eight basic data types in JavaScript. 

*/

'use strict'

// we can put any type in variable
let message = 'Hello' // type -> string
message = 1234 // type -> int/number

// hence JS is called dynamically typed language


//* int/ number type

message = 123 // type -> int/number
message = 12.3 // type -> float

// Beside this there also exist Infinity, -Infinity and NaN
console.log(1 / 0) // anything divide by zero is infinity
//  OR
console.log(Infinity);

// NaN -> represents a computational error -> (happen when students understand the concept but make careless errors in computation ':)')
console.log('paddy' / 2); //computational error

// bigInt -> 16 digits numbers
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;


//* string -> A string in JavaScript must be surrounded by quotes.

/* There are 3 types of quotes -> "double quotes", 'Single quotes', `backticks`, double quotes and single quotes are similar and have no difference in Js, However backtips offer extended functionality */
let str = 'Hello';
let str2 = "Single quotes are ok too";

let pharse = `Can embed another ${str}`;
let pharse2 = "Can embed another ${str}";
console.log(pharse) // Can embed another Hello
console.log(pharse2) // Can embed another ${str}

//! There is no character type.

/*  Boolean (logical type)
The boolean type has only two values: true and false. */

let isLoggedIn = true

let isGreater = 4 > 1
console.log(isGreater); // true

//* null -> the null is a separate type of its own "reference to a non-existing object” or a “null pointer”
let age = null //  code states that age is unknown.


//* undefined -> separate type of its own  means 'value is not assigned'
let num;
console.log(num); // undefined

// it's possible to explicitly assign undefined to a variable
let anothernumber = 100;
anothernumber = undefined;
/* 
But it's not recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.
*/


//* object -> objects are used to store collections of data and more complex entities.

//* symbol -> used to create unique identifiers for objects