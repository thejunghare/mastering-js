/*
Create the checkPositive function which accepts an array of numbers as input.
Use Array.prototype.every() inside the checkPositive function to check if all numbers in the array are positive.
Check if the checkPositive function correctly returns true when all numbers in the array are positive.
Check if the checkPositive function correctly returns false when some or all numbers in the array are not positive.
*/

console.log("Welcome to the Array.prototype.every() lab");

// Your code goes here

let nums = [1,2,3]

function checkPositive(nums){
   return nums.every((num) => num > 0 )
}

console.log(checkPositive(nums))