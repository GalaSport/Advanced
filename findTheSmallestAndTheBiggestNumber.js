function find(array){
    let max = Math.max(...array);
    let min = Math.min(...array);
    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
}
find([1, 9, 7, 0]);