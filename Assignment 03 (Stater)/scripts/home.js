"use strict";

const logginModel = document.querySelector(".row");
const textContent = document.querySelector(".inner-text");
const LoggoutBtn = document.querySelector("#main-content");
console.log(isLogged);
function display() {
  if (isLogged) {
    LoggoutBtn.style.display = "block";
    logginModel.style.display = "none";
    textContent.innerHTML = `Welcome ${isLogged.firstName}`;
  } else {
    LoggoutBtn.style.display = "none";
    logginModel.style.display = "flex";
    textContent.innerHTML = `Please Login or Register`;
  }
}

display();
function Logout() {
  const isLogout = confirm("Bạn có chắc chắn muốn đăng xuất ko?");
  if (isLogout) {
    localStorage.removeItem("currentUser");
    isLogged = null;
    display();
  }
}
