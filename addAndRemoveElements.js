function addAndRemoveElement(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        command = array[i];
        if (command == "add") {
            result.push(i + 1);
        } else if (command == "remove") {
            let lastEl = result.pop();
        }
    }
    if (result.length == 0) {
        console.log("Empty");
    } else {
        console.log(result.join("\n"));
    }
}
//addAndRemoveElement(['add', 'add', 'add','add']);// 1 2 3 4 
//addAndRemoveElement(['add', 'add', 'remove', 'add', 'add']);//1 4 5
addAndRemoveElement(['remove', 'remove', 'remove']);//Empty
