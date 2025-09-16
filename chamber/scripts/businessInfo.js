

async function setupBusinesses() {
    const response = await fetch("data/members.json");
    const jsonData = await response.text();
    const businesses = JSON.parse(jsonData);
    const cardSection = document.getElementById('businessCards');
    /*
        <section>
            <h3>Business Name</h3>
            <h4>Business Tag line</h4>
            <aside>
                <img src="" alt="business picture">
                <h5>EMAIL</h5>
                <h5>PHONE</h5>
                <h5>URL</h5>
            </aside>
        </section>
    */
    businesses.companies.forEach(company => {
        const sectionElement = document.createElement('section');

        // <h3>Business Name</h3>
        const nameElement = document.createElement('h3');
        nameElement.textContent = company.name;
        sectionElement.appendChild(nameElement);

        // <h4>Business Tag line</h4>
        const tagLineElement = document.createElement('h4');
        tagLineElement.textContent = company.tag_line;
        sectionElement.appendChild(tagLineElement);

        // <aside>
        const asideElement = document.createElement('aside');
        sectionElement.appendChild(asideElement);

        // <img src="" alt="business picture">
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', company.image);
        asideElement.appendChild(imageElement);

        cardSection.appendChild(sectionElement);
    });
}

setupBusinesses();
