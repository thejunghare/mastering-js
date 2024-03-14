let emptyObject = {} // empty object
let anotherEmptyObject = new Object() // empty object

let user = {
    name: "john",
    age: 22,
    "likes cats": true, // multiword property names
}

console.log(user.name) // property values are accessible by using the dot notation

user.isAdmin = true // add property

delete user.isAdmin // delete property