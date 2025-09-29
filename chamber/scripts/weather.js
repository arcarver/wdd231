const currentTemp = document.querySelector("#current-temp");
const currentIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const todayHigh = document.querySelector("#today");
const tomorrowHigh = document.querySelector("#tomorrow");
const nextDayHigh = document.querySelector("#nextDay");

const lat = 33.82;
const long = -117.92;
const days = 3;
const units = 'imperial'
const key = "6cf5556c988f3e57715ea9efdc920ce8";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=${units}`;
const urlForcast = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=${days}&appid=${key}&units=${units}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            currentTemp.textContent = data.main.temp;
            currentIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            currentIcon.alt = data.weather[0].description;
            captionDesc.textContent = data.weather[0].description;
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
    try {
        const response = await fetch(urlForcast);
        if (response.ok) {
            const dataForcast = await response.json();
            console.log(dataForcast);
            todayHigh.textContent = dataForcast.list[0].temp.max;
            tomorrowHigh.textContent = dataForcast.list[1].temp.max;
            nextDayHigh.textContent = dataForcast.list[2].temp.max;

        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
// apiFetch();