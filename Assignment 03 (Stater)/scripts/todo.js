"use strict";
// Kiểm tra người dùng đã đăng nhập hay chưa nếu chưa thì chuyển sang trang Login
if (isLogged) {
  const todoList = document.querySelector("#todo-list");
  const btn_Add = document.querySelector("#btn-add");
  const input = document.querySelector("#input-task");
  const todoArr = JSON.parse(localStorage.getItem("todoList")) || [];

  btn_Add.addEventListener("click", function () {
    //Kiểm tra trường input in ra thông báo nếu người dùng bỏ trống
    if (input.value.trim() === "") {
      alert("Hãy nhập vào một nhiệm vụ!!");
    } else {
      const userTask = new Task(input.value, isLogged.username, false);
      // Đẩy task mới vào mảng userTask
      todoArr.push(userTask);
      // Lưu vào localStorage
      localStorage.setItem("todoList", JSON.stringify(todoArr));
      //Hiển thị dữ liệu
      renderTodoList();
    }
  });
  //Hiển thị dữ liệu của todoList ngay từ khi vào trang
  renderTodoList();
  // Hàm hiển thị dữ liệu từ localStorage
  function renderTodoList() {
    // Xoá dữ liệu ở trường nhập vào sau khi người dùng nhấn nút add
    input.value = "";
    todoList.innerHTML = null;
    // Duyệt mảng todoArr lấy dữ liệu
    todoArr.forEach((data) => {
      // Lọc ra các task của tài khoản đang đăng nhập
      if (data.owner === isLogged.username) {
        todoList.innerHTML += `
      <li class="${data.isDone ? "checked" : ""}">${
          data.task
        }<span class="close">×</span></li>
    `;
      }
    });
    toggleTask();
    deleteTask();
  }

  // Hàm toggle task
  function toggleTask() {
    // Lấy tất cả phần tử li nằm trong phần tử id = #todo-list
    // Sau đó dùng forEach để gắn sự kiện click cho từng phần tử con
    document.querySelectorAll("#todo-list li").forEach((li) => {
      li.addEventListener("click", function (e) {
        // đặt điều kiện tránh phần tử span có nút delete
        // để không bị trồng sự kiện toggle
        if (e.target !== li.children[0]) {
          li.classList.toggle("checked");
        }
        // Tìm task được user click
        const search = todoArr.find(
          (x) => x.task === li.textContent.slice(0, -1)
        );
        if (search) {
          // kiểm tra nếu li đc click có class checked thì trả về true hoặc false thông qua hàm contains
          search.isDone = li.classList.contains("checked");
          // Lưu vào localStorage
          localStorage.setItem("todoList", JSON.stringify(todoArr));
        }
      });
    });
  }
  // Hàm Delete Task
  function deleteTask() {
    // Lấy tất cả phần tử span nằm trong phần tử id = #todo-list
    document.querySelectorAll("#todo-list span").forEach((span) => {
      span.addEventListener("click", function Delete() {
        const cf = confirm("Bạn có chắc chắn muốn xoá không?");
        if (cf) {
          // Tìm nút delete của task được user click
          const search = todoArr.findIndex(
            (x) => x.task === span.parentElement.textContent.slice(0, -1)
          );
          todoArr.splice(search, 1);
          // Lưu vào localStorage
          localStorage.setItem("todoList", JSON.stringify(todoArr));
          // Hiện thị lại dữ liệu ngay sau khi ấn xoá
          renderTodoList();
        }
      });
    });
  }
} else {
  alert("Vui lòng đăng nhập tài khoản!!!");
  window.location.href = "../index.html";
}
