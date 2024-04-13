// Problem statement 👉 https://codedamn.com/problem/y6KWPIwpMArpiii2hh65h?challengeList=50-days-of-js
function createCounter(n) {
    // return a function
    let countValue = n

    function counter() {
        return countValue++
    }

    return counter
}

// Sample Test Cases
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11