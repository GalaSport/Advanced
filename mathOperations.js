function mathOperations(a, b, string){
    let res;
    switch (string) {
        case '+':   
          res = a + b;  
            break;
        case '-':
            res = (a - b);
            break;
        case '*':
            res = a * b;
            break;
        case '/':
            res = a / b;
            break;
        case '%':
            res = a % b;
            break;
        case '**':
            res = a ** b;
            break;
    }
    console.log(res);
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');