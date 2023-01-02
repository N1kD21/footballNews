'use strict';

const zapit = require('../lib/GoogleNews.js');

(async() => {
    const res = await zapit({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://football24.ua/ronaldu_vitisnyaye_z_al_nasra_futbolista_v_yakogo_vidibrav_sviy_ulyubleniy_nomer_n753777/'
    });
    console.log('6. res - >', res);
})();

