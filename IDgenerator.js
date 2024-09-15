let idArray = [];
function IDgenertor(){
   
    let id = Math.trunc(Math.random() * (10 - 1+ 1) + 1);
   
    let check = idArray.indexOf(id);
    
    if(check == -1){
        idArray.push(id);
 
        console.log(id);
    }   
}
IDgenertor();
IDgenertor();

IDgenertor();

IDgenertor();
IDgenertor();