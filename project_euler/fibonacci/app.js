function fibonacci(limit) {
    const fibonacciArray = [1, 2];
    // add last and the second to last number and add it to the array
    for(let i = 0; i < limit; i++) {
        const fibArrayLength = fibonacciArray.length;
        const secondToLastNumber = fibonacciArray[fibArrayLength - 2];
        const lastNumber = fibonacciArray[fibArrayLength - 1];

        fibonacciArray.push(secondToLastNumber + lastNumber);
    }
    
    const evenArray = fibonacciArray.filter((currentNumber) => {
        return currentNumber % 2 === 0;
    })

    return evenArray.reduce((prev, curr) => {return prev + curr;});
}

fibonacci(10);

// function makeSequence() {
//     const fibSequence = [1,2];
    
//     for(let i = 0; i < 8 ; i++) {
//         const firstNum = fibSequence[i];
//         const secondNum = fibSequence[i + 1];
//         const nextNum = firstNum + secondNum;
//         fibSequence.push(nextNum);
//     }
//     console.log(fibSequence);

//     for(let i = 0; i < fibSequence.length; i++) {
//         if(fibSequence[i] % 2 == 0) {
//             fibSequence.splice(fibSequence[i], 1);
//         }
//         console.log(fibSequence);
//     }
// }

// makeSequence();