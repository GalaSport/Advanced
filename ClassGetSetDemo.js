class Person{
    constructor(age){
        this.age = age
    }
    get age (){
        return this._age;
    }

    set age(age){
        if(typeof (age) !== "number"){
            throw new Error ("Age must be a number!");
        }else if(age < 0){
            throw new Error ("Age can not be negativ.");
        }   
        this._age = age;
    }
}
let myPerson = new Person(-20);
console.log(myPerson.age);
