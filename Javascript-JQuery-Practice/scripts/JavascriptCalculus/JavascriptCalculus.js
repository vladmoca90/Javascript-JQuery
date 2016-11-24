var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("practice").innerHTML = fruits;

function myFunction() {
    fruits.unshift("Kiwi");
    document.getElementById("practice").innerHTML = fruits;
}