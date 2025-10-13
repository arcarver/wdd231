const searchJoke = document.querySelector("#randomJoke");
async function fetchJoke() {
    try {
        const response = await fetch(
            'https://icanhazdadjoke.com/',
            {
                headers: { "Accept": "application/json" },
            }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        console.log(data.joke);
        searchJoke.textContent = data.joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

fetchJoke();