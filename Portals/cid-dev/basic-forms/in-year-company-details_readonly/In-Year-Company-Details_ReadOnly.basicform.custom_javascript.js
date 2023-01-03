$(document).ready(function () {
    $("#update_company").click(function(){
        $('div[data-name="tab_3"]').parent().parent().removeClass("hidden");
        $('div[data-name="company_details"]').parent().parent().addClass("hidden");
        $('#update_company').parent().addClass("hidden");
    }); 
});