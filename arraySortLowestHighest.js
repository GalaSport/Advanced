function sort(array){
    array.sort((a, b) => a - b)
    console.log(array);

    array.sort((b, a) => a - b)
    console.log(array);
}
sort([6, 3, 5, 2, 1, 4])