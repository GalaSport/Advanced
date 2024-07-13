function evenOddString(input){
    for (let i = 0; i < input.length; i++) {
        let  currentElement = input[i];
        let type =  typeof(currentElement)
        if(type == "string"){
         
          if(currentElement.length % 2 == 0){
            console.log(`Even`);
           }else {
            console.log(`Odd`);
           }
       } else{
        console.log(`This is not string`); 
       }    
    }
}
evenOddString(["gimnastiks", "tenis", 365])