function positiveNegdtiveNumbers(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        currelement = array[i];
        if(currelement < 0){
            newArray.unshift(currelement);
        }else{
            newArray.push(currelement);
        }
    }
    console.log(newArray.join("\n"));
}
positiveNegdtiveNumbers([7, -2, 8, 9]);//-2 7 8 9