function PrecisFunctionNo() {

    var x = document.getElementById("toPrNumber").innerHTML;

    var y = x.toPrecision(7);

    document.getElementById("toPrCalc").innerHTML = calculatePres;

}