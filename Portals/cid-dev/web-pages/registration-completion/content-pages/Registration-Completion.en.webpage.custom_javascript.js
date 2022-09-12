$(document).ready(function () {
    debugger;

    var pageURL = window.location.href;

    if(pageURL.includes("tdgcore-dev") || pageURL.includes("tdgcore-qa")){
        $("#div1").hide();
        $("#div2").show();
    }
    else{
        $("#div1").show();
        $("#div2").hide();
    }
});
