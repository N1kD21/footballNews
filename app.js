const express         = require('express');
const app             = express();
const path            = require('path');
const bodyParser      = require('body-parser');
const urlShortener    = require('node-url-shortener');
const TelegramBot     = require('node-telegram-bot-api');

const zaprosFootball  = require('./requestAllFootball.js');



// ------ API
const port            = process.env.PORT || 3000;
console.log('9. port >>> ', port);
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

//-------API


//------Telegram
const token = '716536032:AAF679qSXFEjD3swXRKINrdgUYfoAysOLpc';
const botTelegram = new TelegramBot(token, {polling: true});

botTelegram.onText(/(.+)/, async (msg, match) => {
  const chatId          = msg.chat.id;
  const resp            = match[1]; // the captured "whatever"
  
  let otvetAllSportsAPI = await zaprosFootball();
  for (var indexLeague = 0; indexLeague < otvetAllSportsAPI.length; indexLeague++) {
    botTelegram.sendMessage(chatId, `${otvetAllSportsAPI[indexLeague].name} is ${otvetAllSportsAPI[indexLeague].plan} League`);
  }
});

botTelegram.on('message', (msg) => {
  const chatId = msg.chat.id;

});
