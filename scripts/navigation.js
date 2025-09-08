const hamButton = document.querySelector("#ham-btn");
const navigation = document.querySelector("#nav-bar");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("hidden");
    hamButton.classList.toggle("show");
});
