"use strict";
if (isLogged) {
  const newsContainer = document.querySelector("#news-container");
  const pageNum = document.querySelector("#page-num");
  const btnNext = document.querySelector("#btn-next");
  const btnPrev = document.querySelector("#btn-prev");
  const inputQuery = document.querySelector("#input-query");
  const btnSearch = document.querySelector("#btn-submit");

  // Hàm bất đồng bộ lấy data từ News API
  async function getdataFromApi(query, page) {
    try {
      const responsive = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=6&page=${page}&apiKey=${APIkey}`
      );
      const data = await responsive.json();
      renderData(data);
    } catch (err) {
      console.error("Something wrong" + err);
    }
  }
  // Đặt sự kiện click cho nút search
  btnSearch.addEventListener("click", function () {
    // Kiểm tra nếu người dùng ko nhập gì vào thì hiện ra thông báo
    // Nếu có thì gọi hàm getdataFromApi()
    if (inputQuery.value.trim() === "") {
      alert("Vui lòng nhập thông tin bạn muốn tìm!!!");
    } else {
      getdataFromApi(inputQuery.value, 1);
    }
  });
  // Hàm in ra các bài báo lấy từ API
  function renderData(data) {
    checkBtNext(data);
    checkBtPrev();

    newsContainer.innerHTML = null;
    data.articles.forEach((dt) => {
      newsContainer.innerHTML += `
                  <div class="card flex-row flex-wrap">
                  <div class="card mb-3" style="">
                      <div class="row no-gutters">
                          <div class="col-md-4">
                              <img src="${dt.urlToImage}"
                                  class="card-img"
                                  alt="${dt.title}">
                          </div>
                          <div class="col-md-8">
                              <div class="card-body">
                                  <h5 class="card-title">${dt.title}</h5>
                                  <p class="card-text">${dt.content}</p>
                                  <a href="${dt.url}"
                                      class="btn btn-primary">View</a>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                  `;
    });
  }
  // Hàm kiểm tra khi đến page cuối cùng thì ẩn nút Next
  function checkBtNext(data) {
    if (pageNum.textContent == Math.ceil(data.totalResults / 5)) {
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "block";
    }
  }
  // Hàm kiểm tra khi ở page đầu tiên thì ẩn nút Previous
  function checkBtPrev() {
    if (pageNum.textContent == 1) {
      btnPrev.style.display = "none";
    } else {
      btnPrev.style.display = "block";
    }
  }
  // Chuyển trang tiếp theo khi nhấn vào nút Next
  btnNext.addEventListener("click", function () {
    getdataFromApi(inputQuery.value, pageNum.textContent++);
  });
  // Lùi về trang trước khi nhấn vào nút Previous
  btnPrev.addEventListener("click", function () {
    getdataFromApi(inputQuery.value, pageNum.textContent--);
  });
} else {
  alert("Vui lòng đăng nhập hoặc đăng ký tài khoản!!!");
  window.location.href = "../index.html";
}
