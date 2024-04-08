function aggregateElements(array){
    let sum1 = array.reduce((a,b) => a + b);
    let sum2 = array.reduce((a, b) => a + 1 / b, 0);
    let concatenate = [];
    for(el of array){
        curEl = String(el);
        concatenate += `${curEl}`;
    }
    console.log(sum1);
    console.log(sum2);
    console.log(concatenate);
}
aggregateElements([1, 2, 3]);//6   1.833333    123