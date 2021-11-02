function formValidation() {
  var uemail = document.contact.email;
  var unumb = document.contact.numberers;

  if (ValidateEmail(uemail)) {
    if (number_validation(unumb)) {


    }
  }
  return false;
}


// function set for the email input field
function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
{
    return true;
}
    else
{
    alert("You have entered an invalid email address!");
    return false;
}
}



function phonenumber(unumb)
{
  var numbers = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(unumb.value.match(numbers))
        {
      return true;
        }
      else
        {
          alert("Not a valid Phone Number");
          return false;
}


}