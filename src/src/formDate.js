"use strict";

import render, { renderDate } from './common.js';
import { dateCalc } from './date.js';

export const formEl = document.getElementById('form-date');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const date1 = event.target.elements.date1.value;
    const date2 = event.target.elements.date2.value;
    console.log(date1, date2)
    if (!date1 || !date2) {
        render("Для расчета промежутка необходимо заполнить оба поля!!!");
        return;
    }

    render('')
    const result = dateCalc(date1, date2);
    renderDate(result);
})