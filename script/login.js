document.getElementById("login-btn").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email").value;
  const userPassword = document.getElementById("user-password").value;

  const email = "baper@bank.com";
  const password = "baperbank";

  if (userEmail === email && userPassword === password) {
    window.location = "bank.html";
  } else {
    alert("Don't Match email and password");
  }
});
