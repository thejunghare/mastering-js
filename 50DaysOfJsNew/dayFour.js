/*
Create a `Singleton` class with a `getInstance` method.
Implement a `message` method that returns 'Hello Singleton!'.
Create only one instance of the Singleton class.
Export the `Singleton` class as the default export
*/
export default class Singleton {
  static var
  constructor() {
    if (Singleton.var){
      return Singleton.var
    }
    Singleton.var = this;
  }

  static getInstance() {
    if (!Singleton.var) {
      Singleton.var = new Singleton();
    }
    return Singleton.var;
  }

  messgae() {
    return "Hello Singleton";
  }
}

let obj = new Singleton();
console.log(obj.messgae());
