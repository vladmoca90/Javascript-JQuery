function toFixNo() {

    var fixcalc = document.getElementById("toFixedNumber").innerHTML;

    var calculateFixed = fixcalc.toFixed(12);

    document.getElementById("toFixedCalc").innerHTML = calculateFixed;

}