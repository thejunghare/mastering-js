// Problem statement 👉 https://codedamn.com/problem/EfeLWRDmWwE830YBexkiL?challengeList=50-days-of-js

// const arr = [5, 3, 8, 4, 2] // odd length // 4
const arr = [20, 30, 40, 50, 60, 80] // even length // 45

const getMiddleValue = (arr) => {
    let temp = 0;
    let middleValue = 0;

    // sort array
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    // get the middle of an array
    if (arr.length % 2 != 0) {
        middleValue = arr[Math.floor(arr.length / 2)]
    } else {
        let midLeft  = arr[Math.floor(arr.length / 2)]
        let midRight = arr[Math.floor(arr.length / 2 - 1)]
        middleValue = midLeft +  ( midRight - midLeft) / 2
    }

    return middleValue
}

console.log(getMiddleValue(arr))