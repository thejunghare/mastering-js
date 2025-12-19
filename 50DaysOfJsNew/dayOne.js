// Export the `myMap`, `myFilter`, and `myReduce` functions as named exports from `index.js` using ESM syntax.

export const myMap = (array, callback) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    mappedValue = callback(array[i], array)
    result.push(mappedValue);
  }

  return result;
}

export const myFilter = (array, callback) => {
  const result = [];

  return result;
}

export const myReduce = () => {
}
