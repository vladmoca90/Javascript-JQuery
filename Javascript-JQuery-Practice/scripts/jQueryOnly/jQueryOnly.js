$(document).ready(function () {
    $("#box").width(450).height(400).addClass("center-block").css({
        "margin-top": "5%",
        "border": "1px solid #000000",
        "background": "gold"
    });
    $("#box-list").addClass("list-unstyled").css({
        "text-align": "center",
        "font-size": "16px",
        "font-family": "Verdana"
    });
    $("#box-list").children("li.first").css("font-weight", "bold");
    $("#box-list").children("li.second").css({
        "font-style": "italic",
        "color": "#FF0000"
    });
    $("#box-list").children("li").not("li.second").click(function () {
        $(this).css("color", "blue");
    });
    $("#box-list>li").css({
        "padding-top": "10px"
    });
});