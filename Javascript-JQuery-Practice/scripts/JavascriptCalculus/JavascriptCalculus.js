var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.push("Kiwi");
    document.getElementById("demo").innerHTML = fruits;
}