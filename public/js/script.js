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


lozad('.sect', {
    load: function (el) {
        for (let i = 0; i < el.children.length; i++) {
            el.children[i].classList.remove('hidden');
            el.children[i].classList.add('fade');
        }
    }
}).observe();


// Lozad
const imgGallery = document.querySelector("#prewed img");
lozad('.lozad', {
    load:function (el) {
        el.src = el.dataset.src;
        // console.log(el.dataset.src);
        el.onload = function () {
            el.classList.add('fade');
        }

        el.addEventListener('mouseenter', function (e) {
            e.target.parentElement.classList.add("shake");
        });
        el.addEventListener('mouseleave', function (e) {
            e.target.parentElement.classList.remove("shake");
        });
    }
}).observe();