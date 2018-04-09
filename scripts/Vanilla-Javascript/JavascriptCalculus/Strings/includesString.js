//A function that returns true if a certain string is found in another string

function includeString(string, includer) {

    if (string.length == 0 || includer.length == 0) {
        throw new Error("None of the strings can be empty");
    }

    return string.includes(includer);
}