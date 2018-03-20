﻿$(document).ready(function () {

    $("table").width(450).addClass("table table-hover").css({
        "margin": "2% auto",
        "border": "1px solid #DDDDDD"
    });

    $("tr>td").css("border-right", "1px solid #DDDDDD").not(".country");

    $("td").css("cursor", "pointer");

    $("th, td").addClass("text-center").css({
        "font-size": "16px",
        "font-family": "Calibri",
    });

    $(".country").css({
        "font-weight": "bold",
        "font-style": "italic"
    });

    $('tr[title="Thomas Nicholas"], tr[title="Alexandru Anton"], tr[title="Julie Sparks"], tr[title="Katrin Basch"]').addClass("warning");

});