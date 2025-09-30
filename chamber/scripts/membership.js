const membershipDetails = [
    {
        level: 'Gold',
        cost: 150,
        benefits: [
            'Holiday Fair',
            'Featured Spotlight',
            'Monthly Networking Breakfast',
            'Monthly Newsletter',
            'Quarterly Seminars'
        ]
    },
    {
        level: 'Silver',
        cost: 100,
        benefits: [
            'Featured Spotlight',
            'Monthly Networking Breakfast',
            'Monthly Newsletter',
            'Quarterly Seminars'
        ]
    },
    {
        level: 'Bronze',
        cost: 50,
        benefits: [
            'Monthly Networking Breakfast',
            'Monthly Newsletter',
            'Quarterly Seminars'
        ]
    },
    {
        level: 'NonProfit',
        cost: 150,
        benefits: [
            'Monthly Networking Breakfast',
            'Monthly Newsletter',
        ]
    },
]
const coursesList = document.querySelector("#levels");
const modal = document.querySelector("#levelDetails");
const closeModal = document.querySelector(".close-button");


closeModal.addEventListener("click", () => {
    modal.close();
});
//make one for each level, silver, bronze 
const goldLink = document.querySelector('#gold');
goldLink.addEventListener("click", () => {
    const membershipName = document.querySelector("#levelName");
    membershipName.textContent = value.level;
    const price = document.querySelector("#cost");
    price.textContent = value.cost;
    const levelBenefits = document.querySelector("#benefits");
    levelBenefits.textContent = `${value.benefits} credits`;
    modal.showModal();
})

const silverLink = document.querySelector('#silver');
silverLinkLink.addEventListener("click", () => {
    const membershipName = document.querySelector("#levelName");
    membershipName.textContent = value.level;
    const price = document.querySelector("#cost");
    price.textContent = value.cost;
    const levelBenefits = document.querySelector("#benefits");
    levelBenefits.textContent = `${value.benefits} credits`;
    modal.showModal();
})

const bronzeLink = document.querySelector('#bronze');
bronzeLink.addEventListener("click", () => {
    const membershipName = document.querySelector("#levelName");
    membershipName.textContent = value.level;
    const price = document.querySelector("#cost");
    price.textContent = value.cost;
    const levelBenefits = document.querySelector("#benefits");
    levelBenefits.textContent = `${value.benefits} credits`;
    modal.showModal();
})

const npLink = document.querySelector('#np');
npLink.addEventListener("click", () => {
    const membershipName = document.querySelector("#levelName");
    membershipName.textContent = value.level;
    const price = document.querySelector("#cost");
    price.textContent = value.cost;
    const levelBenefits = document.querySelector("#benefits");
    levelBenefits.textContent = `${value.benefits} credits`;
    modal.showModal();
})