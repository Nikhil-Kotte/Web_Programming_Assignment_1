function setMessage(target, message, isSuccess) {
  if (!target) {
    return;
  }

  target.textContent = message;
  target.classList.remove("success", "error");
  target.classList.add(isSuccess ? "success" : "error");
}

function isStrongPassword(password) {
  return password.length >= 8;
}

function initAuthForms() {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value;
      const confirmPassword = document.getElementById("regConfirmPassword").value;
      const message = document.getElementById("registerMessage");

      if (!name || !email || !password || !confirmPassword) {
        setMessage(message, "Please fill all registration fields.", false);
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setMessage(message, "Please enter a valid email address.", false);
        return;
      }

      if (!isStrongPassword(password)) {
        setMessage(message, "Password must be at least 8 characters long.", false);
        return;
      }

      if (password !== confirmPassword) {
        setMessage(message, "Passwords do not match.", false);
        return;
      }

      setMessage(message, "Registration successful.", true);
      registerForm.reset();
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("loginName").value.trim();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;
      const message = document.getElementById("loginMessage");

      if (!name || !email || !password) {
        setMessage(message, "Name, email, and password are required.", false);
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setMessage(message, "Please enter a valid email address.", false);
        return;
      }

      if (!isStrongPassword(password)) {
        setMessage(message, "Password must be at least 8 characters long.", false);
        return;
      }

      setMessage(message, "Login validation passed.", true);
    });
  }
}

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const inquiry = document.getElementById("contactMessage").value.trim();
    const message = document.getElementById("contactMessageStatus");

    if (!name || !email || !inquiry) {
      setMessage(message, "Please complete all inquiry form fields.", false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage(message, "Please enter a valid email address.", false);
      return;
    }

    setMessage(message, "Your inquiry has been submitted.", true);
    contactForm.reset();
  });
}

initAuthForms();
initContactForm();
