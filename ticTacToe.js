function ticTacToe(array){
    let dashboard = [[false,false,false],[false, false, false], [false, false, false]];
   let isFinish = false;
    for (let i = 0; i < array.length; i++) {
        currEl = array[i];
       let tokens = currEl.split(" ");
        let indexRow = Number(tokens[0]);
        let indexCol= Number(tokens[1]);
       
        for (let j = 0; j < dashboard.length; j++) {
            currentElement = array[j];
            if(currentElement == false){
                dashboard.splice([0][1], 1, "X")
            }  
        }
    }
    console.log(dashboard);
}
ticTacToe(["0 1","0 0",
"0 2","2 0",
"1 0","1 1",
"1 2","2 2",
"2 1","0 0"]);