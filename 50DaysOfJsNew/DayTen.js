/*
`RandomInRange` should return a number greater than min
`RandomInRange` should return a number lesser than max
1. Calculate the 'gap' (how many numbers are between min and max)
2. Multiply random by that gap
3. Add min to shift the starting point up
*/

export const randomInRange = (min, max) => {
  // Write your code here
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(randomInRange(1, 5));
