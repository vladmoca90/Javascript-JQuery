$(document).ready(function() {

    $("#calcDelta").click(function() {

        var delta = b**2 - 4*a*c;

        $("#a").val();

        $("#b").val();

        $("#c").val();
  
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

        $("#rootOne").html(y1);

        var y2 = (- b - Math.sqrt(delta)) / (2 * a);

        $("#rootTwo").html(y2);

    });
});

