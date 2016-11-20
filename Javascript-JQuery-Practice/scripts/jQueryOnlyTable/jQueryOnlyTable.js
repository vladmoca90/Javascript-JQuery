$(document).ready(function () {

    $("table").width(450).addClass("table table-hover").css({
        "margin": "2% auto",
        "border": "1px solid #DDDDDD"
    });

    $("td").css("cursor", "pointer");

    $("th, td").css({
        "text-align": "center",
        "font-size": "15px",
        "font-family": "Tahoma",
    });

    $("tr").eq(1).addClass("warning");

    $("tr").eq(3).addClass("success");

    $("tr").eq(5).css("color", "#FF0000");

    $("tr").eq(7).addClass("info");

});