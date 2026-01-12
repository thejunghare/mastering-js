console.log("JavaScript Date Object Lab");

//Create a new Date object called `currentDate` and log the current date and time

//Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'

//Create a function `getDayName` that takes a Date object and returns the day of the week as a string

//Export the `formatDate` function using ESM syntax

let currentDate = new Date();
console.log(currentDate);

export function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return day + "-" + month + "-" + year;
}

console.log(formatDate(currentDate));

export function getDayName(date) {
  const days = ["Sun", "Mon", "Tue", "Wen", "Thru", "Fri", "Sat"];
  let dayIndex = currentDate.getDay();
  return days[dayIndex];
}

console.log(getDayName(currentDate));
