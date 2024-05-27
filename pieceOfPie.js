function pieceOfPie(array, string1, string2){
    let firsIndex = array.indexOf(string1);
    let secondIndex = array.indexOf(string2);
    resultArray = [];
    for (let i = firsIndex; i <= secondIndex; i++) {
        currElement = array[i];
        resultArray.push(currElement);//array.slice(firstIndex, secondIndex - 1)
    }
    return resultArray;
}
pieceOfPie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie');//['Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie']