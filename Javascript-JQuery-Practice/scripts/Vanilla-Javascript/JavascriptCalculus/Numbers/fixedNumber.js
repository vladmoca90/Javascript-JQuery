//Calculate the fixed value of a given number
function fixedNumber() {

    var n = document.getElementsByClassName("fixedValue").value;

    var m = n.toFixed();

    if (n < 0) {
        throw new Error("Then number must be greater than 0");
    }
    if (n == 0) {
        return 0;
    }

    return document.getElementsByClassName("fixedNumberResult").innerHtml = m;

}