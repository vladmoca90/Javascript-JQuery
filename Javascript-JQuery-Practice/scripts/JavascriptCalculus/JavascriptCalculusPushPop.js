var fruits = ["Banana", "Orange", "Apple", "Mango", "Apricot", "Fig"];

document.getElementById("practice").innerHTML = fruits;

function myFunction() {

    fruits.splice(1, 1, "Kiwi");

    document.getElementById("practice").innerHTML = fruits;

}