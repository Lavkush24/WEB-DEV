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
function gtypes(id) {
}
gtypes(1);
gtypes("1");
gtypes(true);
const teamlead = {
    name: "lavkush",
    startTime: new Date,
    department: "Software Developer"
};
function max(arr) {
    let a = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (a < arr[i]) {
            a = arr[i];
        }
    }
    return a;
}
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
}
doSomething(Direction.up);
