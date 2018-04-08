//A function that returns the longest word in a string

function longestWordLength(string) {

    if (string.length == 0) {
        throw new Error('The string cannot be empty');
    }

    var splitString = string.trim().split(' ');

    var longest = splitString[0].length;

    for (i = 0; i < splitString.length; i++) {
        longest = Math.max(longest, splitString[i].length);
    }

    return longest;
}