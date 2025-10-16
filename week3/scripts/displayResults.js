const apiKey = '6cf5556c988f3e57715ea9efdc920ce8';

async function displayResults(data) {
    // currentTemp.innerHTML = `${data.main}&deg;F`;
    const lat = 49.750000;
    const lon = 6.633333;
    const units = 'imperial';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    const response = await fetch(url);
    if (!response.ok) {
        console.error("failed to fetch weather data");
    } else {
        const weatherData = await response.json();
        // console.log('JSON data:', data);
        // At the minimum, include:
        // the current temperature,
        // the current weather description, and
        // a three(3) day temperature forecast that is properly labeled.
        console.log('current temperature', weatherData.main.temp);
        console.log('current weather description', weatherData.weather[0].description);
        const cnt = 3;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiKey}&units=${units}`
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) {
            console.error("failed to fetch weather forecast");
        } else {
            console.log('three(3) day temperature forecast day 1: ', weatherData.list[0].temp.day);
            console.log('three(3) day temperature forecast day 2: ', weatherData.list[1].temp.day);
            console.log('three(3) day temperature forecast day 3: ', weatherData.list[2].temp.day);

            // const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
            // let desc = data.weather[0].______;
            // weatherIcon.setAttribute('___', _____);
            // weatherIcon.setAttribute('___', _____);
            // captionDesc.textContent = `${desc}`;
        }
    }
}

// This makes the method be run
// void displayResults();