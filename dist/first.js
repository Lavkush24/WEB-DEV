"use strict";
let x = 1;
x = 45;
console.log(x);
function print(s) {
    console.log("hello " + s);
}
print("Lavkush");
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 5));
function runAfter(fn) {
    setTimeout(fn, 1000);
}
runAfter(function () {
    console.log("heloo");
});
function isLegal(user) {
    return user.age > 18 ? true : false;
}
function Greet(user) {
    console.log("hello" + user.firstName);
}
let r = isLegal({
    firstName: "Lavkush",
    lastName: "Kushwaha",
    age: 19
});
console.log(r);
