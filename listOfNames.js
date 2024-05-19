function listOfNames(array){
    resultArray = array.sort((a,b) => a.localeCompare(b));
    for(let i = 0;i < resultArray.length; i++ ){
        let currEl = resultArray[i];
        console.log(`${i+1}.${currEl}`);
    }
}
function listOfNames2(array){
    array.sort((a,b) => a.localeCompare(b));
     array.forEach((currEl, i) => {
        console.log(`${i+1}.${currEl}`);
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);//1.Bob 2.Christina 3.Ema 4.John
listOfNames2("John", "Bob", "Christina", "Ema");