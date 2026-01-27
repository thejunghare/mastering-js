// json.js

// Example object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Convert object to JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}

// Convert JSON string back to object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject); // Output: { name: "John", age: 30, city: "New York" }

// Key Points to Remember:
// - JSON.stringify(): Converts a JavaScript object into a JSON string
// - JSON.parse(): Converts a JSON string back into a JavaScript object
// - JSON is language-independent and widely used for data interchange
// - Both methods handle null, undefined, and functions differently
// - Use JSON for data transmission between a server and a client