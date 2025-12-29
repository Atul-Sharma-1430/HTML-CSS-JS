// Base object
const stud = {
  Name: "Atul",
  Surname: "Sharma",
  Standard: "14th",
  Division: "C",
};

// Creating object using Object.create()
let Student1 = Object.create(stud);

console.log(Student1.Division); // C
console.log(Student1.Name);     // Atul
console.log(Student1.Surname);  // Sharma
console.log(Student1.Standard);// 14th

// Creating object using __proto__
let Student2 = {
  __proto__: stud
};

console.log(Student2.Division); // C
console.log(Student2.Name);     // Atul
console.log(Student2.Surname);  // Sharma
console.log(Student2.Standard);// 14th
