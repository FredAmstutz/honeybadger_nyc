// const apartment = {
//     name: 'The Pelican',
//     yearCompleted: 2015,
//     neighborhood: 'Williamsburg',
//     totalUnits: 24,
//     availableLayouts: ['studio', 'studio', '1 BR', '1 BR'],
//     availableUnits: 4,
//     occupiedUnits: 20,
//     rent: 1000,
//     collectRent: function () {
//         this.occupiedUnits * 1000;
//     }
// }

// const lamp = {
//     wattage: 60,
//     on: false,
//     turnOff: function () {
//         if (this.on === true) {
//             this.on = false;
//             console.log('You turned off the lamp.');
//         }
//         else {
//             console.log('The lamp is already off.');
//         }
//     },
//     turnOn: function () {
//         if (this.on === false) {
//             this.on = true;
//             console.log('You turned on the lamp.');
//         }
//         else {
//             console.log('The lamp is already on.');
//         }
//     },
//     status: function () {
//         if (this.on) {
//             console.log('The lamp is on.');
//         }
//         else {
//             console.log('The lamp is off.');
//         }
//     }
// }

// const pokemon = {
//     name: 'Onix',
//     type: 'rock',
//     size: '5 meters',
//     abilities: ['tackle', 'avalanche', 'growl', 'rockthrow'],
//     baseFriendship: 70,
//     attackOpponent: function () {
//         console.log('Onix, use ' + this.abilities[1] + "!");
//     }
// }

//POKEMON FACTORY

// function Pokemon(name, type, size, abilities, baseFriendship) {
//     this.name = name;
//     this.type = type;
//     this.size = size;
//     this.abilities = abilities;
//     this.baseFriendship = baseFriendship;
// }

// Pokemon.prototype.attackOpponent = function () {
//     console.log('Pokemon, use ' + this.abilities[1] + "!");
// }

//MINION FACTORY

function Minion(name, numberOfEyes, color) {
    this.name = name;
    this.numberOfEyes= numberOfEyes;
    this.color = color;
}

Minion.prototype.eatBanana = function () {
    //Eat the banana here
}

Minion.prototype.performEvilTask = function () {
    //Perform the evil task here.
}

Minion.prototype.changeNumberOfEyes = function () {
    //Change number of eyes here
}

Minion.prototype.changeColors = function () {
    //Change colors here
}