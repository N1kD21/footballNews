'use strict';

const zapit = require('../lib/Sportnews.js');


test('the data is peanut butter', async () => {
    await expect(zapit({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://sportnews.com.ua/53813/legenda-futbolu-zaklikav-dotisnuti-rosiyu-cherez-napad-na-ukrayinu/2023/01/02/'
    })).resolves.toStrictEqual({
        nameResourse: "Valera Loh",
        author: undefined,
        zagolovok: '\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tЛегенда футболу закликав дотиснути Росію через напад на Україну\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t',
        linkArticle: 'https://sportnews.com.ua/53813/legenda-futbolu-zaklikav-dotisnuti-rosiyu-cherez-napad-na-ukrayinu/2023/01/02/',
        immageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_660,h_440/https://sportnews.com.ua/wp-content/uploads/2022/03/Rossiya.jpg',
        dataPublished: undefined
      });
});
  
