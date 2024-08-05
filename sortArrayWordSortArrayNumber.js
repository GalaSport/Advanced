function sortNumber(array){

    array.sort((a,b) => a - b);
    console.log(array);  
}
sortNumber([4, 2, 3, 3, 1]);

function sortWord(array){

    array.sort((a,b) => a.localeCompare(b));
    console.log(array);
  
}
sortWord(["York", "Ann", "Bell", "York", "Bill"]);
