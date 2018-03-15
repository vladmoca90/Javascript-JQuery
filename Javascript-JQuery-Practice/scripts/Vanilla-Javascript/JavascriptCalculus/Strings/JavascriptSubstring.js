function substringFunction() {

    var pos = document.getElementById("substringTxt").innerHTML;

    var sbstrng = pos.substring(5, 16);

    document.getElementById("substringResult").innerHTML = sbstrng;

}