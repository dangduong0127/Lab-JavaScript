"use strict";

if (isLogged) {
  const ippageSize = document.querySelector("#input-page-size");
  const ipCategory = document.querySelector("#input-category");
  const btnSetting = document.querySelector("#btn-submit");
  // Hiển thị setting mặc định
  ippageSize.value = isLogged.pageSize;
  ipCategory.value = isLogged.category;
  btnSetting.addEventListener("click", function () {
    validate();
    if (val) {
      isLogged.pageSize = Number(ippageSize.value);
      isLogged.category = ipCategory.value;
      localStorage.setItem("currentUser", JSON.stringify(isLogged));

      // Cập nhật lại mảng userArr
      let search = userArr.find((x) => x.username === isLogged.username);
      if (search) {
        search = isLogged;
        localStorage.setItem(KEY, JSON.stringify([search]));
        alert("Cài đặt thành công!");
      }
    }
  });
  // Hàm xác thực phần news per page người dùng nhập vào phải là 1 số tự nhiên
  let val = true;
  function validate() {
    if (Number.isNaN(Number.parseInt(ippageSize.value))) {
      alert("News per page phải là 1 số tự nhiên!!!");
      return (val = false);
    }
    val = true;
  }
} else {
  alert("Vui lòng đăng nhập tài khoản!!!");
  window.location.href = "../index.html";
}
