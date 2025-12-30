let fruits = ["Apple", "Banana", "Litchi", "Mango", "Chikoo"];

fruits.forEach((fruit , index) => {
    console.log(`Fruit: ${fruit}, Number: ${index+1}`);
})


// Sorting
fruits.sort();
console.log("Sorted Fruits: ", fruits);


// Sorting poeples based on their age
let peoples = [
    {name : "Atul", age : 18},
    {name : "Vausaj", age : 16},
    {name : "Krishna", age : 12},
    {name : "Rahul", age : 22},
    {name : "Sunita", age : 40},
]
peoples.sort((a,b) => a.age - b.age);
console.log("Peoples after sorting based on their age: ", peoples)