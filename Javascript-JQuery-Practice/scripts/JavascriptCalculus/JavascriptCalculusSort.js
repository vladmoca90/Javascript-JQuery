var name = ["Elliot", "Joana", "Vlad", "Sarah", "Alexander", "Katherine"];

document.getElementsByTagName("span").innerHTML = name;

function sortingNames() {

    document.getElementsByTagName("span").innerHTML = name.sort();

}