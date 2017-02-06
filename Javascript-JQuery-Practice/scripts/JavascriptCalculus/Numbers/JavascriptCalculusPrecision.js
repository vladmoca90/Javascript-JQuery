function toPrecisionNo() {

    var presc = document.getElementById("toPrecisionNumber").innerHTML;

    var calculatePresc = presc.toPrecision(7);

    document.getElementById("toPrecision").innerHTML = calculatePresc;

}