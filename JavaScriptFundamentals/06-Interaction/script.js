'use strict'

// alert, prompt, confirm


/* 
The mini-window with the message is called modal window. Modal means that user can't interact with rest of the page, pressother buttons etc, until they have deal with window
*/
alert('Hello') // Hello

/* 
prompt -> accepts two arguments 
syntax -> variable = prompt('title', [default]) -> title is the text shown to user in prompt window and default in square brackets means parameter is optional and not required.
if clicked cancel/esc value returned is null
*/
let age = prompt('how old you are') // 10
alert(`You are ${age} year's old`) // You are 10 year's old

/* 
Confirm
The confirm functions shows a modal window with a question with two buttons OK and cancel, result is true if clicked OK else false
*/
let confirmPassword = confirm('Confirm Password')
alert(confirmPassword) // true