
async function setupDiscovery() {
    const response = await fetch("data/discovery.json");
    const jsonData = await response.text();
    const discoveries = JSON.parse(jsonData);
    const cardSection = document.getElementsByClassName('discover');
    /*
        <section>
            <div>
                <h2>Business Name</h2>
                <figure>
                <address>
                <p>
                
            </div>
        </section>
    */
    discoveries.places.forEach(discover => {
        // <section>
        const sectionElement = document.createElement('section');
        sectionElement.classList.add('discover-section')
        cardSection[0].appendChild(sectionElement);

        // <div>
        const divElement = document.createElement('div');
        sectionElement.appendChild(divElement);

        // <h2>Business Name</h2>
        const nameElement = document.createElement('h2');
        nameElement.textContent = discover.name;
        divElement.appendChild(nameElement);

        // <p>Descripyion</p>
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = discover.description;
        divElement.appendChild(descriptionElement);

        // <img src="" alt="business picture" loading="lazy">
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', discover.picture);
        // imageElement.className = 'businessimage';
        imageElement.setAttribute('loading', 'lazy');
        imageElement.setAttribute("alt", discover.name);
        divElement.appendChild(imageElement);

        // <address>address</address>
        const addressElement = document.createElement('address');
        addressElement.textContent = discover.address;
        divElement.appendChild(addressElement);
    });
}

setupDiscovery();

const showVisits = document.querySelector(".visits");

let lastVisit = Number(window.localStorage.getItem("lastVisit")) || 0;

if (lastVisit !== 0) {
    showVisits.innerHTML = `Last visited ${new Date(lastVisit)}`;
} else {
    showVisits.innerHTML = "This is your first visit. Thank you for visiting!"
}
localStorage.setItem("lastVisit", Date.now()); 
