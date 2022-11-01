'use strict';

const TelegramBot         = require('node-telegram-bot-api');
const token               = '1311938608:AAHqH-jmF44MqxCadJphcBfV2H6YBUbTuQA';
const chatIdErrorsChannel = '-1001370249186';
const botTelegram         = new TelegramBot(token, { polling: true });

const sendError = (elementMassivu) => {
  botTelegram.sendMessage(chatIdErrorsChannel, `nameResourse  : ${elementMassivu.source.name},
    author        : ${elementMassivu.author},
    zagolovok     : ${elementMassivu.title},
    linkArticle   : ${elementMassivu.url},
    immageUrl     : ${elementMassivu.urlToImage},
    dataPublished : ${elementMassivu.publishedAt}`);
};

module.exports = sendError;
