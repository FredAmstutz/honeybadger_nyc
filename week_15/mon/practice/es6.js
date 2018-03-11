// VARIABLE DECLARATION

var variable = 'string';
//Block-scoped, with the exception of if/else statements

const anotherVariable = 'string';
//Block-scoped

let yetAnotherVariable = 'string';
//Block-scoped

//(Block scoping is also caleld lexcial scoping)

//DESTRUCTURING

const myObject = { x: 42, y: 88, z: 99 }
// const x = myObject.x;
// const y = myObject.y;
// const z = myObject.z;

//^^Same as below

const { x, y, z } = myObject;

//Works on arrays too

const array = [1, 2, 3, 4, 5, 6, 7];
const one = array[0];
const two = array[1];
//etc.

const [one, two, three] = array;

//CLASSES

class User /* extends Something */ {
    //Extends makes User inherit from Something
    constructor() {
        /* super(); if exteneds was used */
        this.name = 'fred';
    }

    sayHi() {
        return 'Hi';
    }
    sayBye() {
        return 'Bye';
    }
};

//ARROW FUNCTION

router.get('/', function(req, res) {
    res.send('hello');
});

router.get('/', (req, res) => res.send('hello'));


node.addEventListener('click', function(e) {
    console.log(this);
})

node.addEventListener('click', e => console.log(this));

//ASYNC AND AWAIT

PromiseOne.then(function(data) {
    console.log(data);
});

router.get('/', async function(req, res) {
    const data = await PromiseOne();
    console.log(data);
})