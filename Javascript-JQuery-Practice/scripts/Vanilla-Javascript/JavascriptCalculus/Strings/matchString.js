// A function that receives two strings and matches the first with the second
// Returns true is they match and false otherwise

function matchString(string1, string2) {

    if (string1.length == 0 || string2.length == 0) {
        throw new Error("None of the two strings can be empty");
    }

    if (string1.match(string2)) {
        return true;
    }

    return false;

}

//A function that matches a string with another string from a given object

function matchStringWithObject(string) {

    var person = {
        name: "John Swift",
        age: "25 years old",
        position: "UX Designer",
        worktown: "Bracknell",
    }

    if (string.length == 0) {
        throw new Error("The string cannot be empty");
    }

    if (string.match(person.name)) {
        return true;
    }

    return false;

}