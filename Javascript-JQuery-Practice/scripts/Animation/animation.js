$(document).ready(function () {

    $("#parent").addClass("center-block").width(400).height(400).css({
        "background": "yellow",
    });

    $("#child").width(150).height(150).css({
        "background": "red",
    });

    $("#parent, #child").css("border", "1px solid #000000");

    $("#button").click(function() {

        $("#parent").animate({
            background: "red",
            width: "500px",
            height: "500px",
            opacity: "0.5"
        });

        $("#child").animate({
            background: "yellow",
            width: "75px",
            height: "75px",
            top: 100,
            left: 140
        });

    });

});