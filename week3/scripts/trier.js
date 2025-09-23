const currentTemp = document.querySelector("#current-temp");
const currentIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat={49.75° N}&lon={6.64° E}&appid={6d2f4a64caf622997aacb7b18661bfe0}&units=imperial";
url = querySelector("weather");
async function apiFetch()
{
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
        else {
            throw Error(await response.text());
        }
    } 
    catch(error)
    {
        console.log(error);
    }
}
apiFetch();