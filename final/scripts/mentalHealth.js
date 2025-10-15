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
        sectionElement.appendChild(costElement);
    });
}
setupMentalHealth();