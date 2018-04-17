function length(text) {
    if(text == null) {
        throw new Error("Parameter cannot be null.")
    }

    return text.length;
}

//A function that returns the longest word in text
function longestWord(text) {
    if (text.length == 0) {
        throw new Error('The word list cannot be empty');
    }

    var splitString = text.trim().split(' ');

    var word = splitString[0];

    for (i = 0; i < splitString.length; i++) {
        if(word.length < splitString[i].length) {
            word = splitString[i];
        }
    }

    return word;
}

function allElementsAreEven(list) {

    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }
    if (list.length == 1) {
        if (list[0] % 2 !== 0) {
            return false;
        }
    }

    for (i = 0; i < list.length; i++) {
        if (list[i] % 2 !== 0) {
            return false;
        }
    }

    return true;
}