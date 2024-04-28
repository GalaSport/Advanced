function closureFunction() {
    let count = 5;
    let name = "Peter";

    function sum(a, b) {
        console.log(name);
        return count + a + b;
    }
    let result = sum(3, 5);
    console.log(result);
}
closureFunction();