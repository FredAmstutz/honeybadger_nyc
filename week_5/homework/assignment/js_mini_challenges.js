// 1. Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.

const num1 = 15;
const num2 = 35;
const sum = num1 + num2;

console.log(sum);

const string1 = 'Java';
const string2 = 'Script';
const fullString = string1 + string2;

console.log(fullString);

// 2. Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

const coldAmericanLightBeer = [
    ['Bud Light', 'Bud Select', 'Budweiser'],
    ['Coors Light', 'Keystone Light', 'Miller Lite'],
    ['Busch Light', 'Natural Light', 'Milwaukees Best']
];

console.log(coldAmericanLightBeer[0][2]);
console.log(coldAmericanLightBeer[2][0]);

// 3. Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.

const myNum = 78;

if (myNum < 100) {
    alert('The variable is less than 100.');
}
else {
    alert('Your number was ' + myNum + ' and it is greater than 100.');
}

// 4. Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.

function myFunc(name) {
    console.log(name);
};

myFunc('Fred');

// 5. Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.

function door(selection) {
    if (selection === 1) {
        alert('Your prize is a sports car!');
    }
    else if (selection === 2) {
        alert('Your prize is a dream vacation!');
    }
    else if (selection === 3) {
        alert('Your pize is a new mansion!');
    }
    else if (selection === 4) {
        alert('Your prize is soup.');
    }
    else {
        alert('Please enter an option of 1, 2, 3, or 4.');
    }
};

door(2);
door(4);