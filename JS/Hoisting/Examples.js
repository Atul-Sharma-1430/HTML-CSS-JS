
// var hoisting
console.log(a); // undefined (declaration hoisted)
var a = 10;
console.log(a); // 10



// let hoisting (TDZ)
try {
    console.log(b); // ReferenceError
} catch (e) {
    console.log("let hoisting error");
}
let b = 20;
console.log(b); // 20


// const hoisting (TDZ)
try {
    console.log(c); // ReferenceError
} catch (e) {
    console.log("const hoisting error");
}
const c = 30;
console.log(c); // 30



// Function declaration hoisting
sayHello(); // works
function sayHello() {
    console.log("Hello from function declaration");
}


// Function expression hoisting
try {
    sayHi(); // TypeError as sayHi is the variable in whichi it is stores  it is not function
} catch (e) {
    console.log("function expression error");
}

var sayHi = function () {
    console.log("Hi from function expression");
};
sayHi(); // works now



// Arrow function hoisting
try {
    sayArrow(); // TypeError
} catch (e) {
    console.log("arrow function error");
}

const sayArrow = () => {
    console.log("Hello from arrow function");
};
sayArrow(); // works now


