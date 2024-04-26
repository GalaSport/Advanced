function stringlength(s1, s2, s3){
    let sum = s1.length + s2.length + s3.length;
    let average = Math.floor(sum / 3);
    console.log(sum);
    console.log(average);
}
stringlength('chocolate', 'ice cream', 'cake');//22  7
stringlength('pasta', '5', '22.3');//10  3