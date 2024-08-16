function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function(){
    console.log(`${this.name} says Hello!`);
    
}
function Student(name, age, grade){
    Person.call(this, name, age);
    this.grade = grade;
}

Object.setPrototypeOf(Student.prototype, Person.prototype);
const person1 = new Student("Peter", 11, "fifth");

console.log(person1);
person1.sayHello();
console.log(person1 instanceof Student);

//Student {name: 'Peter', age: 11, grade: 'fifth'}
//Peter says Hello!
//true

