window.addEventListener('load', function() {
    GetAge(dateOfBirth);
});

function copyText(text) {
    navigator.clipboard.writeText(text)
    alert("'" + text + "' Copied to clipboard!")
}

let dateOfBirth = '2004-11-12';
let maxAge;
let tempAge = 0;
let intervalID;

ageTitle = document.getElementById('age');

function GetAge(dateOfBirth) {
    let now = new Date();
    let birthDate = new Date(dateOfBirth);
    let ageInMilliseconds = now - birthDate;
    let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    ageTitle.textContent = Math.floor(ageInYears);
}