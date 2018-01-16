//WILL SUGGESTION

function eulerSix(limit) {
    let sumOfSq = 0;
    let sum = 0;

    for(let i = 1; i <= limit; i++) {
        sumOfSq += Math.pow(i, 2);
        sum += i;
    }

    return Math.pow(sum, 2) - sumOfSq;
}

eulerSix(100);

//EULER SUGGESTION

function eulerSix(limit) {
    let sqofSu, = Math.power(limit * (limit +1) / 2, 2);
    let sumOfSq = (2 * limit + 1) * (limit + 1) * limit /6;
    
    return sqofSum - sumOfSq;
}

// MY ATTEMPT BELOW
// let array = [];

// for(let i = 1; i <= 101; i++) {
//     array.push(Math.pow(i, 2));
// }

// for(let i = 0; i < array.length; i++) {
//     const sum = array[i]
// }

// console.log(array);