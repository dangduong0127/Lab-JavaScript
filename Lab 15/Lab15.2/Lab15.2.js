"use strict";

// Phan 1
function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.src = imgPath;

    image.addEventListener("load", function () {
      resolve(document.body.appendChild(image));
    });

    image.addEventListener("error", function () {
      reject(console.error("Đã xảy ra lỗi!!!"));
      reject(document.writeln("Đã xảy ra lỗi!!!"));
    });
  });
}

function wait(s) {
  return new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });
}

async function loadNPause() {
  try {
    const imgs = await createImage("background-dep-3-2.png");
    await wait(2);
    imgs.style.display = "none";
    const imgs1 = await createImage("background-dep-3d-800x450.jpg");
    await wait(2);
    imgs1.style.display = "none";
    console.log(imgs1);
  } catch (err) {
    console.error("Đã xảy ra lỗi!" + err);
  }
}

// loadNPause();

// Phan 2

const imgArr = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];

async function loadAll(imgArr) {
  try {
    const imgs = imgArr.map(async (x) => await createImage(x));
    const result = await Promise.all(imgs);
    result.forEach((x) => x.classList.add("parallel"));
    console.log(imgs);
  } catch (err) {
    console.error("Đã xảy ra lỗi!" + err);
  }
}

loadAll(imgArr);
