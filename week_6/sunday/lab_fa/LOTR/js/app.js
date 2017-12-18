// ==============================
//       Characters and places
// ==============================

const hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];

const lands = [
  'The Shire',
  'Rivendell',
  'Mordor'
];

// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
  console.log('Trying to make middle earth.');

  let middleEarth = document.createElement('section');

  middleEarth.setAttribute('id', 'middle-earth');
  // add each land to the section as article tags-- try using a loop
  document.body.appendChild(middleEarth);

  for(let land of lands){
   
    let place = document.createElement('article');
   
    // assign the id of the corresponding article tag as the name of the land 
    place.setAttribute('id', land);
  
    // inside each article tag include an h1 with the name of the land
    middleEarth.appendChild(place); 
    let nameOfLand = document.createElement('h1');
 
    nameOfLand.innerHTML = land;
 
    place.appendChild(nameOfLand);
  }
  // append the section to the body of the DOM with: document.body.appendChild( // variable name )
};

function makeHobbits() {
  console.log('Make hobbits');

  let hobbitList = document.createElement('ul');
  let hobbitArray = hobbits.sort();

  for(let i = 0; i < hobbits.length; i++) {
    let halfling = document.createElement('li');
    halfling.innerHTML = hobbitArray[i];
    halfling.classList.add('hobbit');
    hobbitList.appendChild(halfling);
  }
 
  let theShire = document.getElementById('The Shire'); 
  theShire.appendChild(hobbitList);
  
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"
  // list the hobbits alphabetically.  Maybe use the .sort() method.
};

function keepItSecretKeepItSafe() {
  console.log('Keep it secret, keep it safe bruh.');
  let theRing = document.createElement('div');
  theRing.innerHTML = "The Ring";
  theRing.setAttribute('id', 'the-ring');
  
  let frodo = document.getElementsByClassName('hobbit')[0];
  frodo.appendChild(theRing);

  // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
  // add the ring as a child of Frodo
};

function makeBaddies() {
  console.log('Making baddies');
  let baddiesList = document.createElement('ul');

  for(let i = 0; i < baddies.length; i++) {
    let baddy = document.createElement('li');
    baddy.innerHTML = baddies[i];
    baddy.classList.add('baddy');
    baddiesList.appendChild(baddy);
  }

  let mordor = document.getElementById('Mordor');
  mordor.appendChild(baddiesList);

  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
};

function makeBuddies() {
  console.log('Making buddies');
  let fellowship = document.createElement('aside');
  let mordor = document.getElementById('Mordor');
  mordor.appendChild(fellowship);

  let buddiesList = document.createElement('ul');

  for(let i = 0; i < buddies.length; i++) {
    let buddy = document.createElement('li');
    buddy.innerHTML = buddies[i];
    buddy.classList.add('buddy');
    buddiesList.appendChild(buddy);
  }

  fellowship.appendChild(buddiesList);

  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
};

function leaveTheShire() {
  console.log('Leaving the shire.');
  let theShire = document.querySelector('article');
  let hobbits = theShire.querySelector('ul');
  
  let rivendell = document.getElementById('Rivendell');
  rivendell.appendChild(hobbits);

  // grab the hobbits and move them to Rivendell
};

function beautifulStranger() {
  console.log('The beautiful stranger');

  document.getElementsByClassName('buddy')[3].innerHTML = 'Aragorn';
  
  // change the buddy 'Strider' node to "Aragorn"
};

function forgeTheFellowShip() {
  console.log('Forging that fellowship mayne');
  let rivendell = document.getElementById('Rivendell');

  let mordor = document.getElementById('Mordor');
  let buddiesList = mordor.querySelector('aside');

  rivendell.appendChild(buddiesList);

  let theFellowship = document.createElement('div');
  let fellowshipText = document.createElement('h1');

  theFellowship.setAttribute('id', 'the-fellowship');
  fellowshipText.innerHTML = 'The Fellowship';

  theFellowship.appendChild(fellowshipText);

  let sortedHobbits = hobbits.sort();
  let newHobbitList = document.createElement('ul');
  let newBuddyList = document.createElement('ul');

  for(let i = 0; i < sortedHobbits.length; i++) {
    let newHobbit = document.createElement('li');
    newHobbit.innerHTML = sortedHobbits[i];
    newHobbitList.appendChild(newHobbit);
    alert(sortedHobbits[i] + ' has joined your party!');
  }

  theFellowship.appendChild(newHobbitList);

  for(let i = 0; i < buddies.length; i ++) {
    let newBuddy = document.createElement('li');
    newBuddy.innherHTML = buddies[i];
    newBuddyList.appendChild(newBuddy);
    alert(buddies[i] + ' has joined your party!');
  }
  theFellowship.appendChild(newBuddyList);

  rivendell.appendChild(theFellowship);

  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
};

function theBalrog() {

  
  // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css file, add a css rule for the class "the-white"
  // have a white background and a grey border
};

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
};

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
};

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if 
  // it is a child of the div with the id 'gollum'
  // Move Gollum into Mount Doom 
};

function thereAndBackAgain() {
  // remove Gollum and the Ring from the DOM
  // remove all the baddies from the DOM
  // Move all the hobbits back to the shire
};

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
  document.querySelector('#b2').addEventListener('click', makeHobbits);
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
  document.querySelector('#b4').addEventListener('click', makeBaddies);
  document.querySelector('#b5').addEventListener('click', makeBuddies);
  document.querySelector('#b6').addEventListener('click', leaveTheShire);
  document.querySelector('#b7').addEventListener('click', beautifulStranger);
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
  document.querySelector('#b9').addEventListener('click', theBalrog);
  document.querySelector('#b10').addEventListener('click', hornOfGondor);
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
  document.querySelector('#b12').addEventListener('click', weWantsIt);
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain);

};