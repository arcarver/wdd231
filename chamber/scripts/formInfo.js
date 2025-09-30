const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get("first"));

document.querySelector("#results").innerHTML = `
<p>Membership for ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p>Membership level is  ${myInfo.get('level')} on ${myInfo.get('timestamp')} </p>
<p>Your phone is ${myInfo.get('phone')}</p>
<p>Your email is ${myInfo.get('email')}</p>
<p>You are a ${myInfo.get('title')} at ${myInfo.get('organization')}</p>
<p>Your email is ${myInfo.get('email')}</p>
<p>${myInfo.get('description')}`
