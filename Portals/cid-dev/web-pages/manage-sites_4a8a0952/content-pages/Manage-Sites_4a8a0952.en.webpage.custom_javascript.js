$(document).ready(function () {
    var primarycontactid = '{{user.Id}}';
    var fullname = '{{user.fullname}}';

    //alert(fullname + " > " + primarycontactid);

    $("#EntityFormPanel").on("loaded", function () {
        //alert("EntityFormPanel");
        $(".entitylist").find(".dropdown-menu").css("display", "inline-flex").css("padding", "0px").css("position", "relative").css("top", "").css("left", "").css("margin", "0px");
        $(".entitylist").find(".dropdown-menu a").css("color", "#fff");
        $(".entitylist").find(".dropdown-menu a").addClass("btn btn-info");
        $(".entitylist").find(".dropdown-menu a").hover(function () { $(this).css("color", "red"); }, function () { $(this).css("color", "#FFFF"); });
        $(".entitylist").find(".dropdown-menu").siblings().hide();
    });
});

