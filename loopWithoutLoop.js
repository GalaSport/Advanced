function solution(name){

    console.log(`${name} ${tasksArray[0]}`);
    tasksArray.push(tasksArray.shift());
    
}
let tasksArray = ['play aerobic.', "read book.", "write code."]
solution('Gala');//Gala play aerobic.
solution('Gala');//Gala read book.
solution('Gala');//Gala write code.


