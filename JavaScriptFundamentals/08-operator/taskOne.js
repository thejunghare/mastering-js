/* 
The postfix and prefix forms
importance: 5
What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
*/

let a = 1, b = 1
let c = ++a
let d = b++
console.log(c) // 2
console.log(d) // 1