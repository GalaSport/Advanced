function solve1(array){
    let index = array.indexOf('Jon')
    console.log(index);

}
let arrayNumber = [1, 2, 3, 4];
let arrayString = ['Ana', "Bill", "John"];
let arrayObject =[ {book: "Piece and war", author: "Tolstoy"}, {book: "Dead souls", author: "Gogol"}];

//solve1(arrayString)// има ли го и на кой индекс е, -1 ако го няма 


function solve2(array, book, author){
    let index = array.findIndex((n) => n.book === "Piece and war")
    console.log(index);
}
solve2(arrayObject)//има ли ел. който отговоря на това условие и на кой индекс е, -1 ако го няма

