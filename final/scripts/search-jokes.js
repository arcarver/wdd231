const searchJoke = document.querySelector("#searchResults");

async function fetchJokes() {
    try {
        const term = document.querySelector("#searchTerm").value;
        const response = await fetch(
            `https://icanhazdadjoke.com/search?term=${term}`,
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
// searchJoke.addEventListener('input', function (event) {
//     console.log('hi', event.target.value);
// })