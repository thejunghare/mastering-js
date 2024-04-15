// Problem statement 👉 https://codedamn.com/problem/USS7M_hvMrnTQl1iE8ftg?challengeList=50-days-of-js

let min = 5, max = 10;
const randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}