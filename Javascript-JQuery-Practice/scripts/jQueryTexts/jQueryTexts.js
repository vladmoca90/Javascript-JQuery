$(document).ready(function () {

    $("#main").width(1000).css({
        "padding": "10px",
        "margin": "2% auto",
        "border" : "1px solid #000"
    });

    $(".one").css({
        "font-family": "Tahoma",
        "font-size": "16px"
    });

    $(".two").css({
        "font-family": "Andalus",
        "font-size": "18px"
    });

    $(".three").css({
        "font-family": "Calibri",
        "font-size": "17px",
        "font-style": "italic"
    });

    $(".four").css({
        "font-family": "Cursive",
        "font-size": "16px",
        "color": "blue"
    });

    $("#show, #hide").addClass("pull-left");

    $("#show").addClass("btn btn-success");

    $("#hide").addClass("btn btn-danger");

    $("#hide").click(function () {
        $("#main").hide();
    });

    $("#show").click(function () {
        $("#main").show();
    });

});