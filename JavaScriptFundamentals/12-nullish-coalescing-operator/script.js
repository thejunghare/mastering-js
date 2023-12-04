'use strict'

/*

nullish coaslescing operator -> '??'

'a' value is defined when its nethier null or undefined

The result a ?? b
if a is defined, then a,
if b is defined, then b

*/

let user; // here user is undefined/null
console.log(user ?? 'Anonymous')