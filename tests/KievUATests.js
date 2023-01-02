'use strict';

const zapit = require('../lib/KievUA.js');

(async() => {
    const res = await zapit({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://dynamo.kiev.ua/uk/news/435033-brytanske-vydannia-liverpool-echo-pro-hru-mykolenka-proty-manchester-siti'
    });
    console.log('6. res - >', res);
})();

