function lagestNumber(a, b, c){
    let number = Math.max(a, b, c);

    console.log(`The largest number is ${number}.`);
}
lagestNumber(5, -3, 16);//The largest number is 16.
lagestNumber(-5, -5, -22.5);//The largest number is -3.

function biggest(a, b, c){
    let res;
    if(a>b && a>c ){
        res = a;
    }else if(b>a && b>c){
        res = b;
    }else if(c>a && c>b){
        res = c;
    }
    console.log(`The largest number is ${res}.`);
}
biggest(5, 9, 3);