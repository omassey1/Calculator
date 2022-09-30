const operator = prompt('Enter an operator ( +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter the 1st number: '));
const number2 = parseFloat(prompt('Enter the 2nd number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log("Answer is" + result);