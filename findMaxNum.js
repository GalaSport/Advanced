function maxNum(array){
    let maxNum = array[0];
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        if(currentElement >= maxNum){
            maxNum = currentElement;
        }   
    }  
    console.log(maxNum);   
}
maxNum([1, 4, 3, 4, 2, 8])