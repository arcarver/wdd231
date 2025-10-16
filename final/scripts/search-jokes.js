async function fetchJokes(term) {
    try {
        const searchJoke = document.querySelector("#firstSearchJoke");
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
        // console.log(data);
        // console.log(data.joke);
        searchJoke.textContent = data.results[0].joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

const myJokes = new URLSearchParams(window.location.search);
// console.log(myJokes);

// console.log(myJokes.get("type"));

const term = myJokes.get("searchTerm");
let termOrAnything = term;
if (termOrAnything == '') {
    termOrAnything = 'anything';
}
document.querySelector("#searchResults").innerHTML = `
<p>You are searching for a joke about ${termOrAnything}.</p>
<p>Your favorite type of Jokes is ${myJokes.get('type')}. </p>`;

if (myJokes.get('description') != "") {
    document.querySelector("#searchResults").innerHTML += `<p>Here the joke you shared: ${myJokes.get('description')}</p>`;
}



fetchJokes(term);
