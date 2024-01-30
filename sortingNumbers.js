function sortingNumbers(array){
    array.sort((a,b)=> a-b);
   
    let iterCount = Math.ceil(array.length / 2);

    let resultArray = [];
    for (let i = 0; i < iterCount; i++) {
        currEl = array[i];
        let first = array.shift();
        resultArray.push(first);
        let last = array.pop();
        resultArray.push(last);
    }
    if( array.length % 2 == 1){
        resultArray.pop();
    }
  return resultArray;  
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
console.log(sortingNumbers([7 ,3, 12, 8 ,4]));//3, 12, 4, 8, 7

function sortingNumbers2(array){
    let result = [];
    let i = 0
    while(array.length > 0){
        if(i % 2 == 0){
            result.push(array.shift());
        }else{
            result.push(array.pop());
        }
        i++
    }
console.log(result);
}
sortingNumbers2([2, 10, 12, 16, 4, 8]);