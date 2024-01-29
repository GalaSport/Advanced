function calorieObject(array){
    let calObject = {};
    for (let i = 0; i < array.length; i+=2) {
        product = array[i];
        calorie = Number(array[i+1]);
        calObject[product] = calorie;   
    }
    console.log(calObject);
}
calorieObject(['Yoghurt', '48', 'Rise', '138',
'Apple', '52']);