let cat = {
    name: "Mata",
    age: 7
}
console.log(Object.getOwnPropertyDescriptor(cat, "name"));

Object.defineProperty(cat, "name",{
    value: 'Mata', 
    writable: false, 
    enumerable: true, 
    configurable: true
});
cat.name = "Suzi"
console.log(cat);
console.log(Object.entries(cat, "name"));

