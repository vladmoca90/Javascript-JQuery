function calculateConcat() {

    var firstText = document.getElementById("textOne").innerHTML;

    var secondText = document.getElementById("textTwo").innerHTML;

    var cnct = firstText.concat(" ", secondText);

    document.getElementById("concatResult").innerHTML = cnct;

}