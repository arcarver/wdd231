import { jokeDefinitions } from "./jokeModule.js";

// async function jokeModal() {
//     const response = await fetch("data/definitions.json");
//     const jsonData = await response.text();
//     const definitions = JSON.parse(jsonData);

// <h2> Type of joke
// <p> definition
// <p> example
// #jokeDetails
// section #typeOfJoke

const modal = document.querySelector("#jokeDetails");
const closeModal = document.querySelector(".close-button");

closeModal.addEventListener("click", () => {
    modal.close();
});

function showModal(joke) {
    const jokeType = document.querySelector("#jokeName");
    jokeType.textContent = joke.type;
    const jokeDefinition = document.querySelector("#jokeDefinition");
    jokeDefinition.textContent = joke.definition;
    const jokeExample = document.querySelector("#jokeExample");
    jokeExample.textContent = joke.example;
    modal.showModal();
}
//make one for each level, silver, bronze
// const goldLink = document.querySelector('#gold');
// goldLink.addEventListener("click", () => {
//     showModal(membershipDetails[0]);
// })

function getJokeForRadioButton(value) {
    for (let i = 0; i < jokeDefinitions.length; ++i) {
        if (jokeDefinitions[i].type == value) {
            return jokeDefinitions[i];
        }
    }

    return undefined;
}

const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', (event) => {
        const joke = getJokeForRadioButton(event.target.value);
        if (joke) {
            showModal(joke);
        }
    });
});

//This might not be reight or nessisary
// aLink.addEventListener("click", () => {
//     const jokeType = document.querySelector("#typeOfClass");
//     jokeType.textContent = value.type;
//     const jokeDefinition = document.querySelector("#definition");
//     jokeDefinition.textContent = value.definition;
//     const jokeExample = document.querySelector("#example");
//     jokeExample.textContent = value.example;
//     modal.showModal();
// })


