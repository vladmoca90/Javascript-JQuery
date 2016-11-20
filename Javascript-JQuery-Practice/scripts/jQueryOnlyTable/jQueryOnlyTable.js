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

    $('tr[title="Thomas Nicholas"]').addClass("warning");

    $('tr[title="Alexandru Anton"]').addClass("warning");

    $('tr[title="Julie Sparks"]').addClass("warning");

});