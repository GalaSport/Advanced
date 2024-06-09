function cascade() {
    function sum(startRange, finalRange) {
        let sumNum = 0;
        for (let i = startRange; i <= finalRange; i++) {
            sumNum += i;
        }
        return sumNum;
    }
    function average(startRange, finalRange) {
        let sumNumber = sum(startRange, finalRange);
        let averageNum = sumNumber / (finalRange - (startRange - 1));
        return averageNum;

    }
    console.log(sum(1, 10));
    console.log(average(1, 10));
}
cascade();