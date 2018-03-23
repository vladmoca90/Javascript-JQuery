//Return true if the string has a cartain length and false otherwise

function stringLength(string) {

    if (string.length == 0) {
        throw new Error("The string is empty");
    }

    if (string.length < 6) {
        return false;
    }

    return true;

}