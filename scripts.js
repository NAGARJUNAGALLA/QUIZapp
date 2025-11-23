async function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let response = await fetch("users.json");
  let data = await response.json();

  let found = data.users.find(u => u.username === user && u.password === pass);

  if (found) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerHTML = "Invalid Login";
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

function openQuiz(url) {
  window.location.href = url;
}
