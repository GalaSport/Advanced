function add(a, b){
    return a + b;
}
console.log(add(3, 5));

function test(){
    const varA = 3;
    const varB = 5;
    const expectedResult = 8;

   if(add(varA, varB) == expectedResult){
    console.log('true');
   }else{
    console.log('false');
   }
}
test();