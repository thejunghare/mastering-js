'use strict'

// A variable is a “named storage” for data.


var istrue = true
/* 
'var' instead of 'let'
The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” way.
*/


let message = 'Hello, World!'
console.log(message)

// multiple variable on single line
//let name = 'paddy', age = 23, lastname = 'junghare'

// much better way
/* 
let name = 'paddy'
let age = 23
let lastname = 'junghare'
*/


// “comma-first" style
/* let name = 'paddy'
    , age = 23
    , lastname = 'junghare'
 */

let name = 'paddy'
    , age = 23
    , lastname = 'junghare'    

/*
- Case matters
Variables named apple and APPLE are two different variables.
*/


num = 5 // the variable "num" is created if it didn't exist but this will throw error if using strict mode

console.log(num)

// To declare a unchangin variable, use const instead of let
const birthDate = '03.05.2001'

/* 
Summary
We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them.
*/