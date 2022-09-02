$(document).ready(function () {
    var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
    $('#cid_cidsitestatus').hide();
    $('#cid_cidsitestatus_label').hide();

    if (cidSiteStatus.indexOf("Inactive") >= 0){  
        $('#EntityFormPanel').find('input, textarea, button, select').attr('disabled','disabled');    
    }

    $("#cid_issiteattested").prop( "checked", false );
});