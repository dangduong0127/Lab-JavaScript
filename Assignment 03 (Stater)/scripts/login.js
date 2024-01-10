"use strict";

let isVal = true;
let valid = () => {
  if (userName.value === "") {
    alert("Chưa nhập tài khoản!!!");
    return (isVal = false);
  }
  if (password.value === "") {
    alert("Chưa nhập mật khẩu!!!");
    return (isVal = false);
  }
  isVal = true;
};

let Login = () => {
  valid();
  if (isVal) {
    const search = userArr.find(
      (x) => x.username === userName.value && x.password === password.value
    );
    if (search !== undefined) {
      alert("Đăng nhập thành công");
      localStorage.setItem("currentUser", JSON.stringify(search));
      window.location.href = "../index.html";
    } else {
      alert("Sai tên tài khoản hoặc mật khẩu");
    }
  }
};
isLogged();
function isLogged() {
  const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
  if (loggedInUser) {
    window.location.href = "../index.html";
  }
}
