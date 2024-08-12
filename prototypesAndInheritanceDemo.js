let person = {
    name: "Peter",
    age: 27
}
console.log(Object.getOwnPropertyDescriptor(person, "name"));

Object.defineProperty(person, "name", {
    value: 'Peter', 
    writable: true, 
    enumerable: true,
     configurable: true
    
});


