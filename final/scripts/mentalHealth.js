async function setupMentalHealth() {
    const response = await fetch("data/health.json");
    const jsonData = await response.text();
    const providers = JSON.parse(jsonData);
    const cardSection = document.getElementById('healthCards');
    /*
    <section>
    <h3> name
    <p> description
    <h4> contact
    <h4? cost

    */
    providers.providers.forEach(provider => {
        const sectionElement = document.createElement('section');
        sectionElement.className = 'mental';
        cardSection.appendChild(sectionElement);

        const nameElement = document.createElement('h3');
        nameElement.textContent = provider.name;
        sectionElement.appendChild(nameElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = provider.description;
        sectionElement.appendChild(descriptionElement);

        const contactElement = document.createElement('h4');
        contactElement.textContent = provider.contact;
        sectionElement.appendChild(contactElement);

        const costElement = document.createElement('h4');
        costElement.textContent = provider.cost;
        costElement.className = 'cost';
        sectionElement.appendChild(costElement);
    });
}
setupMentalHealth();

//counts numbers of visits
const showVisits = document.querySelector(".visits");

let lastVisit = Number(window.localStorage.getItem("lastVisit")) || 0;
// lastVisit = 0;
const currentDate = Date.now();

if (lastVisit == 0) {
    showVisits.innerHTML = "Welcome! Laugh. Cry. Let us know if you have any questions."
} else {
    let lastVisitDate = new Date(lastVisit);
    // lastVisitDate = new Date(lastVisitDate.setHours(lastVisitDate.getHours() - 25));
    const timeDifferenceInMilliseconds = currentDate - lastVisitDate;
    const differenceInDays = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24));
    if (differenceInDays < 1) {
        showVisits.innerHTML = 'Back so soon! Awesome!'
    } else if (differenceInDays == 1) {
        showVisits.innerHTML = `You last visited ${differenceInDays} day ago`;
    } else {
        showVisits.innerHTML = `You last visited ${differenceInDays} days ago`;
    }
}
localStorage.setItem("lastVisit", currentDate); 
