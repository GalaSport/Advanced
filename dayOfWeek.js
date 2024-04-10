function dayOfWeek(string){
    let res;
    if(string == 'Monday'){
        res = 1;
    }else if(string == "Tuesday"){
        res = 2;
    }else if(string == "Wednesday"){
        res = 3;
    }else if(string == "Thursday"){
        res = 4;
    }else if(string == "Friday"){
        res = 5;
    }else if(string == "Saturday"){
        res = 6;
    }else if(string == "Sunday"){
        res = 7;
    }else{
        res = "error";
    }
    console.log(res);
}
dayOfWeek('Monday');//1
dayOfWeek('Invalid');//error





