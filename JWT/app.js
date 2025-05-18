const jwt = require("jsonwebtoken");
const zod = require("zod");
const JWT_SECRET = "secret";
//decode, verify and generate

const value = {
    name: "lavkush",
    accountNumber: 239565446518,
}

const token = jwt.sign(value,JWT_SECRET);
// console.log(token);


const usernameSchema = zod.string().email();
const passSchema = zod.string().min(6);

function signjwt (username,pass) {
    const responceuser = usernameSchema.safeParse(username);
    const responcepass = passSchema.safeParse(pass);

    const token = jwt.sign({
        username: username,
    },JWT_SECRET);

    if(!responcepass.success || !responceuser.success) {
        return null;
    }
    else {
        return token;
    }
}

function decodejwt(token) {
    const value = jwt.decode(token);
    if(decode) {
        return true;
    }
    else {
        return false;
    }
}

const t = "eJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imxhdmt1c2hAZGpmamQuc2RsamYiLCJpYXQiOjE3NDc1MjgwNDZ9.Rm6vYm3kIvTfc7A1AzvyXKpd7vacPEnNttcwc8KigjU"

function verifyjwt(token) {
    try {
        jwt.verify(token,JWT_SECRET);
        return true;
    }
    catch(e) {
         return false;
    }
}

console.log(verifyjwt(t));


