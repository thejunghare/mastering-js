// Problem statement 👉 https://codedamn.com/problem/EfeLWRDmWwE830YBexkiL?challengeList=50-days-of-js

const capitaliseWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

console.log(capitaliseWord("hello")); // Output: 'Hello'
console.log(capitaliseWord("mom")); // Output: 'Mom'
console.log(capitaliseWord("dAD")); // Output: 'DAD'