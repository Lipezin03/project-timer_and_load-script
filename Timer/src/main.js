"use strict";

import "./formDate.js";
import "./timer.js";
import { formEl } from "./formDate.js"

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

page1.addEventListener('click', () => {
    if (document.querySelector('.block-form').classList.contains('visually-hidden')) {
        document.querySelector('.block-form').classList.remove('visually-hidden')
        document.querySelector('.timer-block').classList.add('visually-hidden');
    }

})

page2.addEventListener('click', () => {
    if (document.querySelector('.timer-block').classList.contains('visually-hidden')) {
        document.querySelector('.timer-block').classList.remove('visually-hidden');
        document.querySelector('.block-form').classList.add('visually-hidden')
    }

})

