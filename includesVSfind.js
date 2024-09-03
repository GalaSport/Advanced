function solve1(array){

    let check = array.includes("Ana")
    console.log(check);//връща само тру и фолс

}
function solve2(array){

    let findedEl = array.find((el) => el.author === "Tolstoy" );//намира първия ел.
    console.log(findedEl);
    
}

let arrayNum = [2, 4, 6, 8];
let arrayString = ['Ana', "Bill", "John"];
let arrayObject = [{book: "Piece and war", author: "Tolstoy"}, {book: "Dead souls", author: "Gogol"}];
//solve1(arrayString)
solve2(arrayObject);

