function equalArrays(array1, array2) {

    if(JSON.stringify(array1) === JSON.stringify(array2)){
        console.log("Arrays are equal");
    }else{
        console.log("Arrays are not equal"); 
    }   
}
//equalArrays([1, 2, 3], [1, 2, 3]);
equalArrays([1, 2, 3], [1, 3, 3]);
