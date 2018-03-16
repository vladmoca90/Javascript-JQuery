//Calculate the precise value of a given number
function preciseNumber() {

    var m = document.getElementsByClassName("preciseValue").value;

    var p = m.toPrecision();

    if (n < 0) {
        throw new Error("Then number must be greater than 0");
    }
    if (n == 0) {
        return 0;
    }

    return document.getElementsByClassName("preciseNumberResult").innerHtml = p;

}