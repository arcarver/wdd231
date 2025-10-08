
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
    discoveries.discover.forEach(discover => {
        // <section>
        const sectionElement = document.createElement('section');
        cardSection.appendChild(sectionElement);

        // <div>
        const divElement = document.createElement('div');
        sectionElement.appendChild(divElement);

        // <h2>Business Name</h2>
        const nameElement = document.createElement('h2');
        nameElement.textContent = places.name;
        divElement.appendChild(nameElement);

        // <p>Descripyion</p>
        const tagLineElement = document.createElement('p');
        tagLineElement.textContent = places.description;
        divElement.appendChild(textContent);

       

        // <img src="" alt="business picture" loading="lazy">
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', places.picture);
        // imageElement.className = 'businessimage';
        imageElement.setAttribute('loading', 'lazy');
        imageElement.setAttribute("alt", places.name);
        asideElement.appendChild(imageElement);

        // <address>address</address>
        const emailElement = document.createElement("address");
        emailElement.textcontent = places.address;
        asideElement.appendChild(addressElement);

       
    });
}

setupDiscovery();