var name = ["Elliot", "Joana", "Vlad", "Sarah", "Alexander", "Katherine"];

document.getElementById("nameSort").innerHTML = name;

function sortingNames() {

    document.getElementById("nameSort").innerHTML = name.sort();

}