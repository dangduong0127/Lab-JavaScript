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

// createImage("background-dep-3-2.png");
// Phan 2

function wait(s) {
  return new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });
}

let currentImg;
createImage("background-dep-3-2.png")
  .then((resolve) => {
    currentImg = resolve;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("background-dep-3d-800x450.jpg");
  })
  .then((resolve) => {
    currentImg = resolve;
    return wait(2);
  })
  .then(() => (currentImg.style.display = "none"))
  .catch((err) => console.error(err));
