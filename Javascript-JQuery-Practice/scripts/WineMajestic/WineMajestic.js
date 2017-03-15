$(function () {

    $(".like-button").click(function () {

    });

    $(".send-button").click(function () {

        var container = $("#template").clone();

        container.find(".text").html($("#send-container input").val());

        container.attr("id", null);

        var li = $("<li></li>");

        li.append(container);

        $("ul").append(li);

        $("#send-container input").val("");

    });

});