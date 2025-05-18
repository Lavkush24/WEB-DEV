const jwt = require("jsonwebtoken");

//decode, verify and generate

const value = {
    name: "lavkush",
    accountNumber: 239565446518,
}

const token = jwt.sign(value,"secret");
console.log(token);

