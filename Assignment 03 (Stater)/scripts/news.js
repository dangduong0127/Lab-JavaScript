"use strict";

// kiểm tra tài khoản có đăng nhập thì mới hiển thị tin tức
if (isLogged) {
  const news_container = document.querySelector("#news-container");
  const pageNum = document.querySelector("#page-num");
  const btnNext = document.querySelector("#btn-next");
  const btnPrev = document.querySelector("#btn-prev");
  const category = isLogged.category;
  const pagesize = isLogged.pageSize;

  // Tạo hàm bất đồng bộ lấy data từ API
  async function getDataFromApi(country, page) {
    try {
      const promise = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pagesize}&page=${page}&apiKey=${APIkey}`
      );
      const data = await promise.json();
      renderData(data);
    } catch (err) {
      console.error("Đã xảy ra một lỗi: " + err);
    }
  }
  getDataFromApi("us", 1);
  // Hàm kiểm tra khi đến page cuối cùng thì ẩn nút Next
  function checkBtNext(dt) {
    if (pageNum.textContent == Math.ceil(dt.totalResults / category)) {
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "block";
    }
  }
  // Hàm kiểm tra khi ở page đầu tiên thì ẩn nút Previous
  function checkBtPrev() {
    if (pageNum.textContent == "1") {
      btnPrev.style.display = "none";
    } else {
      btnPrev.style.display = "block";
    }
  }
  // Hàm in ra các bài báo lấy từ API
  function renderData(dt) {
    checkBtNext(dt);
    checkBtPrev();
    news_container.innerHTML = null;
    dt.articles.forEach((data) => {
      news_container.innerHTML += `
                <div class="card flex-row flex-wrap">
                <div class="card mb-3" style="">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${data.urlToImage}"
                                class="card-img"
                                alt="${data.title}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.content}</p>
                                <a href="${data.url}"
                                    class="btn btn-primary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
                `;
    });
  }
  // Chuyển trang tiếp theo khi nhấn vào nút Next
  btnNext.addEventListener("click", () => {
    getDataFromApi("us", pageNum.textContent++);
  });
  // Lùi về trang trước khi nhấn vào nút Previous
  btnPrev.addEventListener("click", () => {
    getDataFromApi("us", pageNum.textContent--);
  });
} else {
  alert("Vui lòng đăng nhập tài khoản!!!");
  window.location.href = "../index.html";
}
