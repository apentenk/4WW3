function getLocation() {
    if (navigator.geolocation) { //using the HTML5 Geolocation API
        navigator.geolocation.getCurrentPosition(showPosition); //Calling show position after getcurrent position is successful
    }
    else {

    }
}

function showPosition(position) {
    var long = document.getElementById("long");  //getting the longitude text input element from the DOM
    var lat = document.getElementById("lat");   //gettinght the latitude text input element from the DOM

    long.value = position.coords.longitude;   //displaying the longitude obtained from the position in the longitude text input element
    lat.value = position.coords.latitude;     //displaying the latitude obtained from the position in the latitude text input element
}
function validateRegistration() {
    var password = document.getElementById('passwordForm');         //getting the Password text input element from the DOM
    var confirm = document.getElementById('passowrdConfirm');       //getting the Confirmation password text input element from the DOM
    var first = document.getElementById('firstNameForm');           //getting the first name text input element from the DOM
    var last = document.getElementById('lastNameForm');             //getting the last name text input element from the DOM
    var email = document.getElementById('emailForm');               //getting the email text input element from the DOM
    var dob = document.getElementById('dobForm');                   //getting the date of birth text input element from the DOM
    var success;
    var emailPattern = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$");  //regex for email validity

    var elements = [first, last, email, password];
    const labels = ["firstNameLabel", "lastNameLabel", "passwordLabel"];
    const fields = ["First Name:", "Last Name:", "Password:"];

    for (var i = 0; i < labels.length; i++) {                       //checking that first name last name and password are all non empty
        if (!elements[i].value) {
            success = invalid(labels[i], fields[i], "\tField Cannot be empty");
        } else {
            valid(labels[i], fields[i]);
        }
    }

    if (password.value == confirm.value) {                           //checking that the password is the same in both confirmation and password
        valid("confirmLabel", "Confirm Password");
    } else {
        success = invalid("confirmLabel", "Confirm Password:", "\tPasswords Must Match!"); //displaying error on dom
    }

    if (!dob.value){                                                //checking that the date of birth is valid
        success = invalid("dobLabel", "Date of Birth:", "\tPlease enter a valid date of birth");
    }else{
        valid("dobLabel", "Date of Birth:");
    }

    if(emailPattern.test(email.value)){                             //checking email is valid
        valid("emailLabel", "Email:");
    }else{
        success = invalid("emailLabel", "Email:", "\tPlease enter a valid Email Address")
    }

    
    return success; //returning true if no errors in form
}

function invalid(labelName, field, error) { //displaying erros
    var label = document.getElementById(labelName);
    label.innerHTML = field + error;
    label.style.color = "red"; //change text to red
    return false;
}
function valid(labelName, field) {      //removing errors 
    var label = document.getElementById(labelName);
    label.innerHTML = field;
    label.style.color = "black" //change text to black
}

