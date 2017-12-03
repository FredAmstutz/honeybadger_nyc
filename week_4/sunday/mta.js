var trains = ['The (L) Train', 'The (N) Train', 'The (S)ix Train']
var lTrain = ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave', 'Bedford Ave'];
var nTrain = ['Times Square', 'Herald Square', '28th St', '23rd St - WHAM Nexus', 'Union Square', '8th St'];
var sTrain = ['Grand Central', '33rd St', '28th St', '23rd St', 'Union Square', 'Astor Place'];

console.log(trains);

var userChoice;

while (userChoice !== "Q") {
    userChoice = prompt('Please enter the letter in the parentheses of the train that you would like to select, or enter Q to quit.').toUpperCase();
    if (userChoice == "L") {
        console.log('The (L) Train');
        console.log(lTrain);
        console.log('Thank you for riding our decaying public transit system.');
    } else if (userChoice == "N") {
        console.log('The (N) Train');
        console.log(nTrain);
        console.log('Thank you for riding our decaying public transit system.');
    } else if (userChoice == "S") {
        console.log('The (S)ix Train');
        console.log(sTrain);
        console.log('Thank you for riding our decaying public transit system.');
    } else {
        console.log('Please enter a valid train selection.');
    }
}

if (userChoice == "Q") {
    alert('Thanks for using the MTA system. Congratulations on being late to work again.');
}
