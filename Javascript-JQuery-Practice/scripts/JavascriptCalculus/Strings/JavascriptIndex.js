var a = "My name is Vlad and I am from Romania";

document.getElementsByClassName("calculateIndex").innerHTML = a;

function sententceIndex() {

    var b = a.indexOf("a");

    document.getElementsByClassName("calculateIndex").innerHTML = b;

}