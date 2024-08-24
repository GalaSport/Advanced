function average() {
    array = [];
    for (let i = 1; i < 11; i++) {
        array.push(i);
    }
    let average = 0;
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        average = average + element;
    }
    console.log(array);
    console.log(average);
}
average();

function averageWhitoutLoop(){
    array = [];
    for (let i = 1; i < 11; i++) {
        array.push(i);
    }
    console.log(array);
      let res = array.reduce((a,b) => a + b);
    console.log(res);    
}
averageWhitoutLoop();