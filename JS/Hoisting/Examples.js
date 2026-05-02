
// var hoisting
console.log("Line 3", a); // undefined (declaration hoisted)
var a = 10;
console.log("Line 5", a); // 10



// let hoisting (TDZ)
try {
    console.log("Line 11", b); // ReferenceError --> Will Not be Printed
} catch (e) {
    console.log("Line 13 let hoisting error");
}
let b = 20;
console.log("Line 16", b); // 20


// const hoisting (TDZ)
try {
    console.log("Line 21", c); // ReferenceError --> Will Not be Printed
} catch (e) {
    console.log("Line 23 const hoisting error");
}
const c = 30;
console.log("Line 26", c); // 30



// Function declaration hoisting
sayHello(); // works
function sayHello() {
    console.log("Line 33 Hello from function declaration");
}


// Function expression hoisting
try {
    sayHi(); // TypeError as sayHi is the variable in whichi it is stores  it is not function
} catch (e) {
    console.log("Line 41 function expression error");
}

var sayHi = function () {
    console.log("Line 45 Hi from function expression");
};
sayHi(); // works now



// Arrow function hoisting
try {
    sayArrow(); // TypeError
} catch (e) {
    console.log("Line 55 arrow function error");
}

const sayArrow = () => {
    console.log("Line 59 Hello from arrow function");
};
sayArrow(); // works now


