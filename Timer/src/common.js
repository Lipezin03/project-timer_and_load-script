"use strict";

const messageEl = document.querySelector('.message');

export default function renderMessage(text) {
    messageEl.innerHTML = `
    <span style="color: red;">
        ${text}
    </span>`
}

export function renderDate(date) {
    messageEl.innerHTML = `
            <span>Годы: ${date.years}</span>
            <span>Мусяцы: ${date.months}</span>
            <span>Дни: ${date.days}</span>`
}

export function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}


