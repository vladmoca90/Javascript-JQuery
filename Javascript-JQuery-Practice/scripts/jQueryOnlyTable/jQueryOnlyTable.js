$(document).ready(function () {

    $("table").width(450).addClass("table table-hover").css({
        "margin": "2% auto",
        "border": "1px solid #DDDDDD"
    });

    $("td").css("cursor", "pointer");

    $("th, td").addClass("text-center").css({
        "font-size": "15px",
        "font-family": "Tahoma",
    });

    $('tr[title="Thomas Nicholas"], tr[title="Alexandru Anton"], tr[title="Julie Sparks"], tr[title="Katrin Basch"]').addClass("warning");

});