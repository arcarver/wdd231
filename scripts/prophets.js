const utl = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophets) => {
        let card = document.createElement('section');
        let fullname = document.createElement('h2');
        let portrait = document.createElement('img');

        fullname.textContent = `${prophet.getProphetData} `;

        portrait.setAttribute(src, prophets.imgeurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} `);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(heading);
        card.appendChild(portrait);

        cards.appendChild(card);
        
            
    });
}
getProphetData();
