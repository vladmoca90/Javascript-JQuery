function toPrecisionNo() {

    var presc = document.getElementById("toPrecisionNumber").innerHTML;

    var calculatePres = presc.toPrecision(7);

    document.getElementById("toPrecisionCalc").innerHTML = calculatePres;

}