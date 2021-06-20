"use strict";

function loadScript(src, callback) {
    if (Array.isArray(src)) {
        src.forEach(item => {
            if (!document.querySelector(`[src="${item}"]`)) {
                let script = `<script defer src="${item}" async="false"></script>`
                document.head.insertAdjacentHTML('beforeend', script)
            }
        })
        let scriptsEl = document.getElementsByTagName('script')
        let lodScript = new Promise((resolve, reject) => {
            for (let i = 0; i < scriptsEl.length; i++) {
                scriptsEl[i].onload;
            }
            return resolve(scriptsEl)
        })
        // let lodScript = (a => {
        //     return new Promise((resolve, reject) => {
        //         for (let i = 1; i < a.length; i++) {
        //             a[i].onload = callback;
        //         }
        //         return resolve(a)
        //     })
        // })
        // lodScript.then(data => {
        //     console.log(data)
        // })
        Promise.all([lodScript]).then(value => {
            console.log(value)
            for (let i = 0; i < value.length; i++) {
                for (let j = 1; j < value[i].length; j++)
                    value[i][j].onload = callback;
            }
        })

    } else {
        const script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        document.head.insertAdjacentElement('beforeend', script)
    }



}

// loadScript('./common.js', () => {
//     log();
//     console.log("Load main.js")
// })


loadScript(['./common.js', './timer.js'], () => {
    log();
    log2();
    console.log("Load main.js")
})

// loadScript(() => {

// })