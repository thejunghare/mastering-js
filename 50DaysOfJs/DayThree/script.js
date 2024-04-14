// Problem statement 👉 https://codedamn.com/problem/r-urIiFrU7ULb6Ug2kTXo?challengeList=50-days-of-js

const arr1 = [2, 3, 4]
const arr2 = [3, 4, 5]
let d = 1

const FindTheDistanceValue = (arr1, arr2, d) => {
    let result = 0
    for (let i = 0; i <= arr1.length; i++) {
        let isvalid = true;
        for (let j = 1; j <= arr2.length; j++) {
            if (arr1[i] - arr2[j] <= d && arr2[j] - arr1[i] <= d) {
                isValid = false
                break
            }
        }
        if (isvalid) {
            result += 1
        }
    }

    return result
}

console.log(FindTheDistanceValue(arr1, arr2, d)) // 0
