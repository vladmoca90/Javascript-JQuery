var names = ["Elliot", "Joana", "Vlad", "Sarah", "Alexander", "Katherine"];

document.getElementsByTagName("span").innerHTML = names;

function sortingNames() {

    document.getElementsByTagName("span").innerHTML = names.sort();

}