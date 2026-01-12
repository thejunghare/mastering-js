// let numbers_even = [1, 2, 3, 4, 5, 6];
// let numbers_odd = [1, 2, 3, 4, 5];
// console.log(numbers_even); // prints entire array
// // numbers.length ->  5 - 1

// console.log(numbers_even[0]); // print 1st element of the array
// console.log(numbers_even[numbers_even.length - 1]); // print last element of the array

// console.log("odd: ", numbers_odd[(numbers_odd.length - 1) / 2]); // middle -> if odd

// console.log("even: ", numbers_even[numbers_even.length / 2]); // middle -> if even (right)
// console.log("even: ", numbers_even[numbers_even.length / 2 - 1]); // middle -> if even (left)

// let mixedDataTypes = [1, 2, true, false, "Js", null];
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// let lastElement = itCompanies.pop();
// // console.log(lastElement); // Amazon
// let result = itCompanies.join(",");
// console.log(result + " and " + lastElement);

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon'
function checkIf(company) {
  for (i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i] == company) console.log(itCompanies[i]);
    else console.log("Not found");
  }
}
