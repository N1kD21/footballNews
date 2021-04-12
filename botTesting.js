'use strict';
//const express         = require('express');
//const app             = express();
//const path            = require('path');
//const bodyParser      = require('body-parser');
//const urlShortener    = require('node-url-shortener');
const TelegramBot     = require('node-telegram-bot-api');

//const zaprosFootball      = require('./requestAllFootball.js');
const zaprosFootballNews  = require('./googleNewsAPI.js');

const token             = '716536032:AAF679qSXFEjD3swXRKINrdgUYfoAysOLpc';
const chatIdChanelNews  = '-1001382295148';
//const counter             = 0;
const bufer               = [];

const botTelegram = new TelegramBot(token, { polling: true });
botTelegram.onText(/(.+)/, async (msg) => {
  const chatId          = msg.chat.id;
  //google news api
  const otvetGoogleNewsAPI = await zaprosFootballNews();
  vivodGoogleNews(otvetGoogleNewsAPI, chatId);
  bufer.push(otvetGoogleNewsAPI);
});



async function vivodGoogleNews(array, chatIdGoogle) {
  let immage         = '';
  let zagolovok     = '';
  let nameResourse  = '';
  let linkArticle   = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].immageUrl !== null || array[i].immageUrl !== undefined)        immage = array[i].immageUrl;
    if (array[i].zagolovok !== null || array[i].zagolovok !== undefined)        zagolovok = array[i].zagolovok;
    if (array[i].nameResourse !== null || array[i].nameResourse !== undefined)  nameResourse = array[i].nameResourse;
    if (array[i].linkArticle !== null || array[i].linkArticle !== undefined)    linkArticle = array[i].linkArticle;
    await sayPhoto(chatIdGoogle, immage);

    try {
      await sayMessageKeyboard(chatIdGoogle, `${zagolovok}\n${nameResourse}\n${linkArticle}`);
    } catch (err) {
      console.log('95. err.message ', err.message);
      if (err.message === 'ETELEGRAM: 400 Bad Request: message is too long') {
        const zagolovokMassiv = zagolovok.split('\n\n');
        for (let iOtvetov = 0; iOtvetov < zagolovokMassiv.length; iOtvetov++) {
          if (iOtvetov !== zagolovokMassiv.length - 1) {
            await sayMessageKeyboard(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}`);
          } else {
            await sayMessageKeyboard(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}\n${nameResourse}\n${linkArticle}`);
          }
        }
      }
    }
  }
}

/*
async function searchInArray(arrayStaroe, arrayNovoe) {
  const otvet = [];
  arrayNovoe.forEach((itemNovoeArray) => {
    const otvet1 = arrayStaroe.find((itemStaroeArray) => itemNovoeArray.zagolovok === itemStaroeArray.zagolovok);
    if (otvet1 === undefined) {
      otvet.push(itemNovoeArray);
    }
  });
  return otvet;
}
*/

async function sayPhoto(chatIdSay, urlPhoto) {
  await botTelegram.sendPhoto(chatIdSay, urlPhoto);
}

async function sayMessageDefault(chatIdSay, messageSay) {
  await botTelegram.sendMessage(chatIdSay, messageSay, { 'disable_web_page_preview': true });
}

async function sayMessageKeyboard(chatIdSay, messageSay) {
  const options = { // кнопка под сообщением
    'disable_web_page_preview': true,
    'reply_markup': {
      'inline_keyboard': [
        [
          {
            text: 'Утвердить статью',
            'callback_data': 'Утверждение статьи'
          }
        ]
      ]
    }
  };
  await botTelegram.sendMessage(chatIdSay, messageSay, options);
}


botTelegram.on('callback_query', async (msg) => {
  const textArticle = msg.message.text;
  //	console.log('112. msg >>> ', msg.message.id);
  const arrayDel = textArticle.split('\n');
  await sayPhoto(chatIdChanelNews, arrayDel[arrayDel.length - 1]);
  await sayMessageDefault(chatIdChanelNews, textArticle);
});
