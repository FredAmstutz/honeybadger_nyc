// Round 0

// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.


function lengths(array) {
    const numArray = array.map(function(item) {
        return item.length;
    });
    return numArray;
};