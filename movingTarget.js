function movingTarget(inputArray) {
    let targets = inputArray.shift().split(" ").map(Number);
    let indeX = 0;
    let command = inputArray[indeX];

    while (command != "End") {
        let tokens = command.split(" ");
         let commandManipulating = tokens[0];
         let index = Number(tokens[1]);
        let value = Number(tokens[2]);


        if(commandManipulating == "Shoot"){
            if(index < 0 || index >= targets.length){
                indeX++;
                command = inputArray[indeX];
                continue;
            }else{
                targets[index] = targets[index] - value; 
                if(targets[index] <= 0 ) {
                    targets.splice(index, 1);
                }
            }

        }else if(commandManipulating == "Strike"){
            if(index < 0 || index >= targets.length || (index - value) < 0){
                console.log(`Strike missed!`);
            }else{
                targets.splice((index - value), value + 1 + value);
            }

        }else if(commandManipulating == "Add"){
            if(index < 0 || index >= targets.length){
                console.log("Invalid placement!");  
            }else{
             targets.splice(index, 0, value);   
            } 
        }       
    indeX++;
    command = inputArray[indeX];
    }
console.log(`${targets.join("|")}`);
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]); //Invalid placement!//52|100
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])//Strike missed!//1|2|3|4|5

    
