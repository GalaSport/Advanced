function extractIncreasingSubsetFromArray(array){
    let resultArray = [];
    let firstEl = array.shift();
    resultArray.push(firstEl);
   for (let i = 0; i < array.length; i++) {
       let currEl = array[i];

       if(currEl > resultArray[resultArray.length - 1]){
        resultArray.push(currEl);
       }
   }
   return resultArray
}
function extract2(data){
    let result = [];
    let biggestOne = data.shift();
    result.push(biggestOne);
    data.forEach(x => {
        if(biggestOne <= x){
            biggestOne = x;
            result.push(biggestOne);
        }
    });
    return result
}
console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));//[1, 3, 8, 10, 12, 24]
console.log(extract2([1, 3, 8, 4, 10, 12, 3, 2, 24]));
//extractIncreasingSubsetFromArray([1, 2, 3, 4]);//[1, 2, 3, 4]
//extractIncreasingSubsetFromArray([20, 3,2, 15, 6, 1]);//20