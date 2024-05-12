function evenPositionElements(array){
    newArray = [];
    for (let i = 0; i < array.length; i++) {
        currEl= array[i];
        if(i % 2 == 0){
            newArray.push(currEl); 
        } 
    }
    console.log(newArray.join(" "));
}
evenPositionElements(['20', '30', '40',

'50', '60']);//20 40 60