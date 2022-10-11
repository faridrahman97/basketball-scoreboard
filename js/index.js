let home = 0;
let guest = 0;

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function add1ToHome() {
    home+=1;
    homeScore.textContent = home;
}

function add2ToHome() {
    home+=2;
    homeScore.textContent = home;
}

function add3ToHome() {
    home+=3;
    homeScore.textContent = home;
}

function add1ToGuest() {
    guest+=1;
    guestScore.textContent = guest;
}

function add2ToGuest() {
    guest+=2;
    guestScore.textContent = guest;
}

function add3ToGuest() {
    guest+=3;
    guestScore.textContent = guest;
}

