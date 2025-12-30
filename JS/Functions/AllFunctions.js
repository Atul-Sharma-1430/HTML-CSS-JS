// Normal function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Atul"));

const square = function(n) {
    return n * n;
}
console.log(square(6));


// Function with default parameters
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5));    
console.log(multiply(5, 3)); 


// Self-invoking function (IIFE)
(function() {
    console.log("This runs automatically by its own");
})();


// Arrow function
const add = (x, y) => x + y;
console.log(add(4, 7));


// Function calling another function
function doubleAndAdd(a, b) {
    const sum = add(a, b); // 
    return sum * 2;
}
console.log(doubleAndAdd(3, 5));
