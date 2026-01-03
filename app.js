let countdown = new Date("Dec 30,2025 00:00:00").getTime()

const daysid = document.getElementById("days")
const hoursId = document.getElementById("hours")
const minutesId = document.getElementById("minutes")
const SecondsId = document.getElementById("second")
// const result=document.getElementById("res")

const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`)


let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countdown - now

    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hr = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((distance % (1000 * 60)) / 1000);

    daysid.innerHTML = formatTime(day);
    hoursId.innerHTML = formatTime(hr);
    minutesId.innerHTML = formatTime(min);
    SecondsId.innerHTML = formatTime(sec);

    if(distance<0){
        clearInterval(x)
        daysid.innerHTML="00"
        hoursId.innerHTML="00"
        minutesId.innerHTML="00"
        SecondsId.innerHTML="00"
       
    }
},1000)
