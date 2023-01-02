'use strict';

const zapitDo24UA = require('../lib/24tvUA.js');

(async() => {
    const res = await zapitDo24UA({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://sport.24tv.ua/lomachenko-pidtrimav-upts-mp-reaktsiya-geraskevicha_n2228824'
    });
    console.log('6. res - >', res);
})();

