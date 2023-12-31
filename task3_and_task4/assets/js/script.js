function validateForm() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var emailError = document.getElementById('emailError');
  var passwordError = document.getElementById('passwordError');
  var emailPattern = /\S+@\S+\.\S+/;

  // Email validation (similar to previous code)
  if (!emailPattern.test(email)) {
    emailError.innerText = "Please enter a valid email address";
    return false;
  } else {
    emailError.innerText = "";
  }

  // Password validation (including redirection)
  if (password === 'SmartServTest@123') {
    // Redirect to the dashboard page (replace 'dashboard2.html' with the actual dashboard page URL)
    window.location.href = 'dashboard2.html';
    return false; // Prevent form submission after redirection
  } else {
    var passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
    if (!passwordPattern.test(password)) {
      passwordError.innerText = "Password must contain at least 8 characters including an uppercase letter and a number. Special characters allowed: @";
      return false;
    } else {
      passwordError.innerText = "";
    }
  }

  // If the password is not 'SmartServTest@123' and doesn't match the pattern, show an error
  passwordError.innerText = "Incorrect password. Please try again.";
  return false;
}
function openEmailClient() {
  var emailAddress = 'support@smartserv.io';
  var subject = 'Password Reset Request';
  var body = 'Dear Support,\n\nI need to reset my password. Please assist.\n\nThank you.\n';

  var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  // Open the email client with the pre-filled data
  window.location.href = mailtoLink;
}
