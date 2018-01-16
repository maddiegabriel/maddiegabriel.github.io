/**
 * signUpNow: activated when user clicks "Sign up now" button
 * @return false, so the page won't reload!
 */
function signUpNow() {
  // grab contents of email/interest fields
  var email = document.getElementById('email_field').value;
  var interest = document.getElementById('interest_field').value;
  if( !validateEmail(email) ) {
    // if email entered is invalid, simply display error message
    displayError();
  } else {
    // if email entered is valid, log the email/interest field contents to browser console
    console.log(email);
    console.log(interest);
    // hide the error message
    document.getElementById("error_message").style.visibility = "hidden";
    // reset the email and interest fields for next submission!
    document.getElementById('email_field').value = '';
    document.getElementById('interest_field').value = '';
  }
}

/**
 * displayError: function to display the error message
 */
function displayError() {
  document.getElementById("error_message").style.visibility = "visible";
}

/**
 * validateEmail: function to determine if email entered is valid
 * @param email entered by the user
 * @return true if the email is valid
 * @return false if the email is not valid
 */
function validateEmail( email ) {
  // Regex Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#Validation
  var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if( !email_regex.test(email) ) {
    return false;
  }
  return true;
}