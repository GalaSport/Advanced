function onlyPositive1(array){
    let positiveArr = []
    for (let i = 0; i < array.length; i++) {
        let currElement = array[i];
        if(currElement >= 0){
            positiveArr.push(currElement)
        }   
    }
    console.log(positiveArr);
}
onlyPositive1([-5, -10, 3, -12, -9, 5, -90, 0, 1, 7])

function onlyPositive2(array){
    let positiveArr2 = []
    for (let el of array) {
        if(el >= 0){
            positiveArr2.push(el);
        }   
    }
    console.log(positiveArr2);
}
onlyPositive2([-5, -10, 3, -12, -9, 5, -90, 0, 1, 7])

function onlyPositive3(array){
    return array.filter(el => el >= 0);
   
}
console.log(onlyPositive3([-5, -10, 3, -12, -9, 5, -90, 0, 1, 7]))