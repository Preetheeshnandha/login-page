const username = $("#user");
const email = $("#email");
const pass = $("#pass");
const pass1 = $("#pass1");



$("form").submit(function(event) {
  event.preventDefault();
  checkValue();
});


function checkValue() {

  const userValue = username.val().trim();
  const emailValue = email.val().trim();
  const passValue = pass.val().trim();
  const pass1Value = pass1.val().trim();

  if (userValue === "") {
    setError(username, "Please enter username");
  } else {
    setSuccess(username, "Valid");
  }


  if (emailValue === "") {
    setError(email, "Please enter email");
  } else if (!isEmail(emailValue)) {
    setError(email, "Please valid email");
  } else {
    setSuccess(email, "Valid");
  }


  if (passValue === "") {
    setError(pass, "Please enter password");
  } else {
    setSuccess(pass, "Valid");
  }

  if (pass1Value === "") {
    setError(pass1, "Please enter password1");
  } else if (pass1Value !== passValue) {
    setError(pass1, "password should be same");
  } else {
    setSuccess(pass1, "Valid");
  }

}


function isEmail(val) {

  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);

}


function setError(input, message) {
  const checked = $(input).siblings("small");
  checked.text(message);
  checked.addClass("errorMessage");
  checked.removeClass("successMessage");
}

function setSuccess(input, message) {
  const checked = $(input).siblings("small");
  checked.text(message);
  checked.addClass("successMessage");
  checked.removeClass("errorMessage");
}
