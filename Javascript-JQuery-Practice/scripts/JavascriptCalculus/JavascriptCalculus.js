var fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("practice").innerHTML = fruits;

function myFunction() {

    fruits.slice(2, 2, "Kiwi");

    document.getElementById("practice").innerHTML = fruits;

}