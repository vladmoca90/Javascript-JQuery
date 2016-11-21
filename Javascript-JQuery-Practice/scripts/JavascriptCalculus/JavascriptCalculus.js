var z = ["Ana Maria", 2, "Vlad", 7, 1015, "75", "New York City"];
document.getElementById("z-array").innerHTML = z;

function zVariable() {
    z.splice(2, 2, "Mimi");
    document.getElementById("z-array").innerHTML = z;
}