var name = ["Elliot", "Joana", "Vlad", "Sarah", "Alexander", "Katherine"];

document.getElementsByName("span").innerHTML = name;

function sortingNames() {

    document.getElementsByName("span").innerHTML = name.reverse();

}