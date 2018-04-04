$(function () {

    $("#parent").addClass("center-block").width(300).height(300).css({
        "background": "yellow",
    });

    $("#child").width(150).height(150).css({
        "background": "red",
    });

    $("#parent, #child").css("border", "1px solid #ccc");

    $("#button").click(function() {

        $("#parent").animate({
            background: "red",
            borderRadius: "100%",
            height: "400px",
            marginTop: "75px",
            width: "400px"
        });

        $("#child").animate({
            background: "yellow",
            borderRadius: "100%",
            display: "block",
            height: "125px",
            margin: "125px auto",
            width: "125px"
        });

    });

});