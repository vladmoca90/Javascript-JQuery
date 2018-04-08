//A function that returns the longest word in a string

function longestWord(string) {

    if (string.length == 0) {
        throw new Error('The string cannot be empty');
    }

    var splitString = string.trim().split(' ');

    var word = splitString[0];

    for (i = 0; i < splitString.length; i++) {
        if(word.length < splitString[i].length) {
            word = splitString[i];
        }
    }

    return word;
}