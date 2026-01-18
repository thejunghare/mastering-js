let currentDate = new Date();
console.log(currentDate);

export function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return day + "-" + month + "-" + year;
}

console.log(formatDate(currentDate));
