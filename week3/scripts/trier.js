const currentTemp = document.querySelector("#current-temp");
const currentIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=6d2f4a64caf622997aacb7b18661bfe0&units=imperial";
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
}
apiFetch();