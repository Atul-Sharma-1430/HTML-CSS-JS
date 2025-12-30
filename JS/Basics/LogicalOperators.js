let a = true;
let b = false;
console.log("a:", a, "b:", b);

// AND 
console.log("a && b =", a && b); // false (both must be true)

// OR 
console.log("a || b =", a || b); // true (either one is true)

// NOT 
console.log("!a =", !a);         // false
console.log("!b =", !b);         // true



let age = 25;
let hasTicket = true;

// Check if age is between 18 and 30 AND has a ticket
if (age >= 18 && age <= 30 && hasTicket) {
    console.log("Allowed entry.");
} else {
    console.log("Entry not allowed.");
}


// Check if age is below 18 OR above 60
if (age < 18 || age > 60) {
    console.log("Special discount applies.");
} else {
    console.log("Regular pricing.");
}
