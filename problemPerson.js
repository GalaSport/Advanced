function createPerson(firstName, lastName){
    const  person = {
        firstName,
        lastName,   
    }
    Object.defineProperty(person, "fullName", {
        enumerable: true,
        configurable: true,
        get(){
            return `${person.firstName} ${person.lastName}`;
        },
        set(value){
            [person.firstName, person.lastName] = value.split(" ")

        }
    });
    return person 
}
let myPerson = createPerson("Gala", "Sport");
console.log(myPerson);
console.log(myPerson.fullName);

myPerson.lastName = "Style";
console.log(myPerson.fullName);

myPerson.fullName = "Ana Smith";

console.log(myPerson.lastName);







