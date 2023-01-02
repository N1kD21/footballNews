'use strict';

const zapitDo24UA = require('../lib/sportUA.js');

(async() => {
    const res = await zapitDo24UA({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://sport.ua/uk/news/609435-antonio-konte-eto-bezumie-tottenhemu-nuzhno-pokupat-igrokov-po-50-70-mln'
    });
    console.log('6. res - >', res);
})();

