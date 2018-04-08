//A function that convers a number into a string an returns true if the length is equal to 2

function numberToString(n) {
    if (n <= 0) {
        throw new Error('The number must be positive');
    }

    var toString = n.toString();

    if (toString.length !== 2) {
        return false;
    }

    return true;
}