﻿$(function () {

    $("ul").addClass("list-unstyled list-inline").css({
        "font-size": "18px",
        "width": "495px",
        "margin": "20px auto",
        "color": "#fff"
    });

    $("ul>li").css({
        "padding": "7px 12px",
        "border-radius": "10px",
        "cursor": "pointer"
    });

    $("ul").children("li:nth-child(odd)").css("background", "green");

    $("ul").children("li:nth-child(even)").css("background", "red");

    $("table").addClass("table table-bordered").css({
        "margin": "30px auto",
        "width": "500px",
        "font-size": "16px",
        "text-align": "center"
    });

    $(".hide-table").click(function () {
        $("table").hide();
    });

    $(".show-table").click(function () {
        $("table").show();
    });

});