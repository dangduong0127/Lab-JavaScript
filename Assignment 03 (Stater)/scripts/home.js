"use strict";

const logginModel = document.querySelector(".row");
const textContent = document.querySelector(".inner-text");
const LoggoutBtn = document.querySelector("#main-content");

function isLogged() {
  const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
  if (loggedInUser) {
    LoggoutBtn.style.display = "block";
    logginModel.style.display = "none";
    textContent.innerHTML = `Welcome ${loggedInUser.firstName}`;
  } else {
    LoggoutBtn.style.display = "none";
    logginModel.style.display = "flex";
    textContent.innerHTML = `Please Login or Register`;
  }
}

isLogged();
function Logout() {
  localStorage.removeItem("currentUser");
  isLogged();
}
