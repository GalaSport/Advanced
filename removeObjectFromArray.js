function solve(array, element){
   
    let newArray = array.filter((el) => el.name !== "Patron");
    array = newArray;
console.log(array);

}
let element = { 
    name: "Patron",
    age: 2,
    owner: "Andrey"
};
let array = [{ 
    name: "Mata",
    age: 7,
    owner: "Gala"
},{ 
    name: "Zaika",
    age: 3,
    owner: "Philip"
},{ 
    name: "Patron",
    age: 2,
    owner: "Andrey"
}]
solve(array, element)