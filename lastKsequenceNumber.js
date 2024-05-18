function lastKsequenceNumber(n, k){
    let newArr = [1];
       
    for (let i = 1; i < n; i++) {
         let sum = 0;
        for(let j = Math.max(0, i-k); j < i; J++){
        sum += newArr[j];
        }
        newArr.push(sum);
    }
    console.log(newArr.join(" ");
}
lastKsequenceNumber(6, 3); //[1, 1, 2, 4, 7, 13]
