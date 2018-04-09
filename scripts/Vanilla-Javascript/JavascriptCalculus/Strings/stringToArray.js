//A function that transforms a string in an array

//will make the entire string as an array
function stringToArray(string) {

    if (string.length == 0) {
        throw new Error('The string cannot be empty');
    }

    return string.trim().split();
}


//will make each string character as an array element
function stringToArray(string) {

    if (string.length == 0) {
        throw new Error('The string cannot be empty');
    }

    return string.trim().split('');
}


//will make each string word as an array element
function stringToArray(string) {

    if (string.length == 0) {
        throw new Error('The string cannot be empty');
    }

    return string.trim().split(' '); //the '' needs a space between
}