
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
        imageElement.classList.add('discoverImage');
        imageElement.setAttribute('src', discover.picture);
        // imageElement.className = 'businessimage';
        imageElement.setAttribute('loading', 'lazy');
        imageElement.setAttribute("alt", discover.name);
        divElement.appendChild(imageElement);

        // <address>address</address>
        const addressElement = document.createElement('address');
        addressElement.textContent = discover.address;
        divElement.appendChild(addressElement);

        //  learn more button
        const buttonElement = document.createElement('button');
        divElement.appendChild(buttonElement);
        divElement.classList.add('buttonLearnMore');
        buttonElement.innerHTML = "Learn More";
    });
}

setupDiscovery();

const showVisits = document.querySelector(".visits");

let lastVisit = Number(window.localStorage.getItem("lastVisit")) || 0;
// lastVisit = 0;
const currentDate = Date.now();

if (lastVisit == 0) {
    showVisits.innerHTML = "Welcome! Let us know if you have any questions."
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
