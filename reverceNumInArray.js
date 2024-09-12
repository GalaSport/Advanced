function reverseNumInArray(num) {
    let array = [];
    for (let i = 1; i <= num; i++) {
        array.push(i);
    }

    console.log(array);
    let reverseArray = array.reverse();
    console.log(reverseArray);


}
reverseNumInArray(5);


function reverseNumInArray2(num) {
    let array = [];
    for (let i = 1; i <= num; i++) {
        array.push(i);
    }
    console.log(array);
    
    let reverseArray2 = [];
    for (let j = array.length - 1; j >= 1; j--) {
        reverseArray2.push(j);
    }
    console.log(reverseArray2);
}
reverseNumInArray(6);
