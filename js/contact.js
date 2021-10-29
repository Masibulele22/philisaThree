const form = document.getElementById("form1");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");

form.addEventListener("submit", (e) => {
    // let message = []
e.preventDefault();

checkInputs();
});

function checkInputs(){
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    varInput = true;
    
    if(fullnameValue === ''){
        setErrorFor(fullname, "Full name cannot be blank");

    } else {
        setSuccessFor(fullname)
    }

    
    if(emailValue === ''){
        setErrorFor(email, "Email cannot be blank");

    } else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid");

    } else {
        setSuccessFor(email);
    }


    // if(phonenumberValue === ''){
    //     setErrorFor(phoneNumber, "Phone number cannot be blank");

    // } else if(!isphonenumber(phonenumberValue)|| phonenumberValue.length > 10 || phonenumberValue.length < 10){
    //     setErrorFor(phonenumber, "Phone Number is not valid");

    // }else {
    //     setSuccessFor(phonenumber);
    // }

};

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'inputbox error';
};
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'inputbox success';
};
function isEmail (email) {
    const re =  /^[a-zA-Z0-9.! #*+/=? ^_{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
};
// function isphonenumber (phonenumber) {

//     const re = /^(0)?[6-8][0-9]{9}/;
//     return re.test(phonenumber);
//     // /^[\d,\s, \+,-]{5,20}/
//     // /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
// };




