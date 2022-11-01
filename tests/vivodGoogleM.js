'use strict';

//const vivodGoogleNewsMObject  = require('./vivodGoogleNewsMObject');
const assert                  = require('assert').strict;
const newObject               = require('../lib/formirovanieCaption');

const testModificationObj = (input, output) => {
  const n = newObject(input);
  assert.deepStrictEqual(n, output);
};

[
  testModificationObj({
    nameResourse: 'Sport.ua',
    author: null,
    zagolovok: 'Джерело: Повернення Ярмоленка в Динамо не розглядається - Спорт.ua',
    linkArticle: 'https://sport.ua/uk/news/533293-istochnik-vozvrashchenie-yarmolenko-v-dinamo-ne-rassmatrivaetsya',
    immageUrl: 'https://pic.sport.ua/images/news/0/13/66/social_533293.jpg',
    dataPublished: '2021-04-13T18:05:00Z'
  }, {
    immage: 'https://pic.sport.ua/images/news/0/13/66/social_533293.jpg',
    caption: 'Джерело: Повернення Ярмоленка в Динамо не розглядається - Спорт.ua\n<a href="https://sport.ua/uk/news/533293-istochnik-vozvrashchenie-yarmolenko-v-dinamo-ne-rassmatrivaetsya">Sport.ua</a>'
  }),
  testModificationObj({
    nameResourse: 'Champion.com.ua',
    author: null,
    zagolovok: 'Три українки потрапили до заявки основної сітки Ролан Гаррос - Champion.com.ua',
    linkArticle: 'https://champion.com.ua/tennis/2021/04/13/869611/tri-ukrayinki-potrapili-do-zayavki-osnovnoyi-sitki-rolan-garros',
    immageUrl: 'https://champion.com.ua/storage/news/main/regular/723e7a1a726f28c217995a48057eee14.png',
    dataPublished: '2021-04-13T17:26:05Z'
  }, {
    immage: 'https://champion.com.ua/storage/news/main/regular/723e7a1a726f28c217995a48057eee14.png',
    caption: 'Три українки потрапили до заявки основної сітки Ролан Гаррос - Champion.com.ua\n<a href="https://champion.com.ua/tennis/2021/04/13/869611/tri-ukrayinki-potrapili-do-zayavki-osnovnoyi-sitki-rolan-garros">Champion.com.ua</a>'
  }),
  testModificationObj({
    nameResourse: 'Ua-football.com',
    author: 'Михаил Черныш',
    zagolovok: 'Юрист: Ярославський хоче отримати емблему з історією Металіста, не погасивши старі борги - UA-Футбол',
    linkArticle: 'https://www.ua-football.com/ua/ukrainian/news/1618331053-yurist-yaroslavskiy-hoche-otrimati-emblemu-z-istoriyeyu-metalista-ne-pogasivshi-stari-borgi.html',
    immageUrl: 'https://static.ua-football.com/img/upload/19/27a35d.jpeg',
    dataPublished: '2021-04-13T16:38:00Z'
  }, {
    immage: 'https://static.ua-football.com/img/upload/19/27a35d.jpeg',
    caption: 'Юрист: Ярославський хоче отримати емблему з історією Металіста, не погасивши старі борги - UA-Футбол\n<a href="https://www.ua-football.com/ua/ukrainian/news/1618331053-yurist-yaroslavskiy-hoche-otrimati-emblemu-z-istoriyeyu-metalista-ne-pogasivshi-stari-borgi.html">Ua-football.com</a>'
  }),
  testModificationObj({
    nameResourse: 'Sport.ua',
    author: null,
    zagolovok: 'Джерело: клуби з Туреччини та Бельгії цікавляться Довбиком - Спорт.ua',
    linkArticle: 'https://sport.ua/uk/news/533273-istochnik-kluby-iz-turtsii-i-belgii-interesuyutsya-dovbikom',
    immageUrl: 'https://pic.sport.ua/images/news/0/13/66/social_533273.jpg',
    dataPublished: '2021-04-13T15:36:00Z'
  }, {
    immage: 'https://pic.sport.ua/images/news/0/13/66/social_533273.jpg',
    caption: 'Джерело: клуби з Туреччини та Бельгії цікавляться Довбиком - Спорт.ua\n<a href="https://sport.ua/uk/news/533273-istochnik-kluby-iz-turtsii-i-belgii-interesuyutsya-dovbikom">Sport.ua</a>'
  }),
];
