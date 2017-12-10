// Round 0

// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.


function lengths(array) {
    const numArray = array.map(function(item) {
        return item.length;
    });
    return numArray;
};

// Round 1

// Write a function fizzbuzzer that accepts a single parameter as an argument, a number, and will return the following:

// - The string "Fizz" if the number is evenly divisible by 3
// - The string "Buzz" if the number is evenly divisible by 5
// - The string "FizzBuzz" if the number is evenly divisible by 3 AND 5
// - The string "McClane" if the number is not divisible by 3 OR 5

function fizzbuzzer(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (num % 5 === 0) {
        return 'Buzz';
    }
    else if (num % 3 === 0) {
        return 'Fizz';
    }
    else {
        return 'McClane';
    }
};

// Round 2

// Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

// Use your function to find the following answers.

// transmogrifier(5, 4, 3) = 8000
// transmogrifier(13, 12, 5) = 92389579776
// transmogrifier(42, 13, 7) = 14466001271480793000

function transmogrifier(num1, num2, num3) {
    return (num1 * num2) ** num3;
};



