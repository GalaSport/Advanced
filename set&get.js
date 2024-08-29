class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(name){
        let parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
let myPerson = new Person("Ana", "Smith");
console.log(myPerson);

console.log(myPerson.firstName);
console.log(myPerson.lastName);
console.log(myPerson.fullName);




