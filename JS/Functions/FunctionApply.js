function greet(greeting, surname, punctuation) {
    console.log(`${greeting}, ${this.name} ${surname}${punctuation}`);
}

const person = { name: "Atul" };

greet.apply(person, ["Hello", "Sharma", "!"]); // Hello, Atul Sharma! --> It means person pe ye function call kro with these parameters 
                                               // Hence greeting = Hello => [0]
                                               //       this.name = Atul
                                               //       surname = Sharma => [1]
                                               //       punctuation = ! => [2]

