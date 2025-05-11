let x: number = 1;
x = 45
console.log(x)


function print(s: string) {
    console.log("hello " + s);
}

print("Lavkush")

function sum(a:number, b:number):number { // here at end explicitly we able to deine return type
     return a+b;
}

console.log(sum(4,5));

// function isLegal(age: number):boolean {
//     return age > 18? true: false;
// }

// console.log(isLegal(7));

//fucntin take another function as input
function runAfter(fn: () => void) {
    setTimeout(fn,1000);
}

runAfter(function() {
    console.log("heloo");
});


interface user {
    firstName: string,
    lastName: string,
    age: number,
    email?:string // here ? indicate that it is (optional)
}


function isLegal(user:user) {
    return user.age > 18 ? true: false;
}

function Greet(user:user) {
    console.log("hello" + user.firstName);
}

let r = isLegal({
    firstName:"Lavkush",
    lastName: "Kushwaha",
    age: 19
})

console.log(r);


type Garg = string | number | boolean;
function gtypes(id: Garg) {

}

gtypes(1)
gtypes("1")
gtypes(true)


type Employee = {
    name: string,
    startTime : Date
};

type Manager = {
    name: string,
    department: string,
};

type TeamLead = Employee & Manager;

const teamlead: TeamLead = {
    name: "lavkush",
    startTime: new Date,
    department: "Software Developer"
}