function Person(name, age){
    this.name = name,
    this.age = age
}
Person.prototype.sayHello = function(){
    console.log(`${this.name} says hello!`);
    
}
let obj = new Person("Peter", 27);

console.log(obj);
obj.sayHello();

