function fibonaci(num){
    let fibonaciSequence = [0, 1];
   
   for(let i = 0; i <= num - 2; i++){
    let previos = fibonaciSequence[fibonaciSequence.length - 2];
    let current = fibonaciSequence[fibonaciSequence.length - 1];
    let sum = previos + current;
    fibonaciSequence.push(sum); 
    
   }
   console.log(fibonaciSequence);

}
fibonaci(10);//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function fibonaci2(num){  //without recursion
    let buff = "";
    let f0 = 0;
    buff += `${f0} `;
    let f1 = 1;
    buff += `${f1} `;
    
    for (let i = 0;  i < num - 1 ; i++) {
        let fi = f0 + f1;
        f0 = f1;
        f1 = fi; 
        buff += `${fi} `;
         
    }
    console.log(buff);
}
fibonaci2(10)