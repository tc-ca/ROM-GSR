$(document).ready(function () {
    debugger;

    $('#loader').hide();
    
    //var pageURL = window.location.href;

    //if(pageURL.includes("tdgcore-dev") || pageURL.includes("tdgcore-qa")){
        $("#waitDiv").show();
        window.location.href = "~/company_dashboard/?firsttime=true";
    //}
    //else{
    //    $("#div1").show();
    //    $("#div2").hide();
    //}
});
