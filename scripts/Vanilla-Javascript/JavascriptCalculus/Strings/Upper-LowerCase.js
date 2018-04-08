//A function that write a string uppercase
function upperCaseString(string) {

    if (string.length == 0) {
        throw new Error('String cannot be empty');
    }

    return string.toUpperCase();
}

//A function that write a string lowercase
function lowerCaseString(string) {

    if (string.length == 0) {
        throw new Error('String cannot be empty');
    }

    return string.toLowerCase();
}