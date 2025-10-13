const randomJoke = document.querySelector("#randomJoke");
const jokeButton = document.querySelector("#newJoke");
// fetch('GET https://icanhazdadjoke.com/')
// .then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
// })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation. Try again later', error);
//     });

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
        randomJoke.textContent = data.joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}
async function newJoke() {
    fetchJoke();
}

jokeButton.addEventListener("click", () => {
    newJoke();
})

fetchJoke();

// GET https://icanhazdadjoke.com/