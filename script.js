let nums = [1, 2, 3, 4, 5];
let result = nums.reduce((acc, current) => acc + current); // => number
console.log(result);

let sum = 0;
for (i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum);

// map, filter
let arr = [10, null, 9, undefined];
let new_arr = [10 + 2, null + 2, 9 + 2, undefined + 2];
// let filteredArray = [];

// for (i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === typeof 0) {
//     console.log(arr[i]);
//   }
// }

console.log(arr.filter((i) => typeof i == typeof 0));
console.log(arr.map((i) => i + 2)); // => array
