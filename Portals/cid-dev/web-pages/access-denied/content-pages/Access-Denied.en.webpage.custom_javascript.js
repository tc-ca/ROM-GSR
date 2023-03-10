//Condition for Terms and condition page
if(document.getElementsByTagName('h1')[0])
{
    var source = document.getElementsByTagName('h1')[0].innerHTML;
    if(source.search("Terms") != -1){
        $(document).find("title").text("Terms and Conditions");
    }
    //Condition for initial registration page
    if(source.search("Registration") != -1){
        $(document).find("title").text("Registration");
        //TODO logic for post login invitation
    }
    //TODO add logic for the default access denied page
}
debugger;
//account already existing
if($('.xrm-attribute-value-encoded')[0].innerText =="Register your external account" )
{
    $('.xrm-attribute-value-encoded').css({ position: "relative" , left: "30px" });
    if($('.validation-summary-errors')[0])
    {
        var Innerhtml = $('.validation-summary-errors')[0].innerHTML;
        var InnerText = $('.validation-summary-errors')[0].innerText;
        if( Innerhtml!= null && Innerhtml.substring(0, 18) == "<ul><li>The email ")
        {
            $('.validation-summary-errors')[0].innerHTML = 
                    "<ul><li>This email is already in use. This may be due to an invitation previously being sent to this email address. You can use that invitation to access the application.</li><li>If this is not the case, or you require further details, then please choose the Contact Us link below.</li></ul>";
        }
        else  if(InnerText!= null && InnerText == "Invalid invitation code.")  
        {
             $('.validation-summary-errors')[0].InnerText = "The Invitation Code is already redreemed or expired.";
        }
    }
}

//invalid invitation Code
if($('.xrm-attribute-value-encoded')[0].innerText =="Sign up with an invitation code" )
{
    if($('.validation-summary-errors')[0])
    {
        var InnerText = $('.validation-summary-errors')[0].innerText;
        if(InnerText!= null && InnerText == "Invalid invitation code.")  
        {
             $('.validation-summary-errors')[0].innerText = "The Invitation Code is already redeemed or Invitation is no longer valid. If required, please choose the Contact Us link at the bottom of this screen to request a new invitation.";
        }
    }
}

