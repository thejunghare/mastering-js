const myMap = (array, callback) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let mappedValue = callback(array[i], i, array);
    result.push(mappedValue);
  }

  return result;
};

export const myFilter = (array, callback) => {
  const result = [];

  return result;
};

export const myReduce = () => {};

console.log(myMap([1, 2, 3, 4], (i) => i * 2));
