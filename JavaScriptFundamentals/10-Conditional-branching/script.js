'use strict'

/* 
if statement evalutes the experssion in the () to boolean
*/

if (0) {
    // 0 is  falsy
    // this never execute
}

if (1) {
    // 1 is true
    // this will execute
}

let age = 23
if (age > 18) console.log('true') // short hand 

if (age > 18) {
    console.log('Age is greater than 18')
    console.log('true');
}

/* 
The if statement may contain an optional else block. It executes when the condition is falsy.
*/

if (0) {
    // falsy
} else {
    console.log('Executed else');
}

/* 
Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.
*/

if (0) {
    // falsy
} else if (1) {
    console.log('Executed else if');
} else {
    // falsy
}


// conditional operator ?
// let result = condition ? value1 : value2;
let accessAllowed = (age > 18) ? true : false;


// Non-traditional use of ‘?’
let company = 'Netscape';

(company == 'Netscape') ?
    console.log('Right!') : console.log('Wrong.')