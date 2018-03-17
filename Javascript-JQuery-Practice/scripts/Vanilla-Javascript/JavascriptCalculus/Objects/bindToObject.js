//A code that binds a function to am object

var person = {
    name: "Alexandru Mocanu",
}

function myName(a, b) {

    var a = "Vlad";

    var b = "Mocanu";

    return a + " " + b;

}

var showName = person.name;

var twoPersons = myName.bind(showName);