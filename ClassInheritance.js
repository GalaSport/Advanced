class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`${this.name} says hello!`);   
    }
}
class Student extends Person{
        constructor(name, age, grade){
            super(name, age);
            this.grade = grade;
        }
}
let person1 = new Person("Ana", 25);
console.log(person1); //Person {name: 'Ana', age: 25}
person1.sayHello(); //Ana says hello!
let student1 = new Student("Tom", 9, "first");
console.log(student1); //Student {name: 'Tom', age: 9, grade: 'first'}
student1.sayHello(); //Tom says hello!


