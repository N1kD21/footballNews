'use strict';

const searchInArray           = require('../lib/searchInArray.js');
const arr1 = [
  {
    immage: 'https://pic.sport.ua/images/news/0/13/77/social_535481.jpg',
    caption: ''
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/77/social_535455.jpg',
    caption: ''
  },
  {
    immage: 'https://static.ua-football.com/img/upload/20/27bb6b.jpeg',
    caption: ''
  }
];

const arr2 = [
  {
    immage: 'https://pic.sport.ua/images/news/0/13/77/social_535502.jpg',
    caption: ''
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/77/social_535487.jpg',
    caption: ''
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/77/social_535481.jpg',
    caption: ''
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/77/social_535453.jpg',
    caption: ''
  }
];





const arr3 = [
  {
    immage: 'https://pic.sport.ua/images/news/0/13/77/social_535502.jpg',
    caption: ''
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/77/social_535487.jpg',
    caption: ''
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/77/social_535453.jpg',
    caption: ''
  }
];


test('the data is peanut butter', async () => {
  await expect(searchInArray(arr1, arr2)).resolves.toStrictEqual(arr3);
});

