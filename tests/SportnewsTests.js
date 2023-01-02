'use strict';

const zapit = require('../lib/Sportnews.js');

(async() => {
    const res = await zapit({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://sportnews.com.ua/53813/legenda-futbolu-zaklikav-dotisnuti-rosiyu-cherez-napad-na-ukrayinu/2023/01/02/'
    });
    console.log('6. res - >', res);
})();

