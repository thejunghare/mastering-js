/*
Create a `Singleton` class with a `getInstance` method.
Implement a `message` method that returns 'Hello Singleton!'.
Create only one instance of the Singleton class.
Export the `Singleton` class as the default export
*/
export default class Singleton {
  constructor() {}

  messgae() {
    return "Hello Singleton";
  }
}

let obj = new Singleton();
console.log(obj.messgae());
