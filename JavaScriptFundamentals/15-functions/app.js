'use strict'

let speed = 10;
let time = 5;
console.log(speed * time);

function showDistance(speed, time) {
    console.log(speed * time);
}

showDistance(10, 5);
showDistance(85, 1.5);
showDistance(12, 9);
showDistance(42, 21);

function sayHello() {
    console.log('Hello');
}

// sayHello();
// sayHello(); // show function code

let func = sayHello;
func();

let number1 = 5;
let number2 = 3;

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers(number1, number2);


function addTwoNumbersAndReturn(number1, number2) {
    return number1 + number2;
    // console.log('Sum is');
}

console.log(addTwoNumbersAndReturn(4, 5));


(function () {
    let greeting = "Hello";
    console.log(greeting);
})();

// function expression

let func2 = function () {

};

