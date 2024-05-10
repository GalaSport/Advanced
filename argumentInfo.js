function argumentInfo(...array) {
    let res = {}
    for(let el of array){
        let type = typeof(el);
        console.log(`${type}: ${el}`);
        if(!res.hasOwnProperty(type)){
            res[type] = 0;
        }
        res[type] += 1; 
    }  
    let sortedResult = Object.entries(res).sort((a,b) => b[1] - a[1]);
    for(let [k,v] of sortedResult){
        console.log(`${k} = ${v}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!');});
//string: cat
//number: 42
//function: function () { console.log('Hello world!');}
//string = 1
//number = 1
//function = 1