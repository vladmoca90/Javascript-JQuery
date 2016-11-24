var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("practice").innerHTML = fruits;

function myFunction() {
    fruits.push("Kiwi");
    document.getElementById("practice").innerHTML = fruits;
}