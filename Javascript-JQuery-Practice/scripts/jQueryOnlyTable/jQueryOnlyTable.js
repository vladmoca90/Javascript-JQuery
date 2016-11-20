$(document).ready(function () {

    $("table").width(450).addClass("table table-hover").css("margin", "auto");

    $("td").css("cursor", "pointer");

    $("th, td").css({
        "text-align": "center",
        "font-size": "15px",
        "font-family": "Tahoma",
    });

    $("tr").eq(1).addClass("warning");

    $("tr").eq(3).addClass("success");

});