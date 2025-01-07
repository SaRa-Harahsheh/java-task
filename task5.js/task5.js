
    function validateFname() {
      const fname = document.getElementById('fname').value;
      if (/[\d]/.test(fname)) {
        document.getElementById('fnameError').textContent = "Numbers are not allowed";
      } else {
        document.getElementById('fnameError').textContent = "";
      }
    }

    function validateBdate() {
      const bdate = document.getElementById('bdate').value;
      if (!/^\d{2}\/\d{2}\/\d{4}$/.test(bdate)) {
        document.getElementById('bdateError').textContent = "The format should be dd/mm/yyyy";
      } else {
        document.getElementById('bdateError').textContent = "";
      }
    }

    function validateEmail() {
      const email = document.getElementById('email').value;
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = "The e-mail is not valid";
      } else {
        document.getElementById('emailError').textContent = "";
      }
    }

    function validateConfirmEmail() {
      const email = document.getElementById('email').value;
      const confirmEmail = document.getElementById('confirmEmail').value;
      if (email !== confirmEmail) {
        document.getElementById('confirmEmailError').textContent = "Emails do not match";
      } else {
        document.getElementById('confirmEmailError').textContent = "";
      }
    }

    function validatePassword() {
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match";
      } else {
        document.getElementById('confirmPasswordError').textContent = "";
      }
    }
  