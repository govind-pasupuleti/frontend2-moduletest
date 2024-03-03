const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const submitBtn = document.getElementById('submitBtn');
  const validationmsg=document.getElementById('validationmsg');

  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
  submitBtn.addEventListener('click', handleSubmit);

  function validateEmail() {
    const emailValue = emailInput.value;
    if (emailValue.length < 3 || !emailValue.includes('@') || !emailValue.includes('.')) {
      emailError.textContent = "Make sure  email is more than 3 characters and has @ and a.";
    } else {
      emailError.textContent = "";
    }
  }

  function validatePassword() {
    const passwordValue = passwordInput.value;
    if (passwordValue.length < 8) {
      passwordError.textContent = "Make sure password is more than 8 characters.";
    } else {
      passwordError.textContent = "";
      if (emailError.textContent === "") {
        validationmsg.textContent='All good to go';
        validationmsg.style.color="green";
    }
    }
  }


  function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    if (emailError.textContent === "" && passwordError.textContent === "") {
      if (confirm("Do you want to sign up?")) {
        alert("Successful signup!");
        emailInput.value = "";
        passwordInput.value = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        validationmsg.style.display="none";
      } else {
        // Clear form inputs and errors
        emailInput.value = "";
        passwordInput.value = "";
        emailError.textContent = "";
        passwordError.textContent = "";
      }
    }
  }