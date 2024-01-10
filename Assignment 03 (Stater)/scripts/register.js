"use strict";

let isVal = true;
let validate = () => {
  if (firstName.value.trim() === "") {
    alert("First Name is invalid");
    return (isVal = false);
  }
  if (lastName.value.trim() === "") {
    alert("Last Name is invalid");
    return (isVal = false);
  }
  if (userName.value.trim() === "") {
    alert("User Name is invalid");
    return (isVal = false);
  }
  if (password.value.trim() === "") {
    alert("pass is invalid");
    return (isVal = false);
  }
  if (cf_password.value.trim() === "") {
    alert("confirm pass is invalid");
    return (isVal = false);
  }
  if (password.value !== cf_password.value) {
    alert("Password and confirm password is not the same");
    return (isVal = false);
  }
  return (isVal = true);
};
let ClearInput = () => {
  firstName.value = "";
  lastName.value = "";
  userName.value = "";
  password.value = "";
  cf_password.value = "";
};

function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password
  );
  return user;
}

let Register = () => {
  validate();
  const users = new User(
    firstName.value,
    lastName.value,
    userName.value,
    password.value
  );
  if (isVal) {
    const search = userArr.find((x) => x.username === userName.value);

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
