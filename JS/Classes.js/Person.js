class Person {
    constructor(name, age) {  // Constructor
        this.name = name; 
        this.age = age;   
    }

    greet() {
        console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`);
    }

    isAdult() {
        return this.age >= 18;
    }
}

// Object 1
let person1 = new Person("Raj", 25);
person1.greet(); 
console.log("Is adult?", person1.isAdult()); 

// Object 2
let person2 = new Person("Soham", 16);
person2.greet();
console.log("Is adult?", person2.isAdult()); 

// Inheritance example
class Student extends Person {
    constructor(name, age, grade) {  // Constructor
        super(name, age); 
        this.grade = grade; 
    }

    study() {
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
}

// Student Object
let student1 = new Student("Atul", 20, 14);
student1.greet();   
student1.study();   
console.log("Is adult?", student1.isAdult()); 
