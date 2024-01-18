"use strict";

const firstName = document.querySelector("#input-firstname");
const lastName = document.querySelector("#input-lastname");
const userName = document.querySelector("#input-username");
const password = document.querySelector("#input-password");
const cf_password = document.querySelector("#input-password-confirm");
const APIkey = "fc2349fe24f04b33805a9c19ad677ff8";
const KEY = "USER_ARRAY";
// Lấy ra thông tin của tất cả tài khoản
const userArr = JSON.parse(localStorage.getItem(KEY)) || [];
// Lấy ra thông tin của tài khoản hiện đang đăng nhập
let isLogged = JSON.parse(localStorage.getItem("currentUser")) || null;

// Hàm chuyển từ JS Object sang Class Instance
function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password,
    userData.pageSize,
    userData.category
  );
  return user;
}

function parseTask(userData) {
  const task = new Task(userData.task, userData.owner, userData.isDone);
  return task;
}
