$(document).ready(function() {

    var max = 18;
    var value = "";
    var count = 0;
    var history = "";

    $(".number").click(function() {
        if (count < max) {
            value += $(this).val();
            history += value;
            $("#values").html("<p>"+value+"</p>");
            $("#history").html("<p>"+value+"</p>");
            count++;
        }
    });

});
