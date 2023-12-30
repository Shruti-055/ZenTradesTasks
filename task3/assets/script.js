function validateForm() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var emailError = document.getElementById('emailError');
  var passwordError = document.getElementById('passwordError');
  var emailPattern = /\S+@\S+\.\S+/;

  // Email validation
  if (!emailPattern.test(email)) {
    emailError.innerText = "Please enter a valid email address";
    return false;
  } else {
    emailError.innerText = "";
  }

  // Password validation
  var passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.innerText = "Password must contain at least 8 characters including an uppercase letter and a number. Special characters allowed: @";
    return false;
  } else {
    passwordError.innerText = "";
  }

  return true;
}
