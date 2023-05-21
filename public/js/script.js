// Countdown
var countdownDate = new Date("Dec 29 2023 09:00:00").getTime();
var interval = setInterval(() => {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    // Time calculation day, hours, minutes, seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // var result = days + " " + hours + " " + minutes + " " + seconds;

    // Output
    if (distance < 0) {
        clearInterval(interval);
        document.querySelector("#days").innerHTML = 0;
        document.querySelector("#hours").innerHTML = 0;
        document.querySelector("#minutes").innerHTML = 0;
        document.querySelector("#seconds").innerHTML = 0;
    } else {
        document.querySelector("#days").innerHTML = days;
        document.querySelector("#hours").innerHTML = hours;
        document.querySelector("#minutes").innerHTML = minutes;
        document.querySelector("#seconds").innerHTML = seconds;
        // document.querySelector("#countdown").innerHTML = result;
    }
}, 1000);

// Url to invitation
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const to = urlParams.get('to');

if (queryString != "") {
    if (to != "") {
        document.querySelector("#invitation").innerHTML = to;
    } else {
        document.querySelector("#invitation").innerHTML = "Teman-teman Semua";
    }
} else {
    document.querySelector("#invitation").innerHTML = "Teman-teman Semua";
}

// ScrollShake
window.onscroll = function () {
    const img = document.querySelectorAll("#prewed > img");
    for (let i = 0; i < img.length; i++) {
        img[i].classList.add("shake");
        setTimeout(() => {
            img[i].classList.remove("shake");
        }, 5000);
    }
};