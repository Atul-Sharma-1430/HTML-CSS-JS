// Variable using var keyword
var a = 5;
console.log(a);

a = 10;
console.log(a);

var a = 42;
console.log(a);

//Vairable using let Keyword 
let b = 62;
console.log(b);
b = 99;
console.log(b);

// Variable using const keyword
const s  = 99;
console.log(s);


//var can be used to store any type of value
console.log("\nStoring values in var.")
var num = 1;
var name  = "Atul";
var float = 4.2;
var char  = 'a';

console.log(num);
console.log(name);
console.log(float);
console.log(char);



// BigInt conversion
let bigInt = 103224119609997990n;
let normNum = 42;

let B2N = Number(bigInt);    // BigInt → Number
let N2B = BigInt(normNum);   // Number → BigInt

console.log(`BigInt to normal number conversion: ${B2N}`); 
console.log(`Normal number to BigInt conversion: ${N2B}`); 



