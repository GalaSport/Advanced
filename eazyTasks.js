function sumFromNum1ToNum2(num1, num2){
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        if(i % 2 !== 0){
            sum += i;    
        }  
    }
    console.log(sum);
}
sumFromNum1ToNum2(1, 5);


function sumReduce(num1, num2){
    let array = [];
    for (let i = num1; i <= num2; i++) {
        array.push(i);   
    }
    let sum = array.reduce((a, b) => a+b);

console.log(sum);
}
sumReduce(1, 10)

