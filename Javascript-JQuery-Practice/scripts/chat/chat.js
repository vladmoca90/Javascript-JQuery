﻿$(document).ready(function () {
    $(".delete-button").click(function () {
        $(this).parent().remove();
    });
});