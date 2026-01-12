//Install necessary packages
//Create and verify a JWT
//Decode the payload of the JWT
const jwt = require('jsonwebtoken');

function createToken(userId) {
    const jwtSecretKey = 'yoyo';

    let data = {
        time: Date(),
        userId: userId
    }

    return jwt.sign(data, jwtSecretKey)
}

function verfiyToken(token) {
    const jwtSecretKey = 'yoyo';

    try {
        return jwt.verify(token, jwtSecretKey);
    } catch (error) {
        return error;
    }
}

function decodePayload(token) {
    return jwt.decode(token)
}

console.log()
console.log(createToken(1))
console.log(createToken(1))
