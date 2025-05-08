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

function isLegal(age: number):boolean {
    return age > 18? true: false;
}

console.log(isLegal(7));

//fucntin take another function as input
function runAfter(fn: () => void) {
    setTimeout(fn,1000);
}

runAfter(function() {
    console.log("heloo");
});

