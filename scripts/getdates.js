const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

const lastMod = document.querySelector("#last");
lastMod.innerHTML = `${document.lastModified}`;