function cascadeFunction(startNum, finalNum) {
    let evenResult = [];
    let result = [];

    for (let i = startNum; i <= finalNum; i++) {
        if (i % 2 == 0) {
            evenResult.push(i);
        }
    }
    function deleteOn2EvenNum() {
        for (let evens of evenResult) {

            result.push(evens / 2);
        }
        return result;
    } console.log(deleteOn2EvenNum(evenResult));
}
cascadeFunction(1, 20);

