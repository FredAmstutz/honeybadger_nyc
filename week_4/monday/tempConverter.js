var temp = prompt('Temperature');
var scale = prompt('Scale');

if (scale === 'C to F') {
    temp = temp * 1.8 + 32;
    console.log(temp);
} else if (scale === 'F to C') {
    temp = (temp - 32) * .5556;
    console.log(temp);
}