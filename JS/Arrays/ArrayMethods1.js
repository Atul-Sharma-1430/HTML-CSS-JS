let numbers = [1, 2, 3, 5, 6, 7];

// forEach - print each number
numbers.forEach(function (number) {
  console.log(number);
});


// reduce - sum of all numbers
let sum = numbers.reduce(function (acc, nextNum) {
  return acc + nextNum;
}, 0);
console.log("Sum:", sum); // 24


// map - double each number
let doubleNums = numbers.map(function (number) {
  return number * 2;
});
console.log("Doubled:", doubleNums); // [2, 4, 6, 10, 12, 14]


// filter - get numbers greater than 4
let filtered = numbers.filter(function (number) {
  return number > 4;
});
console.log("Filtered (>4):", filtered); // [5, 6, 7]


// find - find first number divisible by 2
let firstEven = numbers.find(function (number) {
  return number % 2 === 0;
});
console.log("First even:", firstEven); // 2


// some - check if any number is greater than 6
let hasLarge = numbers.some(function (number) {
  return number > 6;
});
console.log("Any >6:", hasLarge); // true


// every - check if all numbers are positive
let allPositive = numbers.every(function (number) {
  return number > 0;
});
console.log("All positive:", allPositive); // true


// sort - sort numbers descending
let sortedDesc = numbers.slice().sort(function (a, b) {
  return b - a;
});
console.log("Sorted descending:", sortedDesc); // [7, 6, 5, 3, 2, 1]


// sort - sort numbers ascending
let sortedAsc = numbers.slice().sort(function (a, b) {
  return a - b;
});
console.log("Sorted descending:", sortedDesc); // [1, 2, 3, 4, 5, 6, 7]


// Sq finding
let sqNums = numbers.map((num) => num ** 2);
console.log("Squared Numbers: ", sqNums)
