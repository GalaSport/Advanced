function everyNthElOfArray(array, step){
    result = [];
    for (let i = 0; i < array.length; i += step) {
        let currEl = array[i];
        result.push(currEl);
    }
   return result 
}
everyNthElOfArray(['5', '20', '31', '4', '20'], 2); //['5', '31', '20']
console.log(result);
