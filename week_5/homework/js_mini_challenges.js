// 1. Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.

const num1 = 15;
const num2 = 35;

console.log(15 + 35);

const string1 = 'Java';
const string2 = 'Script';

console.log(string1 + string2);

// 2. Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

const coldAmericanLightBeer = [
    ['Bud Light', 'Bud Select', 'Budweiser'],
    ['Coors Light', 'Keystone Light', 'Miller Lite'],
    ['Busch Light', 'Natural Light', 'Milwaukees Best']
];

console.log(coldAmericanLightBeer[0][2]);
console.log(coldAmericanLightBeer[2][0]);

// 3. Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.

const number = 78;

if (number < 100) {
    alert('The variable is less than 100.');
}
else {
    alert('Your number was ' + number + ' and it is greater than 100.');
}

// Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.

