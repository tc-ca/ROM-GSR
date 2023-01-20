$(document).ready(function () {
    var companyName  = "{{user.parentcustomerid.name}}";

    $("#update_company").click(function(){
        $('div[data-name="tab_3"]').parent().parent().removeClass("hidden");
        $('div[data-name="company_details"]').parent().parent().addClass("hidden");
        $('#update_company').parent().addClass("hidden");

        $('div[data-name="tab_3"]').parent().before("<h2>" + companyName +"</h2><hr>");

        var legend2 = $('fieldset[aria-label="Head Office"] legend').eq(1);
        legend2.text("");
        legend2.after("<h2>"+ companyName + " - Head Office</h2><hr>");

        var cancelBtn = "<div><input id='cancel_company_update' type='button' name='CancelCompanyUpdate' value='Cancel' class='btn btn-primary action create-action' nonactionlinkbutton='true'/></div>";
        //if ($("#cancel_company_update").length <= 0) {
            $( "#update_company" ).first().after(cancelBtn);
        //}
    });
    $("#cancel_company_update").click(function(){
        window.location.href = "~/my-company";
    });
});

