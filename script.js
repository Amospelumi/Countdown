// Initialize the values
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// set my mums birthday date
const newYears = "3 September 2021";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    //Get the difference in total seconds.
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    // Get the exact values left.
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // Display the result
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

// Format time, to add zero to the time.
function formatTime(time){
    return time < 10 ? (`0${time}`) : time
}

// initial Call of countdown function.
countdown();

// set interval
setInterval(countdown, 1000)
