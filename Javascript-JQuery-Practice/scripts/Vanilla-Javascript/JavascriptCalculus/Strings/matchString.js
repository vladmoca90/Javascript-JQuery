// A function that receives two strings and matches the first with the second
// Returns true is they match and false otherwise

function matchString(string1, string2) {

    if(string1.length == 0 || string2.length == 0) {
        throw new Error("None of the two strings can be empty");
    }

    if(string1.match(string2)) {
        return true;
    }

    return false;

}