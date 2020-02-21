const express       = require('express');
const app           = express();
const path          = require('path');
const bodyParser    = require('body-parser');
const urlShortener  = require('node-url-shortener');


const port          = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());

app.get('/api', function(req, res) {
//    res.sendFile(path.join(__dirname + '/index.html'));
    res.send('Ответ от API на Хероку  ->  путь к запросу ' + req.route.path);
});

app.post('/url', function(req, res) {
    const url = req.body.url;

    urlShortener.short(url, function(err, shortUrl){
        res.send(shortUrl);
    });
});

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));


// ---------------------------

const TelegramBot = require('node-telegram-bot-api');

const token = '963395136:AAEqfi-IiClqqxnMG0PijAFr04w_LfjINOE';


const options = {
  webHook: {
    port: process.env.PORT + 1
  }
};
const urlTelegram = 'https://glacial-savannah-66316.herokuapp.com:443';
const bot = new TelegramBot(token, options);

bot.setWebHook(`${urlTelegram}/bot${token}`);


// Just to ping!
bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
});
