$(function () {


    $("#button").click(function() {

        $(".square").animate({
            background: "red",
            borderRadius: "100%",
            height: "400px",
            marginTop: "75px",
            width: "400px"
        });

        $(".square__child").animate({
            background: "yellow",
            borderRadius: "100%",
            display: "block",
            height: "125px",
            margin: "125px auto",
            width: "125px"
        });

    });

});