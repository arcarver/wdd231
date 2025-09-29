async function getAllBusinesses() {
    const response = await fetch("data/members.json");
    const jsonData = await response.text();
    const businesses = JSON.parse(jsonData);
    return businesses;
}

async function setupFilteredCompanies(companies) {
    const cardSection = document.getElementById('businessSpotlight');
    if (companies.length > 1) {
        const firstNumber = Math.floor(Math.random() * companies.length);
        let secondNumber = Math.floor(Math.random() * companies.length);
        while (secondNumber === firstNumber) {
            secondNumber = Math.floor(Math.random() * companies.length);
        }

        companies = [companies[firstNumber], companies[secondNumber]];
    }
     
    /*
        <section>
            <div>
                <h3>Business Name</h3>
                <h4>Business Tag line</h4>
                <aside>
                    <img src="" alt="business picture">
                    <h5>EMAIL</h5>
                    <h5>PHONE</h5>
                    <h5>URL</h5>
                </aside>
            </div>
        </section>
    */
    companies.forEach(company => {
        // <section>
        const sectionElement = document.createElement('section');
        sectionElement.classList.add('spotlight-section');
        cardSection.appendChild(sectionElement);

        // <div>
        const divElement = document.createElement('div');
        sectionElement.appendChild(divElement);

        // <h3>Business Name</h3>
        const nameElement = document.createElement('h2');
        nameElement.textContent = company.name;
        divElement.appendChild(nameElement);

        // <h4>Business Tag line</h4>
        const tagLineElement = document.createElement('h3');
        tagLineElement.textContent = company.tagLine;
        divElement.appendChild(tagLineElement);

        // <aside>
        const asideElement = document.createElement('aside');
        divElement.appendChild(asideElement);

        // <img src="" alt="business picture" loading="lazy">
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', company.image);
        imageElement.className = 'businessimage';

        // imageElement.setAttribute('loading', 'lazy');
        imageElement.setAttribute("alt", company.name);
        asideElement.appendChild(imageElement);

        // <h5>EMAIL</h5>
        const emailElement = document.createElement("h4");
        emailElement.textcontent = company.email;
        asideElement.appendChild(emailElement);

        
        //         <h5>PHONE</h5>
        const phoneElement = document.createElement("h4");
        phoneElement.textContent = company.phone;
        asideElement.appendChild(phoneElement);

        //         <h5>URL</h5>
        const urlElement = document.createElement("h5");
        urlElement.textContent = company.websiteUrl;
        asideElement.appendChild(urlElement);
    });
}

async function setSilverAndGoldBusinesses() {
    const businesses = await getAllBusinesses();
    const companies = businesses.companies.filter((company) => {
        return company.membershipLevel === "Silver" || company.membershipLevel === "Gold";
    })

    setupFilteredCompanies(companies);
}

setSilverAndGoldBusinesses();
//setupFilteredBusinesses();

//filter gold and silver
// if (membershipLevel === "silver" || membershipLevel === "gold")
// {
//     const images = document.getElementsByClassName('businessimage');
//     for (const image of images) {
//         image.classList.add('hiddenimage');
//         image.parentElement.classList.add('listview');
//     }
    
// }

// const displayToggleElement = document.querySelector('#displayToggle');
// let showAllContent = true;
// displayToggleElement.addEventListener("click", () => {
//     if (showAllContent) {
//         document.getElementById('switchtext').textContent = "List view";
//         const images = document.getElementsByClassName('businessimage');
//         for (const image of images) {
//             image.classList.add('hiddenimage');
//             image.parentElement.classList.add('listview');
//         }
//     } else {
//         document.getElementById('switchtext').textContent = "Card view";
//         const images = document.getElementsByClassName('businessimage');
//         for (const image of images) {
//             image.classList.remove('hiddenimage');
//             image.parentElement.classList.remove('listview');
//         }
//     }
//     showAllContent = !showAllContent;
// });
