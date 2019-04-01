$(function () {
    $("button#but1").click(function(){
        $("div#col1").removeClass("bg-warning");
        $("div#col1").addClass("bg-primary");
    });
});