class Person{
    firstName;
    lastName;
    age;
    email;

    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString(){
        return `${this.firstName}, ${this.lastName}, (age: ${this.age}, email: ${this.email})`;
    }  
}
const person1 = new Person("Galina", "Hurietchieva", 53, "galasport@abv.bg");
console.log(person1.toString());
const person2 = new Person("Snezina", "Tzaneva", 19, "snezi@abv.bg");
console.log(person2);
const arrayPerson = [
    new Person("Bil", "Gray", 45, "bil@abv.bg"),
    new Person("Big", "May", 41, "big@abv.bg"),
    new Person("Ben", "Hay", 55, "ben@abv.bg")
];
console.log(arrayPerson.join("\n"));
