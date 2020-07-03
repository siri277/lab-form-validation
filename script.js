// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
function checkUserName(username) {
    var username = " ";
    var illegalChars = /\w/;
    if (username.value == "") {
        error = "You didn't enter a username";
        console.log(error);
        return false;
    }
    else if ((username.value.length < 8) && (username.value.length > 15)) {
        error = "The username is the wrong length";
        console.log(error);
        return false;
    }
    else if (illegalChars.test(username.value)) {
        error = "The username contains illegal characters"
        console.log(error);
        return false;
    }
    else {
        return true;
    }
}

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail(input) {
    var email = /^(?=.*[@._])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])$/;
    if (input.value.match(email)) {
        return true;
    }
    return false;
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword(input) {
    var password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_])$/;
    if (input.value.match(password)) {
        return true;
    }
    else {
        return false;
    }
}