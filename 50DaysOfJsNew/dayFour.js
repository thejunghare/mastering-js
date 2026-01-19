/*
Create a `Singleton` class with a `getInstance` method.
Implement a `message` method that returns 'Hello Singleton!'.
Create only one instance of the Singleton class.
Export the `Singleton` class as the default export
*/ 
export default class Singleton {
  static instance;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    
    Singleton.instance = this;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  message() {
    return 'Hello Singleton!';
  }
}

const instance1 = Singleton.getInstance();
const instance2 = new Singleton();

console.log(instance1.message());  
console.log(instance1 === instance2); 

