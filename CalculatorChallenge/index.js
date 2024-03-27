function calculator(num1, num2, operator){
    switch(operator)
    {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            return "Wrong Operator";
            break;
    }
}


console.log(calculator(2, 4, '+'));
console.log(calculator(8, 4, '-'));
console.log(calculator(2, 4, '*'));
console.log(calculator(8, 4, '/'));
console.log(calculator(2, 4, '&'));