//Condition for Terms and condition page
var source = document.getElementsByTagName('h1')[0].innerHTML;
if(source.search("Conditions") != -1){
    $(document).find("title").text("Conditions générales");

     //var cancelLabel = tdg.error_message.message("BTN_CANCEL");
        $("#submit-agreement").after("&nbsp; <input id='cancelButton' type='button' name='CancelButton' value='Annuler' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'>");      
        $('#cancelButton').click(function (e) {
                window.location.href = '~/en/Account/Login/LogOff?returnUrl=%2Fen%2Fcompany_dashboard%2F';
        });
}
//TODO Update logic with french values
//Condition for initial registration page
if(source.search("Registration") != -1){
    $(document).find("title").text("Registration");
}
//TODO add logic for the default access denied page