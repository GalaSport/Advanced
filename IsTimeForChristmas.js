function isTimeForChristmas(input){
    let date = new Date(input);
    let christmas = new Date('2024-12-25');
    
    if(date.getTime() === christmas.getTime()){
        console.log("Merry Christmas!"); 
    }else{
        console.log(`There's still time until Christmas!`);
    }  
}
isTimeForChristmas('2024-12-25');