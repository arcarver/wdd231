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

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get("first"));

document.querySelector("#results").innerHTML = `
<p>Membership for ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p>Membership level is  ${myInfo.get('level')} on ${myInfo.get('timestamp')} </p>
<p>Your phone is ${myInfo.get('phone')}</p>
<p>Your email is ${myInfo.get('email')}</p>
<p>You are a ${myInfo.get('title')} at ${myInfo.get('organization')}</p>
<p>Your email is ${myInfo.get('email')}</p>
<p>${myInfo.get('description')}`

// searchJoke.addEventListener('input', function (event) {
//     console.log('hi', event.target.value);
// })