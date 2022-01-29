const num1 = +prompt("Please enter a  first number");
const mathOperator = prompt("Please choose a transaction operator(+,-,*,/)");
const num2 = +prompt("Please enter a second number");
var result ;
switch (mathOperator) {
    case "+":
        result = num1+num2;
        break;
    case "-":
        result = num1-num2;
        break;
    case "*":
        result = num1*num2;
        break;
    case "/":
        result = num1/num2;
        break;
    default:
        result = "You entered an incorrect value, please try again.";
        break;
}
console.log(result);