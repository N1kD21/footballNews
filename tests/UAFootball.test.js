'use strict';

const zapitDo24UA = require('../lib/UAFootball.js');

(async() => {
    const res = await zapitDo24UA({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://www.ua-football.com/ua/foreign/newscommon/1672632173-situaciya-z-petrakovim-dosyagnennya-dovbika-persha-porazka-pszh-golovni-novini-za-1-sichnya.html'
    });
    console.log('6. res - >', res);
})();

