$(document).ready(function() {

    var max = 17;
    var historyMax = 25;
    var value = "0";
    var history = "0";
    var equalUsed = false;

    $(".number").click(function() {

        if (value === "max digits") value = "0";

        if (value.match(/[-*/+%]/)) value = "";

        if (equalUsed) {
            equalUsed = false;
            value = history = "";
        }

        if (value == "0" && $(this).val() != "0" && $(this).val() != ".") {
            value = history = "";
        }

        if (value.length < max && history.length < historyMax) {
            if (!($(this).val() === "." && value.match(/\./))) {
                value += $(this).val();
                history += $(this).val();
            }
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

    /*$("#CE").click(function() {
        if (value == "0") {
            history = result = "0";
        } else {
            history = history.slice(0, history.length - value.length);
            value = "0";
        }
        if (history.length === 0) history = "0";
        $("#values").html("<p>" + value + "</p>");
        $("#history").html("<p>" + history + "</p>");
    });*/

    $(".operator").click(function() {

        equalUsed = false;

        if (value.length < max && history.length < historyMax) {
            if (value.length > 0 && !history[history.length - 1].match(/[-*/+%]/)) {
                history += $(this).val();
                value = $(this).val();
            }
        } else {
            value = "max digits";
            history = "0";
        }

        $("#values").html("<p>" + value + "</p>");
        $("#history").html("<p>" + history + "</p>");
    });

    $("#equal").click(function() {

        var result = eval(history);

        if ((result + "").length < max && (history + "=" + result).length < historyMax) {
            $("#values").html("<p>" + result + "</p>");
            $("#history").html("<p>" + history + "=" + result + "</p>");
            history = result + "";
            equalUsed = true;
        } else {
            value = "max digits";
            history = "0";
            $("#values").html("<p>" + value + "</p>");
            $("#history").html("<p>0</p>");
        }

    });

});
