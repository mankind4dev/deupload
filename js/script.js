

// Sign Up Page------------------------------
function validateForm() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var regnumber = document.getElementById("regnumber").value;
    var department = document.getElementById("department").value;
    var faculty = document.getElementById("faculty").value;
    var businesscategory = document.getElementById("businesscategory").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    if (firstname.trim() == "") {
        alert("Please enter your first name.");
        return false;
    }

    if (lastname.trim() == "") {
        alert("Please enter your last name.");
        return false;
    }

    if (regnumber.trim() == "") {
        alert("Please enter your registration number.");
        return false;
    }

    if (department.trim() == "") {
        alert("Please enter your department.");
        return false;
    }

    if (faculty.trim() == "") {
        alert("Please enter your faculty.");
        return false;
    }

    if (businesscategory.trim() == "") {
        alert("Please select a business category.");
        return false;
    }

    if (email.trim() == "") {
        alert("Please enter your email.");
        return false;
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone.trim() == "") {
        alert("Please enter your phone number.");
        return false;
    } else if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    if (password.trim() == "") {
        alert("Please enter a password.");
        return false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
var re = /^\d{11}$/;
return re.test(phone);
}