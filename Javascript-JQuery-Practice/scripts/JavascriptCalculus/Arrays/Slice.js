var fruits = ["Banana", "Orange", "Apple", "Mango", "Apricot", "Fig"];

document.getElementById("practice").innerHTML = fruits;

function myFunction() {

    fruits.slice(2, 3, "Kiwi");

    document.getElementById("practice").innerHTML = fruits;

}