$(document).ready(function () {
    debugger;

    var pageURL = window.location.href;

    if(pageURL.includes("tdgcore-dev") || pageURL.includes("tdgcore-qa")){
        //$("#div1").hide();
        //$("#div2").show();
        window.location.href = "~/company_dashboard/?firsttime=true";
    }
    else{
        $("#div1").show();
        $("#div2").hide();
    }
});
