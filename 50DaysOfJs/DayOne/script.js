// Problem statement 👉 https://codedamn.com/problem/_x-IJ93577wKir8ac9t8E?challengeList=50-days-of-js

"use strict"

/* const curry = (f) => {
  return (a) => {
    return (b) => {
      return (c) => {
        return f(a, b, c)
      }
    }
  }
} */

const curry = (f) => (a) => (b) => (c) => f(a, b, c)

const sum = (a, b, c) => {
  return a + b + c
}

let curriedSum = curry(sum)
// let curriedSumUsingLodashLibrary = _.curry(sum)

console.log(`call from normal function ${sum(1, 2, 3)}`)

console.log(`call from curry function ${curriedSum(1)(2)(3)}`)
// console.log(`call from curry function ${curriedSumUsingLodashLibrary(1, 2)(3)}`)