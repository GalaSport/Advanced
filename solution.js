function solve(text, conven) {
    const resultRef = document.getElementById("result");
    let textValue = document.getElementById("text").value;
    let convention = document.getElementById("naming-convention").value;
    textValue.toLowerCase();
    let result = "";

    if (convention == "Camel Case") {
        textArr = textValue.split(" ");
        result = textArr.shift();

        textArr.forEach(word => {
            result += word[0].toUpperCase() + word.substring(1).toLowerCase();
        })
    } else if (convention == "Pascal Case") {
        textArr = textValue.split(" ");
       // result = textArr.shift();

        textArr.forEach(word => {
            result += word[0].toUpperCase() + word.substring(1).toLowerCase();
        })
    }else if (convention != "Pascal Case" || "Camel Case"){
        result = "Error!"
    } 

    resultRef.textContent = result;
}
