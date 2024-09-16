function numberOfDigitInNumber(num){
    let numAsString = String(num);
    let length = numAsString.length;
    console.log(`In ${num} there are ${length} digits.`);

}
numberOfDigitInNumber(234);
numberOfDigitInNumber(1970);

function numberOfDigitInNumber2(num){
    let length = 0;
   if(num < 10){
    length = 1;
   }
   if(num < 100 && num > 9){
    length = 2;
   }
   if(num > 99 && num < 1000){
    length = 3;
   }
   if (num > 999 && num < 10000){
    length = 4;
   }
    console.log(`In ${num} there are ${length} digits.`);
}
numberOfDigitInNumber2(999);
numberOfDigitInNumber2(9999);