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
/*
//account already existing
if($('.xrm-attribute-value-encoded')[0].innerText =="Register your external account" )
{
    alert("email is already in use");
    if($('#Email'))
    {
        var emailaddress = $('#Email').val();
        alert(emailaddress);
        if(emailaddress != null)
        {
            var filter = "emailaddress1 eq '"+ emailaddress +"'";
            //var data = tdg.c.OData_List("account", filter);
            
        $.ajax({
            type: "GET",
            url: "/_api/contacts?$filter=emailaddress1 eq 'hasintha@gmail.com'",
            contentType: "application/json",
            success: function (data, textStatus, xhr) {
                var results = data;
                console.log(results);
                for (var i = 0; i < results.value.length; i++) {
                    var result = results.value[i];
                    // Columns
                    var contactid = result["contactid"]; // Guid
                    alert(contactid);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(xhr);
            }
        });
        }
    }
}
*/

