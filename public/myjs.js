function validate() {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(document.getElementById("email").value)){
    document.getElementById("email").style.borderBottom = "2px solid #FFFFFF";
    document.getElementById("email").className = "email-valid";
    validateConfirm();
  }
  else {
    document.getElementById("email").style.borderBottom = "2px solid rgba(255, 0, 0, 0.41)";
    disableButton();
  }
}

function validateConfirm() {
  var firstEmail = document.getElementById("email").value;
  var confirmationEmail = document.getElementById("confirm-email").value;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(confirmationEmail)){
    if (firstEmail === confirmationEmail) {
      document.getElementById("hidden-warning-message").style.display = "none";
      document.getElementById("confirm-email").style.borderBottom = "2px solid #FFFFFF";
      document.getElementById("confirm-email").className = "email-valid";
      enableButton("validate");
    }
    else {
      document.getElementById("confirm-email").style.borderBottom = "2px solid rgba(255, 0, 0, 0.41)";
      document.getElementById("hidden-warning-message").style.display = "block";
      disableButton();
    }
  }
  else {
    document.getElementById("confirm-email").style.borderBottom = "2px solid rgba(255, 0, 0, 0.41)";
    disableButton();
  }
}

function disableButton() {
  if (document.getElementById("custom-button").disabled == false) {
    document.getElementById("custom-button").style.backgroundColor = "#555555";
    document.getElementById("custom-button").disabled = true;
  }
}
function enableButton(checkMe) {
  var bothAreValid = false
  if (checkMe == "validateConfirm") {
    if (document.getElementById("confirm-email").className =="email-valid") {
      bothAreValid = true;
    }
  }
  else {
    if (document.getElementById("email").className =="email-valid") {
      bothAreValid = true;
    }
  }

  if (bothAreValid) {
    document.getElementById("custom-button").style.backgroundColor = "#FF8ED8";
    document.getElementById("custom-button").disabled = false;
  }
}