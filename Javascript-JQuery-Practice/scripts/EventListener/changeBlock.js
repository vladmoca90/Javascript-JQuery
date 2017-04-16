function changeBlock() {

    var firstBlock = document.getElementsByClassName("first").style;

    firstBlock = "display: block";

    var scndBlock = document.getElementsByClassName("scnd").style;

    scndBlock = "display: none";

    document.getElementsByTagName("button").addEventListener("click", function () {

        var firstBlock = document.getElementsByClassName("first").style;

        firstBlock = "display: none";

        var scndBlock = document.getElementsByClassName("scnd").style;

        scndBlock = "display: block";

    });

}

changeBlock();