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
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
};

export const myReduce = (array, callback, initialValue) => {
  let accumulator = initialValue;
  let startIndex = 0;

  // Logic: If no initialValue is provided, use index 0 as accumulator 
  // and start looping from index 1.
  if (accumulator === undefined) {
    if (array.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
};


console.log("Map:", myMap([1, 2, 3, 4], (i) => i * 2)); 

console.log("Filter:", myFilter([1, 2, 3, 4], (i) => i % 2 === 0)); 

console.log("Reduce:", myReduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0)); 