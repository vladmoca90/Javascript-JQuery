$(document).ready(function () {

    $("#parent").addClass("center-block").width(300).height(300).css({
        "background": "yellow",
    });

    $("#child").width(150).height(150).css({
        "background": "red",
    });

    $("#parent, #child").css("border", "1px solid #000000");

    $("#button").click(function() {

        $("#parent").animate({
            background: "red",
            width: "400px",
            height: "400px",
            borderRadius: "100%",
            opacity: "0.5"
        });

        $("#child").animate({
            background: "yellow",
            width: "75px",
            height: "75px",
            marginTop: "120px",
            marginLeft: "100px",
            display: "block"
        });

    });

});