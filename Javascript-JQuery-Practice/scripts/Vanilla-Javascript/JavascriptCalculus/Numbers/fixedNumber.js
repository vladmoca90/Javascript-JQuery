//Calculate the fixed value of a given number
function fixedNumber() {

    var n = document.getElementsByClassName("fixedValue").value;

    if (n < 0) {
        throw new Error("The number must be greater than 0");
    }
    if (n == 0) {
        return 0;
    }

    return document.getElementsByClassName("fixedNumberResult").innerHtml = n.toFixed();

}