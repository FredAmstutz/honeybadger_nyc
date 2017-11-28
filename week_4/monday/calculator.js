var firstNum = prompt('Enter a number:');
var secondNum = prompt('Enter another number:');
var operation = prompt('Enter some math operator (+, -, /, or *)');


if (operation === '+') {
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    result = firstNum + secondNum;
    console.log(result);
} 
else if (operation === '-') {
    result = firstNum - secondNum;
    console.log(result);
} 
else if (operation === '*') {
    result = firstNum * secondNum;
    console.log(result);
} 
else if (operation === '/') {
    result = firstNum / secondNum;
    console.log(result);
} 
else {
    console.log('you suck brah');
}