function wordsUppercase(string) {
    let pattern = /[A-Za-z]+/gm;
    let wordsMatched = string.match(pattern);

    let output = [];
    for (let word of wordsMatched) {
        let uppercaseWord = word.toUpperCase();
        output.push(uppercaseWord)
    }
    console.log(output.join(", "));
}
wordsUppercase('Hi, how are you?');//HI, HOW, ARE, YOU
wordsUppercase('hello');//HELLO