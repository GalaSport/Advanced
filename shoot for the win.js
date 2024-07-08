function shootForTheWin(array){
    let targetsSequence = array.shift().split(" ").map(Number);
    let index = 0;
    let command = array[index];
    let count = 0;
  
    while(command != "End" ){
        let indeX = Number(command);
        if(indeX < 0 || indeX >= targetsSequence.length){
        index++;
        command = array[index]; 
        continue;

        };
        let elementShoot = targetsSequence[indeX];
        targetsSequence[indeX] = -1;
        count += 1;
       
            for (let i = 0; i < targetsSequence.length; i++) {
                
                if(elementShoot == -1){
                    continue;
                }
                
                let currentEl = targetsSequence[i];
                    if(elementShoot >= currentEl && currentEl != -1) {
                        targetsSequence[i] = elementShoot + currentEl;
                        
                    }else if (currentEl > elementShoot && currentEl != -1){
                     targetsSequence[i] = currentEl - elementShoot;
                    }           
            }   
     index++;
    command = array[index];
    }
    console.log(`Shot targets: ${count} -> ${targetsSequence.join(" ")}`);
}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);