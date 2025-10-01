const membershipDetails = [
    {
        level: 'Gold',
        cost: 150,
        benefits: [
            ' Holiday Fair',
            ' Featured Spotlight',
            ' Monthly Networking Breakfast',
            ' Monthly Newsletter',
            ' Quarterly Seminars'
        ]
    },
    {
        level: 'Silver',
        cost: 100,
        benefits: [
            ' Featured Spotlight',
            ' Monthly Networking Breakfast',
            ' Monthly Newsletter',
            ' Quarterly Seminars'
        ]
    },
    {
        level: 'Bronze',
        cost: 50,
        benefits: [
            ' Monthly Networking Breakfast',
            ' Monthly Newsletter',
            ' Quarterly Seminars'
        ]
    },
    {
        level: 'NonProfit',
        cost: 150,
        benefits: [
            ' Monthly Networking Breakfast',
            ' Monthly Newsletter',
        ]
    },
]
// const coursesList = document.querySelector("#levels");
const modal = document.querySelector("#levelDetails");
const closeModal = document.querySelector(".close-button");


closeModal.addEventListener("click", () => {
    modal.close();
});

function showModal(membership) {
    const levelName = document.querySelector("#levelName");
    levelName.textContent = `${membership.level} Level`;
    cost.textContent = `Membership costs $${membership.cost} per month`;
    benefits.textContent = `Member benefits include: ${membership.benefits}`;
    modal.showModal();
}
//make one for each level, silver, bronze 
const goldLink = document.querySelector('#gold');
goldLink.addEventListener("click", () => {
    showModal(membershipDetails[0]);
})

const silverLink = document.querySelector('#silver');
silverLink.addEventListener("click", () => {
    showModal(membershipDetails[1]);
})

const bronzeLink = document.querySelector('#bronze');
bronzeLink.addEventListener("click", () => {
    showModal(membershipDetails[2]);
})

const npLink = document.querySelector('#np');
npLink.addEventListener("click", () => {
    showModal(membershipDetails[3]); 
})