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

  var questions = [
    {
      title:'Сколько параметров можно передать функции ?',
      buttons: [
          [{ text: 'Ровно столько, сколько указано в определении функции.', callback_data: '0_1' }],
          [{ text: 'Сколько указано в определении функции или меньше.', callback_data: '0_2' }],
          [{ text: 'Сколько указано в определении функции или больше.', callback_data: '0_3' }],
          [{ text: 'Любое количество.', callback_data: '0_4' }]
        ],
      right_answer: 4
    },
    {
      title:'Чему равна переменная name?\nvar name = "пупкин".replace("п", "д")',
      buttons: [
          [{ text: 'дудкин', callback_data: '1_1' }],
          [{ text: 'дупкин', callback_data: '1_2' }],
          [{ text: 'пупкин', callback_data: '1_3' }],
          [{ text: 'ляпкин-тяпкин', callback_data: '1_4' }]
        ],
      right_answer: 2
    },
    {
      title:'Чему равно 0 || "" || 2 || true ?',
      buttons: [
          [{ text: '0', callback_data: '2_1' }],
          [{ text: '""', callback_data: '2_2' }],
          [{ text: '2', callback_data: '2_3' }],
          [{ text: 'true', callback_data: '2_4' }]
        ],
      right_answer: 3
    },
  ];

  let otvetAllSportsAPI = await zaprosFootball();
  for (var indexLeague = 0; indexLeague < otvetAllSportsAPI.length; indexLeague++) {
    botTelegram.sendMessage(chatId, `${otvetAllSportsAPI[indexLeague].name} is ${otvetAllSportsAPI[indexLeague].plan} League`, questions);
  }
});

botTelegram.on('message', (msg) => {
  const chatId = msg.chat.id;

});
