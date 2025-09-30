function formtime() {
    const now = new Date();
    document.getElementById('timestamp').setAttribute('value', now);
    document.getElementById('timestamp').innerText = now;
}
formtime();