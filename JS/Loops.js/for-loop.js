// Simple For Loop
for (let i = 0; i < 5; i++) {
  console.log("For Loop:", i);
}

// For-In Loop (Object)
const student = { name: "Aditya", age: 20, course: "CSE" };
for (let key in student) {
  console.log("For-In Loop:", key, student[key]);
}

// For-Of Loop (Array)
const languages = ["JS", "Python", "Java"];
for (let lang of languages) {
  console.log("For-Of Loop:", lang);
}

// For-Each Loop (Array Method)
const numbers = [1, 2, 3];
numbers.forEach((num, index) => {
  console.log("For-Each Loop:", index, num);
});

// For Loop with break and continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop loop
  console.log("Break/Continue Loop:", i);
}
