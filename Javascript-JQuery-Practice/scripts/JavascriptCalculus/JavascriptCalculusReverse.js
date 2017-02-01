var names = ["Elliot", "Joana", "Vlad", "Sarah", "Alexander", "Katherine"];

document.getElementsByTagName("span").innerHTML = names;

function reverseNames() {

    document.getElementsByTagName("span").innerHTML = names.reverse();

}