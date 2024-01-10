"use strict";

const firstName = document.querySelector("#input-firstname");
const lastName = document.querySelector("#input-lastname");
const userName = document.querySelector("#input-username");
const password = document.querySelector("#input-password");
const cf_password = document.querySelector("#input-password-confirm");
const KEY = "USER_ARRAY";
const userArr = JSON.parse(localStorage.getItem(KEY)) || [];
