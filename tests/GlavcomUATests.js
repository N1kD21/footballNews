'use strict';

const zapit = require('../lib/GlavcomUA.js');

(async() => {
    const res = await zapit({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://glavcom.ua/sport/news/lomachenko-majbutnij-medvedchuk-nachalnik-shtabu-azov-vidreahuvav-na-dopis-boksera-899339.html'
    });
    console.log('6. res - >', res);
})();

