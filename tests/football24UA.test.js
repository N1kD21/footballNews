/* eslint-disable no-undef */
'use strict';

const zapit = require('../lib/football24UA.js');



test('the data is peanut butter', async () => {
  await expect(zapit({
    source: {
      name: 'Valera Loh'
    },
    url: 'https://football24.ua/mudrik_ta_inshi_novachki_chelsi_vzhe_znayut_verdikt_trenera_na_pley_off_ligi_chempioniv_bude_kilka_nezruchnih_rozmov_n758169/'
  })).resolves.toStrictEqual({
    nameResourse: 'Valera Loh',
    author: undefined,
    // eslint-disable-next-line max-len
    zagolovok: 'Мудрик та інші новачки Челсі вже знають вердикт тренера на плей-офф Ліги чемпіонів: "Буде кілька незручних розмов" \n Головний тренер Челсі Грем Поттер був змушений ухвалювати непросте рішення щодо заявки на плей-офф Ліги чемпіонів.',
    linkArticle: 'https://football24.ua/mudrik_ta_inshi_novachki_chelsi_vzhe_znayut_verdikt_trenera_na_pley_off_ligi_chempioniv_bude_kilka_nezruchnih_rozmov_n758169/',
    immageUrl: 'https://football24.ua/resources/photos/news/202302/758169.jpg?202302104625&w=1200&h=675&q=65',
    dataPublished: undefined
  });
});

