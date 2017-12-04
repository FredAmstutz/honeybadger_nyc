var castle = 10;

function catapult() {
    const number = Math.random();
    while (castle !== 0) {
        if (number > 0.5) {
            castle -= 2;
            document.getElementById("result").innerHTML = 'You struck the castle for 2 damage.';
            document.getElementById("health").innerHTML = 'Castle Health: ' + castle;
            return false;
        }
        else {
            document.getElementById("result").innerHTML = 'You missed. Click to fire again.';
            return false;
        }
    }
    alert('You destroyed the castle. Refresh the page to play again.');
}