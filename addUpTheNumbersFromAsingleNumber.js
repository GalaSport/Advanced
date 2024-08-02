function addUp(num){
    let array = [];

    let sum = 0;

    for (let i = 1; i <= num; i++) {
        array.push(i);
        
    }
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        sum += element;  
    }
    console.log(array);
    console.log(sum);   
}
addUp(13)