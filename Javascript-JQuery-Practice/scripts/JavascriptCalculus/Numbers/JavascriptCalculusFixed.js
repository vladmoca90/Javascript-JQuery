function toFixedNo() {

    var presc = document.getElementById("toFixedNumber").innerHTML;

    var calculateFixed = presc.toFixed(12);

    document.getElementById("toFixed").innerHTML = calculateFixed;

}