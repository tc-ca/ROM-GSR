//Condition for Terms and condition page
var source = document.getElementsByTagName('h1')[0].innerHTML;
if(source.search("Conditions") != -1){
    $(document).find("title").text("Conditions générales");
}
//TODO Update logic with french values
//Condition for initial registration page
if(source.search("Registration") != -1){
    $(document).find("title").text("Registration");
}
//TODO add logic for the default access denied page