function calculateConcat() {

    var texts = document.getElementById("textOne").innerHTML;

    var cnct = texts.concat(textOne, textTwo);

    document.getElementById("concatResult").innerHTML = cnct;

}