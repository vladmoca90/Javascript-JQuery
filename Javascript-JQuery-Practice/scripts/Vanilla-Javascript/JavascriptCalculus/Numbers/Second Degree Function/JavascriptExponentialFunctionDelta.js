$(function() {

    $("#calcDelta").click(function () {

        var a = $("#a").val();

        var b = $("#b").val();

        var c = $("#c").val();

        var delta = b**2 - 4*a*c;

        if(delta < 0) {
            alert("The equation is imposible");
            return;
        }
        else if(delta == 0) {
            alert("The roots are equal");
            document.getElementById("delta").innerHTML = delta;
        }
        else {
            alert("The roots are different");
            document.getElementById("delta").innerHTML = delta;
        }

        var y1 = (- b + Math.sqrt(delta)) / (2 * a);

        $("#rootYOne").html(y1);

        var y2 = (- b - Math.sqrt(delta)) / (2 * a);

        $("#rootYTwo").html(y2);

    });

});