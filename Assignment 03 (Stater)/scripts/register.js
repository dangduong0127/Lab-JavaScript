"use strict";
// Validate các trường thông tin trong form
let isVal = true;
let validate = () => {
  if (firstName.value.trim() === "") {
    alert("Vui lòng nhập tên");
    return (isVal = false);
  }
  if (lastName.value.trim() === "") {
    alert("Vui lòng nhập họ");
    return (isVal = false);
  }
  if (userName.value.trim() === "") {
    alert("Vui lòng nhập tài khoản");
    return (isVal = false);
  }
  if (password.value.trim() === "") {
    alert("Vui lòng nhập mật khẩu");
    return (isVal = false);
  }
  if (cf_password.value.trim() === "") {
    alert("Vui lòng nhập lại mật khẩu");
    return (isVal = false);
  }
  if (password.value !== cf_password.value) {
    alert("Mật khẩu không khớp");
    return (isVal = false);
  }
  return (isVal = true);
};

// Hàm reset các trường nhập thông tin
let ClearInput = () => {
  firstName.value = "";
  lastName.value = "";
  userName.value = "";
  password.value = "";
  cf_password.value = "";
};
// Hàm đăng ký
let Register = () => {
  validate();
  const users = new User(
    firstName.value,
    lastName.value,
    userName.value,
    password.value
  );

  if (isVal) {
    // Tìm xem tài khoản đã được đăng ký chưa
    const search = userArr.find((x) => x.username === userName.value);
    // Nếu chưa thì lưu vào localStorage và thông báo đăng ký thành công
    // Chuyển hướng ra trang chủ
    if (search === undefined) {
      userArr.push(parseUser(users));
      localStorage.setItem(KEY, JSON.stringify(userArr));
      alert("Đăng ký thành công !!!");
      ClearInput();
      window.location.href = "../pages/login.html";
    } else {
      alert("Tài khoản đã tồn tại!!!");
      return;
    }
  }
};
