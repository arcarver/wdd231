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
// Created from JSON.stringify of actual API response
const weatherJsonExample = '{"coord":{"lon":-117.92,"lat":33.82},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":73.74,"feels_like":74.01,"temp_min":73.74,"temp_max":73.74,"pressure":1014,"humidity":68,"sea_level":1014,"grnd_level":1014},"visibility":10000,"wind":{"speed":9.13,"deg":233,"gust":7.34},"clouds":{"all":5},"dt":1759110376,"sys":{"country":"US","sunrise":1759067046,"sunset":1759110013},"timezone":-25200,"id":5323810,"name":"Anaheim","cod":200}';
const forecastJsonExample = '{"city":{"id":5323810,"name":"Anaheim","coord":{"lon":-117.92,"lat":33.82},"country":"US","population":336265,"timezone":-25200},"cod":"200","message":1.4050294,"cnt":3,"list":[{"dt":1759086000,"sunrise":1759067046,"sunset":1759110013,"temp":{"day":78.3,"min":67.42,"max":80.33,"night":69.96,"eve":73.38,"morn":67.42},"feels_like":{"day":78.78,"night":69.85,"eve":73.71,"morn":67.82},"pressure":1016,"humidity":63,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"speed":10.18,"deg":228,"gust":7.34,"clouds":36,"pop":0},{"dt":1759172400,"sunrise":1759153487,"sunset":1759196330,"temp":{"day":74.44,"min":67.1,"max":75.56,"night":68.86,"eve":73.33,"morn":67.75},"feels_like":{"day":74.35,"night":68.94,"eve":73.27,"morn":67.66},"pressure":1015,"humidity":59,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":12.33,"deg":237,"gust":9.71,"clouds":0,"pop":0},{"dt":1759258800,"sunrise":1759239930,"sunset":1759282647,"temp":{"day":72.95,"min":67.6,"max":73.9,"night":69.76,"eve":71.83,"morn":67.64},"feels_like":{"day":72.57,"night":69.49,"eve":71.49,"morn":67.68},"pressure":1016,"humidity":56,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":11.1,"deg":232,"gust":8.79,"clouds":0,"pop":0}]}';
// Change to false to use API key, true for mock data
const useMockData = true;

function getStringDate(dayOfWeek) {
    if (dayOfWeek > 6) {
        dayOfWeek -= 7;
    }
    switch (dayOfWeek) {
        case 0:
            return 'Sunday:';
        case 1:
            return 'Monday:';
        case 2:
            return 'Tuesday:';
        case 3:
            return 'Wednesday:';
        case 4:
            return 'Thursday:';
        case 5:
            return 'Friday:';
        case 6:
            return 'Saturday:';
        default:
            return '???:';
    }
}

async function apiFetch() {
    try {
        const response = useMockData ? { ok: true } : await fetch(url);
        if (response.ok) {
            const data = useMockData ? JSON.parse(weatherJsonExample) : await response.json();
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
        const response = useMockData ? { ok: true } : await fetch(urlForcast);
        if (response.ok) {
            const dataForcast = useMockData ? JSON.parse(forecastJsonExample) : await response.json();
            console.log(dataForcast);
            todayHigh.textContent = 'Today: ' + dataForcast.list[0].temp.max;
            const currentDate = new Date();
            tomorrowHigh.textContent = getStringDate(currentDate.getDay() + 1) + ' ' + dataForcast.list[1].temp.max;
            nextDayHigh.textContent = getStringDate(currentDate.getDay() + 2) + ' ' + dataForcast.list[2].temp.max;

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