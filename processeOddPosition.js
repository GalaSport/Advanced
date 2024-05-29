function processOddPosition(array){
    let oddArray = [];
    for (let i = 1; i < array.length; i+=2) {
        currElement = array[i];
        oddArray.push(currElement); 
    }
    let multiplyArray = oddArray.map((a) => a * 2).reverse();

    return multiplyArray.join(" ");
}
processOddPosition([10, 15, 20, 25]);//50 30