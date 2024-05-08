function biggerHalf(array){
    let sortedArray = array.sort((a,b) => a - b);
    let halfIndex = Math.floor(sortedArray.length / 2);

    let resultArray = [];
    for (let i = halfIndex; i < sortedArray.length; i++) {
        currEl = array[i];
        resultArray.push(currEl);
        
    }
    return resultArray;
}
biggerHalf([4, 7, 2, 5]);//[5, 7]
biggerHalf([3, 19, 14, 7, 2, 19, 6]);//[7, 14, 19, 19]