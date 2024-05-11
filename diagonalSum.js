function  diagonalSum(nestedArray){
    let mainDiagon = [];
    let secondaryDiagon = [];
    for (let i = 0; i < nestedArray.length; i++) {
        //currElement = nestedArray[i];
        for (let j = 0; j < nestedArray.length; j++) {
            currElement = nestedArray[i][j];
            if(j - i == 0){
                mainDiagon.push(currElement);
            }else if(j + i == nestedArray.length){
                secondaryDiagon.push(currElement);
            }
        }  
    }
    console.log(mainDiagon.reduce((acc, value) => acc + value));
    console.log(secondaryDiagon)//.reduce((acc,value) => acc + value));
}
diagonalSum([[20, 40], [10, 60]]);//80 50
diagonalSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);//99 25