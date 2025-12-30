// Create a new Date object for the current date and time
let samay = new Date();

console.log("Current date and time:", samay); //  eg: 2025-12-30T17:02:10.886Z

console.log("Year:", samay.getFullYear());    // gives year 
console.log("Month:", samay.getMonth() + 1);  // gives month (0-11, so add 1)
console.log("Date:", samay.getDate());        // gives date of the month 
console.log("Day of week:", samay.getDay());  // gives day of week (0=Sunday, 1=Monday, and so on)

console.log("Hours:", samay.getHours());      // gives hours (0-23)
console.log("Minutes:", samay.getMinutes());  // gives minutes (0-59)
console.log("Seconds:", samay.getSeconds());  // gives seconds (0-59)

console.log("Timestamp:", samay.getTime());   // milliseconds since Jan 1, 1970

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is:", days[samay.getDay()]); // convert day number to name
