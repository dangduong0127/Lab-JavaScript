"use strict";
// Hàm validate form đăng nhập
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

// Hàm đăng nhập
let Login = () => {
  valid();
  if (isVal) {
    // Tìm tài khoản và mật khẩu trong localStorage trùng với tài khoản, mk người dùng nhập vào
    const search = userArr.find(
      (x) => x.username === userName.value && x.password === password.value
    );
    // Nếu đăng nhập thành công thì sẽ lưu tài khoản hiện đăng nhập vào localStorage
    if (search !== undefined) {
      alert("Đăng nhập thành công");
      localStorage.setItem("currentUser", JSON.stringify(search));
      window.location.href = "../index.html";
      checkisLogged();
    } else {
      alert("Sai tên tài khoản hoặc mật khẩu");
    }
  }
};
// Hàm kiểm tra nếu người dùng đã đăng nhập thì ko cho vào trang Login nữa
function checkisLogged() {
  if (isLogged) {
    window.location.href = "../index.html";
  }
}
