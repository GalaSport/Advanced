function solve(array){
    let bookCharacter = {};
    for(let i = 0; i < array.length; i+=2){
         let name = array[i];
         let age = Number(array[i+1]);
         bookCharacter[name] = age;
    }
console.log(bookCharacter);
}
solve(["Tommy", "11", "Anika", "9", "Pippi", "10"]);