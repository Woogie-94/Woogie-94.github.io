window.onload = function () {
  search();
  getData("Busan");
  timeStamp();
};

function renderWeatherData(data) {
  const body = document.body;
  const cityName = document.querySelector(".city_name");
  const temp = document.querySelector(".temp");
  const image = ["./image/cloud.jpg", "./image/sunny_day.jpeg", "./image/rain.jpg", "./image/snow.jpg"];
  const c = (data.main.temp - 273.15).toFixed(1);
  const f = (c * 1.8 + 32).toFixed(1);

  if (data.weather[0].main === "Clouds") body.style.backgroundImage = `url(${image[0]})`;
  if (data.weather[0].main === "Clear") body.style.backgroundImage = `url(${image[1]})`;
  if (data.weather[0].main === "Rain") body.style.backgroundImage = `url(${image[2]})`;
  if (data.weather[0].main === "Snow") body.style.backgroundImage = `url(${image[3]})`;

  cityName.textContent = data.name;
  temp.textContent = `${f}F / ${c}C`;
}

function getData(name) {
  const API_KEY = "522f563b88b45d9f1003bda006f894b4";
  let API_URL_OpenWeatherMap = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`;

  fetch(API_URL_OpenWeatherMap)
    .then(function (res) {
      console.log(res);
      if (!res.ok) {
        alert("찾는 도시가 없습니다.");
        document.querySelector(".search_input").value = "";
      }
      return res.json();
    })
    .then(function (data) {
      renderWeatherData(data);
    });
}

function timeStamp() {
  const time = document.querySelector(".time");

  time.textContent = `${new Date().getHours()}:${m()}`;

  setInterval(function () {
    console.log("1");
    time.textContent = `${new Date().getHours()}:${m()}`;
  }, 10000);

  function m() {
    if (new Date().getMinutes() < 10) {
      return `0${new Date().getMinutes()}`;
    } else {
      return new Date().getMinutes();
    }
  }
}

function search() {
  const searchInput = document.querySelector(".search_input");

  searchInput.addEventListener("change", function (e) {
    e.preventDefault();
    getData(searchInput.value);
    searchInput.value = "";
  });
}
