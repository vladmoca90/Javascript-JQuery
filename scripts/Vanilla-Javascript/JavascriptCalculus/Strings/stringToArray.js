//A function that transforms a string in an array

function stringToArray(string) {
    if (string.length == 0) {
        throw new Error('The string cannot be empty');
    }

    return string.trim().split();
}