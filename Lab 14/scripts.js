const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const apiKey = `7ce0865529ebeb2c82a0f27055e5216a`;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;

  /* Your code: check list arrays */
  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

      /* Your code: process element */
      list.innerHTML += `
        <li>
            <div class="info-wrapper">
                <p class="city-name">${name}<span class="region">${
        sys.country
      }</span></p>
                <p class="temperature">${Math.round(
                  main.temp
                )}<span>°C</span></p>
                <img src="${icon}" alt="weather icon" class="weather-icon">
                <p class="weather-state">${weather[0].description}</p>
            </div>
        </li>
      `;
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city 😫";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});
