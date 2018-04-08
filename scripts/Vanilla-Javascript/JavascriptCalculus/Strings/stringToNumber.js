//A function that transforms a string into a number

function stringToNumber(string) {

    if (string.length == 0) {
        throw new Error('The string cannot be empty');
    }

    return parseInt(string);
}