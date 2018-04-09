//A function that capitalizes each word in a string

function capitalizeEachElem(string) {

    if (string.length == 0) {
        throw new Error('The string cannot be empty');
    }

    var splitString = string.trim().split(' ');

    for (i = 0; i < splitString.length; i++) {
        splitString[i].charAt(0).toUpperCase();
    }

    return splitString.join(' ');
}