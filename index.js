const weatherApi = {
    key: "1e23eb4ebf9bdb46a1497e99878b7802",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  };
  
  // Event Listner Function on keypress
  const searchInputBox = document.getElementById("input-box");
  
  searchInputBox.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
      console.log(searchInputBox.value);
      getWeatherReport(searchInputBox.value);
    }
  });
  
  //Get Whether Report
  
  function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
      .then((weather) => {
        return weather.json();
      })
      .then(showWeatherReport);
  }
  
  //Show Weather Report
  
  function showWeatherReport(weather) {
    console.log(weather);
    let city = document.getElementById("city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let temperature = document.getElementById("temp");
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
  
    let minMaxTemp = document.getElementById("min-max");
    minMaxTemp.innerHTML = `${Math.floor(
      weather.main.temp_min
    )}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;
  
    let weatherType = document.getElementById("weather");
    weatherType.innerText = `${weather.weather[0].main}`;
    let date = document.getElementById("date");
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
  
    if (weatherType.textContent == "Clear") {
      document.getElementById("app-main").style.backgroundImage =
        "url(images/Clear.jpg)";
      document.getElementById("img").src = "images/img1.png";
    } else if (weatherType.textContent == "Clouds") {
      document.getElementById("app-main").style.backgroundImage =
        "url(images/Clouds.jpg)";
      document.getElementById("img").src = "images/img2.png";
    } else if (weatherType.textContent == "Rain") {
      document.getElementById("app-main").style.backgroundImage =
        "url(images/Rain.jpg)";
      document.getElementById("img").src = "images/img3.png";
    } else if (weatherType.textContent == "Snow") {
      document.getElementById("app-main").style.backgroundImage =
        "url(images/Snow.jfif)";
      document.getElementById("img").src = "images/img4.png";
    } else if (weatherType.textContent == "Thunderstorm") {
      document.getElementById("app-main").style.backgroundImage =
        "url(images/thunder.jfif)";
      document.getElementById("img").src = "images/img5.png";
    }  else if (weatherType.textContent == "Haze") {
      document.getElementById("app-main").style.backgroundImage =
        "url(images/Haze.jpg)";
      document.getElementById("img").src = "images/img6.png";
    }  else if (weatherType.textContent == "Smoke") {
      document.getElementById("app-main").style.backgroundImage =
        "url(images/Smoke.jpg)";
      document.getElementById("img").src = "images/img7.png";
    }  else if (weatherType.textContent == "Mist") {
      document.getElementById("app-main").style.backgroundImage =
        "url(images/Mist.jfif)";
      document.getElementById("img").src = "images/img8.png";
    }
  }
  //Date manage
  
  function dateManage(dateArg) {
    let days = [
      "sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
  
    return `${date} ${month} (${day}), ${year}`;
  }