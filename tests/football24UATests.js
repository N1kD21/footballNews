'use strict';

const zapitDoFootball24UA = require('../lib/football24UA_New.js');

(async() => {
    const res = await zapitDoFootball24UA({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://sport.ua/uk/news/535455-po-oboyudnomu-soglasiyu-storon-shinder-pokinul-minay'
    });
    console.log('6. res - >', res);
})();

