function theSameNumbers(num){
    let numAsArray = num.toString().split("").map(Number);
    let sum = numAsArray.reduce((a,b) => a + b);
    let firstArrayEl = numAsArray.shift();
    let isSame = true;
    for (let i = 0; i < numAsArray.length; i++) {
        currElement = numAsArray[i];
        if(firstArrayEl !== currElement){
            isSame = false;  
        }    
    }
    console.log(isSame);
    console.log(sum);  
}
theSameNumbers(2222222);
theSameNumbers(1234);