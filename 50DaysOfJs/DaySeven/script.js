// Problem statement 👉 https://codedamn.com/problem/kwBbO5d3orXw7afRsjg9q?challengeList=50-days-of-js

const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3]

const sumOfEvens = (arr) => {
    let sum = 0;

    if (arr.length === 0) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum = sum + arr[i];
        }
    }

    return sum;
}

console.log(sumOfEvens(arr));
