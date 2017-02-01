var name = ["Elliot", "Joana", "Vlad", "Sarah", "Alexander", "Katherine"];

document.getElementsByName("span").innerHTML = name;

function reverseNames() {

    document.getElementsByName("span").innerHTML = name.reverse();

}