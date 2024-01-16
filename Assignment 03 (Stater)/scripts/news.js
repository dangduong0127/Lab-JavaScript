"use strict";

const APIkey = "fc2349fe24f04b33805a9c19ad677ff8";
const category = "business";
const news_container = document.querySelector("#news-container");
const pageNum = document.querySelector("#page-num");
const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");
console.log(isLogged);
if (isLogged) {
  async function getDataFormApi(country, page) {
    try {
      const promise = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=6&page=${page}&apiKey=${APIkey}`
      );
      const data = await promise.json();
      console.log(data);
      renderData(data);
    } catch (err) {
      console.error("Đã xảy ra một lỗi: " + err);
    }
  }
  getDataFormApi("us", 1);

  function checkBtNext(dt) {
    if (pageNum.textContent == Math.ceil(dt.totalResults / 6)) {
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "block";
    }
  }
  function checkBtPrev(dt) {
    if (pageNum.textContent == "1") {
      btnPrev.style.display = "none";
    } else {
      btnPrev.style.display = "block";
    }
  }

  function renderData(dt) {
    checkBtNext(dt);
    checkBtPrev(dt);
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

  btnNext.addEventListener("click", () => {
    getDataFormApi("us", pageNum.textContent++);
  });

  btnPrev.addEventListener("click", () => {
    getDataFormApi("us", pageNum.textContent--);
  });
}
