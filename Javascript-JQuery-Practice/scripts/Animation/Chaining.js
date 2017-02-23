$(document).ready(function () {
    $("#chaining").width(400).height(400).css({
        "border": "1px solid black",
        "background": "red"
    });

    $("button").onclick(function () {
        $("#chaining").animate();
    });
});