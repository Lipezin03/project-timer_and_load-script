"use strict";

import { DateTime } from './luxon.js';

export function dateCalc(date1, date2) {
    let iso1 = DateTime.fromISO(date1);
    let iso2 = DateTime.fromISO(date2);

    if (iso1 > iso2)
        iso2 = [iso1, iso1 = iso2][0];

    return iso2.diff(iso1, ['years', 'months', 'days']).toObject();
}