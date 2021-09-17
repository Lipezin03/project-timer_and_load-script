"use strict";

import { declOfNum } from "./common.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js";
import { Howl } from 'howler';
import mus from "../mp3/09260.mp3";
import mus2 from "../mp3/timer.mp3";



const daysVal = document.querySelector('.timer__day .timer__val');
const hoursVal = document.querySelector('.timer__hours .timer__val');
const minutesVal = document.querySelector('.timer__minutes .timer__val');
const secondsVal = document.querySelector('.timer__seconds .timer__val');

const daysText = document.querySelector('.timer__day .timer__text');
const hoursText = document.querySelector('.timer__hours .timer__text');
const minutesText = document.querySelector('.timer__minutes .timer__text');
const secondsText = document.querySelector('.timer__seconds .timer__text');

const inputDay = document.querySelector('.input-day');
const inputHours = document.querySelector('.input-hours')
const inputMinutes = document.querySelector('.input-minutes')
const inputSeconds = document.querySelector('.input-seconds')
const buttonInput = document.querySelector('.button-input')

const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop')

let timeMinut;

buttonInput.addEventListener('click', event => {
    let day = inputDay.value * 24 * 60 * 60 * 1000;
    let hours = inputHours.value * 60 * 60 * 1000;
    let minutes = inputMinutes.value * 60 * 1000;
    let seconds = inputSeconds.value * 1000;

    timeMinut = day + hours + minutes + seconds;

    daysVal.textContent = Math.floor(timeMinut / 1000 / 60 / 60 / 24);
    hoursVal.textContent = Math.floor((timeMinut / 1000 / 60 / 60) % 24);
    minutesVal.textContent = Math.floor((timeMinut / 1000 / 60) % 60);
    secondsVal.textContent = Math.floor((timeMinut / 1000) % 60);
    document.querySelector('.timer__box').classList.remove('visually-hidden');
    document.querySelector('.time-out').classList.add('visually-hidden');
})

function renderTimer() {

    if (timeMinut <= 0) {
        const sound = new Howl({
            src: [mus]
        });
        sound.stop();
        sound.play();
        clearInterval(idSetInterval)
        document.querySelector('.timer__box').classList.add('visually-hidden');
        document.querySelector('.time-out').classList.remove('visually-hidden');

    }

    let day = Math.floor(timeMinut / 1000 / 60 / 60 / 24);
    let hours = Math.floor((timeMinut / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((timeMinut / 1000 / 60) % 60);
    let seconds = Math.floor((timeMinut / 1000) % 60);

    daysVal.textContent = day;
    hoursVal.textContent = hours;
    minutesVal.textContent = minutes;
    secondsVal.textContent = seconds;


    daysText.textContent = declOfNum(day, ['день', 'дня', 'дней']);;
    hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
    minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
    secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
    timeMinut -= 1000
    const sound = new Howl({
        src: [mus2]
    });

    sound.play();

}

// renderTimer();
let idSetInterval;
let activ = false;

btnStart.addEventListener('click', ev => {
    if (timeMinut <= 0 || timeMinut == undefined || activ) {
        return;
    }
    activ = true;
    idSetInterval = setInterval(renderTimer, 1000);
})

btnStop.addEventListener('click', ev => {
    clearInterval(idSetInterval);
    const sound = new Howl({
        src: [mus, mus2]
    });
    sound.stop();
    activ = false;
})
