function magicMatrices(array){
    let r1 = array[0].reduce((acc, val) => acc + val);
    let r2 = array[1].reduce((acc, val) => acc + val);
    let r3 = array[2].reduce((acc, val) => acc + val);
    let c1 = array[0][0] + array[1][0] + array[2][0];
    let c2 = array[0][1] + array[1][1] + array[2][1];
    let c3 = array[0][2] + array[1][2] + array[2][2];

    if(r1 == r2 && r2 == r3 && c1 == c2 && c2 == c3){
        console.log(true);
    }else{
       console.log(false); 
    }  
}
function magicMatrices2(input){
for (let i = 0; i < input.length - 1; i++) {
    let rowOne = input.reduce((acc, value) => {
        acc += value[i];
        return acc
    }, 0);
  let rowTwo = input.reduce((acc, value) => {
    acc += value[i + 1];
    return acc;
  },0);
  let colOne = input[i].reduce((acc, value) => acc + value);
  let colTwo = input[i + 1].reduce((acc, value) => acc + value);  
  if(rowOne !== rowTwo || colOne !== colTwo){
    return false;
  }
}
return true;
}
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 2, 1], [2, 1, 1]]);
magicMatrices2([[1, 2, 1], [2, 1, 1]]);