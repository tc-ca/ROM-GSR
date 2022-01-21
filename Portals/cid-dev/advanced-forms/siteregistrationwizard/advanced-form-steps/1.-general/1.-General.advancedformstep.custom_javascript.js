// SiteGeneral.js

$(document).ready(function () {
    $('#mainContent').prepend("<div class='input-group pull-left'><p><a href='~/en-US/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Company Registration Wizard</a><br><br></p></div>");
    //$('#cid_issiteattested').prop('checked', false);
    //$("#cid_issiteattested").val("0");
    $('#cid_issiteattested  #cid_issiteattested_0').prop('checked', true); //Set No value

    // default operating name to legalname
    $("#name").parent().parent().hide();
    var ovs_legalname = $('#ovs_legalname').val();
    $('#name').val(ovs_legalname);
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            return true;
        }
    }(window.jQuery));
}

