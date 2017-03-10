//A function receives a list of words and return a string with all the words, 
//but are separated through a space, and you have "." at the end

function createdSentence(array) {

    if (array.length == 0) {
        throw new Error("The array is empty");
    }
    if (array.length == 1) {
        return array[0] + ".";
    }

    var combine = "";

    for (var i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            combine += array[i] + " ";
        }
        else {
            combine += array[i];
        }
    }

    return combine + ".";
}
