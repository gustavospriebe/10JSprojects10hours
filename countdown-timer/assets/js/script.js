// DOM
const nMonths = document.querySelector(".n-months");
const lMonths = document.querySelector(".l-months");
const nDays = document.querySelector(".n-days");
const lDays = document.querySelector(".l-days");
const nHours = document.querySelector(".n-hours");
const lHours = document.querySelector(".l-hours");
const nMinutes = document.querySelector(".n-minutes");
const lMinutes = document.querySelector(".l-minutes");
const nSeconds = document.querySelector(".n-seconds");
const lSeconds = document.querySelector(".l-seconds");

function countdown() {
    const currentDate = new Date(); // Data de hoje
    const newYearsDate = new Date("2022-01-01 00:00"); // Data ano novo

    const diff = Math.abs(newYearsDate.getTime() - currentDate.getTime());

    // Calcs
    let months = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30));
    let days = Math.ceil((diff / (1000 * 60 * 60 * 24) % 30));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    // Format Data 0 left
    nMonths.innerHTML = format(months);
    nDays.innerHTML = format(days);
    nHours.innerHTML = format(hours);
    nMinutes.innerHTML = format(minutes);
    nSeconds.innerHTML = format(seconds);

    // Format Data Text
    if (months === 1) {
        lMonths.innerHTML = "month";
    } else {
        lMonths.innerHTML = "months";
    }
    if (days === 1) {
        lDays.innerHTML = "day";
    } else {
        lDays.innerHTML = "days";
    }
    if (hours === 1) {
        lHours.innerHTML = "hour";
    } else {
        lHours.innerHTML = "hours";
    }
    if (minutes === 1) {
        lMinutes.innerHTML = "minute";
    } else {
        lMinutes.innerHTML = "minutes";
    }
    if (seconds === 1) {
        lSeconds.innerHTML = "second";
    } else {
        lSeconds.innerHTML = "seconds";
    }
}

const format = (time) => (time < 10 ? `0${time}` : time);

setInterval(countdown, 1000);
