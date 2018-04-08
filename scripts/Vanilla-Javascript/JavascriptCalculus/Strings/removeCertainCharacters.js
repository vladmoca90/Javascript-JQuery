//A function that removes a certain number of characters from a string

function removeFromString(string, n) {

    if (string.length == 0) {
        throw new Error('String cannot be empty');
    }

    return string.slice(0, n);
}