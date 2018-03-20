function calcTxtLastIndex() {

    var pos = document.getElementById("sentenceSecondText").innerHTML;

    var str = pos.lastIndexOf("native");

    document.getElementById("calculateLastIndex").innerHTML = str;

}