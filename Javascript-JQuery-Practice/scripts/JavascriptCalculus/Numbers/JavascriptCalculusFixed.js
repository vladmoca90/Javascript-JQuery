function FxFunctionNo() {

    var a = document.getElementById("toFxNumber").innerHTML;

    var b = a.toFixed(12);

    document.getElementById("toFxCalc").innerHTML = calculateFixed;

}