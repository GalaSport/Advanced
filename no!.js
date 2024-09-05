function solve(array){
    let included = array.includes(7)//само с примитивни данни
    if(!included){
        console.log("Yes");
        
    }else{
        console.log("No");
        
    }
}
//solve([2, 4, 6, 8]);

function solve2(array) {
    let finded = array.find((el) => el.product == "coffee"); // с обекти
    if (finded){
        console.log("true");
   
    }  
     
}
solve2([{product: "coffee", quantity: 3}, {product: "tea", quantity: 2}, {product: "water", quantity: 1}]);