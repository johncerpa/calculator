$(document).ready(function() {

    var max = 17;
    var value = "";
    var history = "";

    $(".number").click(function() {

        if (value === "max digits") value = "0";

        if (value.match(/[-*/+%]/)) value = "";

        if (value === "0") value = history = "";

        if (value.length < max && history.length < max) {
            value += $(this).val();
            history += $(this).val();
        } else {
            value = "max digits";
            history = "0";
        }

        $("#values").html("<p>" + value + "</p>");
        $("#history").html("<p>" + history + "</p>");

    });

    $(".clear").click(function() {
        history = value = "0";
        $("#values").html("<p>" + value + "</p>");
        $("#history").html("<p>" + history + "</p>");
    });

    $(".operator").click(function() {

        if (value.length > 0 && !history[history.length - 1].match(/[-*/+%]/)) {
            history += $(this).val();
            value = $(this).val();
            $("#values").html("<p>" + value + "</p>");
            $("#history").html("<p>" + history + "</p>");
        }
    });

    $("#equal").click(function() {
        var result = eval(history);
        $("#values").html("<p>" + result + "</p>");
        $("#history").html("<p>" + history + "=" + result + "</p>");
    });


});
