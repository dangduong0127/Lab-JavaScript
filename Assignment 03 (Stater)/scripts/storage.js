"use strict";

const firstName = document.querySelector("#input-firstname");
const lastName = document.querySelector("#input-lastname");
const userName = document.querySelector("#input-username");
const password = document.querySelector("#input-password");
const cf_password = document.querySelector("#input-password-confirm");
const KEY = "USER_ARRAY";
const userArr = JSON.parse(localStorage.getItem(KEY)) || [];
let isLogged = JSON.parse(localStorage.getItem("currentUser")) || null;

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
