/// generics

function fristEle<T>(arr: T[]) {
    return arr[0]
}

console.log(fristEle<string | number >([2,4,5,6,7,"Lavkush"]))
console.log(fristEle(["lavkush","kushwaha"]) + 56)
console.log(fristEle(["lavkush","kushwaha"]).toUpperCase())