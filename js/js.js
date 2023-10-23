$(function() {
    $("#load").click(function() {
        var new_url = $("#url").val();

// Checks that the user typed "http://" or not
        if(new_url.substr(0,7)!="http://")
            new_url = "http://"+new_url;

        $("#main_frame").attr("src", new_url);
    });
});

function forward()
{
    window.history.forward();
}

function refresh()
{
    var iframe = document.getElementById('main_frame');
    iframe.src = iframe.src;
}

$(document).ready(function(){
$(".head").load("../head.html");
$(".foot").load("../foot.html");
});