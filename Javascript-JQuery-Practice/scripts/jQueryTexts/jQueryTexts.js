﻿$(document).ready(function () {

    $("#main, #button-box").css("margin", "2% auto");

    ("#main").width(1000);

    $("#button-box").width(1000);

    $("#main").css({
        "padding": "10px",
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

    $("#hide").addClass("btn btn-danger").css("margin-left", "25px");

    $("#hide").click(function () {
        $("#main").hide();
    });

    $("#show").click(function () {
        $("#main").show();
    });

});