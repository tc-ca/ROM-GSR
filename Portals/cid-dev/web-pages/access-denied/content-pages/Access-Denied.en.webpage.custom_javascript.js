//Condition for Terms and condition page
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
