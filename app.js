var nameError = document.getElementById("name_error");
var phoneError = document.getElementById("phone_error");
var emailError = document.getElementById("email_error");
var messageError = document.getElementById("message_error");
var submitError = document.getElementById("submit_error");

function validateName() {
    var name = document.getElementById("contact_name").value;

    if(name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }

    nameError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true; 
}

function validatePhone() {
    var phone = document.getElementById("contact_phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone number is required";
        return false;
    }

    if(phone.length !== 11){
        phoneError.innerHTML = "Write full phone number";
        return false;
    }

    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = "Only digits please";
        return false;
    }

    phoneError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact_email").value;

    if(email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email invalid";
        return false;
    }

    emailError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validatemessage() {
    var message = document.getElementById("contact_message").value;
     var required = 30;
    var left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + " more characters required";
        return false;
    }

    messageError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;

}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validatemessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(function(){submitError.style.display = "none";}, 3000);
        return false;
    }
}