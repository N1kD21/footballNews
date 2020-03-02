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





const TelegramBot = require('node-telegram-bot-api');

const token = '716536032:AAF679qSXFEjD3swXRKINrdgUYfoAysOLpc';


const bot = new TelegramBot(token, {polling: true});

bot.onText(/(.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  bot.sendMessage(chatId, ` Eh bien, mon prince. Gênes et Lucques ne sont plus que des apanages, des поместья, de la famille Buonaparte. Non, je vous préviens que si vous ne me dites pas que nous avons la guerre, si vous vous permettez encore de pallier toutes les infamies, toutes les atrocités de cet Antichrist (ma parole, j'y crois) — je ne vous connais plus, vous n'êtes plus mon ami, vous n'êtes plus мой верный раб, comme vous dites 1. Ну, здравствуйте, здравствуйте. Je vois que je vous fais peur 2, садитесь и рассказывайте.
Так говорила в июле 1805 года известная Анна Павловна Шерер, фрейлина и приближенная императрицы Марии Феодоровны, встречая важного и чиновного князя Василия, первого приехавшего на ее вечер. Анна Павловна кашляла несколько дней, у нее был грипп, как она говорила (грипп был тогда новое слово, употреблявшееся только редкими). В записочках, разосланных утром с красным лакеем, было написано без различия во всех:
«Si vous n'avez rien de mieux à faire, Monsieur le comte (или mon prince), et si la perspective de passer la soirée chez une pauvre malade ne vous effraye pas trop, je serai charmée de vous voir chez moi entre 7 et 10 heures. Annette Scherer» 3.
— Dieu, quelle virulente sortie! 4 — отвечал, нисколько не смутясь такою встречей, вошедший князь, в придворном, шитом мундире, в чулках, башмаках и звездах, с светлым выражением плоского лица.
Он говорил на том изысканном французском языке, на котором не только говорили, но и думали наши деды, и с теми, тихими, покровительственными интонациями, которые свойственны состаревшемуся в свете и при дворе значительному человеку. Он подошел к Анне Павловне, поцеловал ее руку, подставив ей свою надушенную и сияющую лысину, и покойно уселся на диване.
— Avant tout dites-moi, comment vous allez, chère amie? 5 Успокойте меня, — сказал он, не изменяя голоса и тоном, в котором из-за приличия и участия просвечивало равнодушие и даже насмешка.
— Как можно быть здоровой... когда нравственно страдаешь? Разве можно, имея чувство, оставаться спокойною в наше время? — сказала Анна Павловна. — Вы весь вечер у меня, надеюсь?
— А праздник английского посланника? Нынче середа. Мне надо показаться там, — сказал князь. — Дочь заедет за мной и повезет меня.
— Я думала, что нынешний праздник отменен, Je vous avoue que toutes ces fêtes et tous ces feux d'artifice commencent à devenir insipides 6.
— Ежели бы знали, что вы этого хотите, праздник бы отменили, — сказал князь по привычке, как заведенные часы, говоря вещи, которым он и не хотел, чтобы верили.
— Ne me tourmentez pas. Eh bien, qu'a-t-on décidé par rapport à la dépêche de Novosilzoff? Vous savez tout 7.
— Как вам сказать? — сказал князь холодным, скучающим тоном. — Qu'a-t-on décidé? On a décidé que Buonaparte a brûlé ses vaisseaux, et je crois que nous sommes en train de brûler les nôtres 8.
Князь Василий говорил всегда лениво, как актер говорит роль старой пиесы. Анна Павловна Шерер, напротив, несмотря на свои сорок лет, была преисполнена оживления и порывов.
Быть энтузиасткой сделалось ее общественным положением, и иногда, когда ей даже того не хотелось, она, чтобы не обмануть ожиданий людей, знавших ее, делалась энтузиасткой. Сдержанная улыбка, игравшая постоянно на лице Анны Павловны, хотя и не шла к ее отжившим чертам, выражала, как у избалованных детей, постоянное сознание своего милого недостатка, от которого она не хочет, не может и не находит нужным исправляться.
В середине разговора про политические действия Анна Павловна разгорячилась.
— Ах, не говорите мне про Австрию! Я ничего не понимаю, может быть, но Австрия никогда не хотела и не хочет войны. Она предает нас. Россия одна должна быть спасительницей Европы. Наш благодетель знает свое высокое призвание и будет верен ему. Вот одно, во что я верю. Нашему доброму и чудному государю предстоит величайшая роль в мире, и он так добродетелен и хорош, что Бог не оставит его, и он исполнит свое призвание задавить гидру революции, которая теперь еще ужаснее в лице этого убийцы и злодея. Мы одни должны искупить кровь праведника. На кого нам надеяться, я вас спрашиваю?.. Англия с своим комм12345678`);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
});





'use strict';
// версия двух роботов -  бота на viber и бота на telegram

const fetch = require('node-fetch');

const BotViber                 = require('viber-bot').Bot;
const EventsBotViber           = require('viber-bot').Events;
const TextMessageBotViber      = require('viber-bot').Message.Text;
const KeyboardMessageBotViber  = require('viber-bot').Message.Keyboard;
const UrlMessageBotViber       = require('viber-bot').Message.Url;
const PictureMessageBotViber   = require('viber-bot').Message.Picture;
//--- 29.12.2018
const RichMediaMessageK  	     = require('viber-bot').Message.RichMedia;
//--- 29.12.2018
//const winston                  = require('winston');
//const toYAML                   = require('winston-console-formatter');
const ngrok                    = require('./get_public_url');
require('dotenv').config();

const CarouselContentMessageHello = require('./CarouselContentMessageHello');
const CarouselContentMessageTest = require('./CarouselContentMessageTest');
const sum20uaFetch    = require('./requestSum20ua');

const httpSum20ua = require('http');
const httpsSum20ua = require('https');
var timeStartBot;

// переменные для запроса Glosbe
const fromLANGurl              = 'ukr';
var   destLANGurl              = 'eng';
var   destLANGshot             = 'en';

//---start 5 const configgg

//const VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY = "494571e56f27d2b4-eda50291e0ae6363-deacf1c228a52d54";
const VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY = "48fcf2eb7d67d26f-316a69dfbfaeb0fd-74efc5752a3d4f45"; // designdulbot
//const VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY = "4af8d30b8e27d23d-d898a3b1d6ce12a1-a9340afe3ca1c8fd";

//---end 5


var zaporosphraseBotViberListActive = [
  { userID: '', phrase: ''}
];

//--------------------------------------------------------------------
const TelegramBot = require('node-telegram-bot-api');
//const tokenTelegramBot = '1070658045:AAH6t06-y2HisxE0Bdx7RV_CiklEmrAqlqw';
const tokenTelegramBot = '963395136:AAEqfi-IiClqqxnMG0PijAFr04w_LfjINOE';


const botTelegram = new TelegramBot(tokenTelegramBot, {polling: true});

botTelegram.onText(/(.+)/, async (message2TelegramBot, match) => {
  const chatIdTelegramBot = message2TelegramBot.chat.id;
  console.log('61. message2TelegramBot >>> ', message2TelegramBot);

/* // получение ссылки на фото User. Ссылка доступна 1 час и с ее помощью можно скачать фото
  console.log('52. message2TelegramBot >>> ', message2TelegramBot);
  let photoUserInfo = await botTelegram.getUserProfilePhotos(message2TelegramBot.from.id);
  console.log('54. photoUserInfo >>> ', photoUserInfo.photos);
  let fileIdPhotoUser = photoUserInfo.photos[0][0].file_id;
  let filePhotoUser = await botTelegram.getFile(fileIdPhotoUser);
  console.log('56. filePhotoUser >>> ', filePhotoUser);
  let fileLinkPhotoUser = await botTelegram.getFileLink(fileIdPhotoUser);
  console.log('59. fileLinkPhotoUser >>> ', fileLinkPhotoUser);
  botTelegram.sendPhoto(chatIdTelegramBot, filePhotoUser.file_path)
*/
  const ZaprosSlovo = message2TelegramBot.text;
  console.log("stroka 53 ", new Date());
  console.log('54---------------------------------------------------------------------------------------------------------');
  const nazvanieClassaSum20ua = 'FORMULA';
  var otvetSum20uaFetch = await sum20uaFetch(ZaprosSlovo, nazvanieClassaSum20ua);

  for (const dannieSlova of otvetSum20uaFetch) {
    if (dannieSlova.tolkovanieSlovaINTF != undefined || dannieSlova.tolkovanieSlovaINTF != undefined) {
      var slovoSum20ua          = dannieSlova.classSlovoSum20ua;
//      console.log('63. dannieSlova.tolkovanieSlovaINTF >>> ', dannieSlova.tolkovanieSlovaINTF);
      var tolkovanieINTFSum20ua = dannieSlova.tolkovanieSlovaINTF.join(' ');
      var tolkovanieINTNSum20ua = dannieSlova.tolkovanieSlovaINTN.join(' ');
      var lpartSum20ua          = dannieSlova.classLPART;
      var polniuOtvetSum20ua    = `${slovoSum20ua}${lpartSum20ua} ${tolkovanieINTFSum20ua} ${tolkovanieINTNSum20ua}`;
      await sayTelegramBot(chatIdTelegramBot, polniuOtvetSum20ua)
    }
  }

  console.log('68. otvetSum20uaFetch >>>', otvetSum20uaFetch);
  console.log("stroka 69 ", new Date());
});

async function sayTelegramBot(chatId, message) {
  let options = {
    parse_mode: 'HTML'
  }
  await botTelegram.sendMessage(chatId, message, options);
}
//=========================================================================





// по умолчанию
const BotViberName         = "Помічник";
const BotViberAvatar       = "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/photo/botViber.png";

const BotViberNameULIF     = "УМІФ";
const BotViberAvatarULIF   = "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/UMIFlogo.png";
//const BotViberAvatarULIF   = "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/photo/botUlif.png";

// const BotViberNameGlosbe   = "Glosbe Dictionary and Translation Memory";
const BotViberNameGlosbe   = "Glosbe Dictionary";
const BotViberAvatarGlosbe = "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/glosbelogo.png";

const BotViberNameAzure    = "Microsoft Azure Translator";
const BotViberAvatarAzure  = "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/Azurelogo.png";

const BotViberNameGoogleTranslate   = "Google Cloud AutoML";
const BotViberAvatarGoogleTranslate = "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/translategooglelogo.png";

const BotViberNameMerriamWebster   = "Merriam-Webster Dictionary";
const BotViberAvatarMerriamWebster = "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/merriamwebsterlogo.png";

const BotViberNameOxford   = "Oxford Dictionaries";
const BotViberAvatarOxford = "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/oxforddictionarieslogopicture.png";



// --- 29.12.2018 17:45 все работает

const KeyboardBotViberRestList = {
	"Type": "keyboard",
	"Revision": 1,
	"keyboard": {
		"DefaultHeight": false,
		"BgColor": "#99FF00"
	},
	"Buttons": [
		{
			"Columns": 2,
			"Rows": 2,
			"ActionType": "reply",
			"ActionBody": "Zepras_image",
			"BgColor": "#f6f7f9",
			"Image": "http://www.pngonly.com/wp-content/uploads/2017/06/Blackberry-Fruit-Clipart-PNG.png"
	}, {
		"Columns": 4,
		"Rows": 2,
		"Text": "<br><b>\u00A0\u00A0ZEPRAS</b><br>\u00A0\u00A0Minimum: 100 \u20BD Delivery: 10 \u20BD<br>\u00A0\u00A012:00 - 23:30<br>\u00A0\u00A0aprox. delivery time: 90 min.<br>\u00A0\u00A0Rating: 4 stars, 760 reviews",
		"TextSize": "regular",
		"TextHAlign": "left",
		"TextVAlign": "top",
		"ActionType": "reply",
		"ActionBody": "Zepras_text",
		"BgColor": "#B8FF60"
	},	{
		"Columns": 2,
		"Rows": 2,
		"ActionType": "reply",
		"ActionBody": "Giraffa_image",
		"BgColor": "#f6f7f9",
		"Image": "http://www.pngonly.com/wp-content/uploads/2017/06/Jigsaw-Puzzle-PNG.png"
	}, {
		"Columns": 4,
		"Rows": 2,
		"Text": "<br><b>\u00A0\u00A0Giraffa</b><br>\u00A0\u00A0Minimum: 55 \u20BD Delivery: 10 \u20BD<br>\u00A0\u00A012:00 - 23:45<br>\u00A0\u00A0aprox. delivery time: 120 min.<br>\u00A0\u00A0Rating: 4.5 stars, 1300 reviews",
		"TextSize": "regular",
		"TextHAlign": "left",
		"TextVAlign": "top",
		"ActionType": "reply",
		"ActionBody": "Giraffa_text",
		"BgColor": "#EAC0FF"
	}, {
		"Columns": 2,
		"Rows": 2,
		"ActionType": "reply",
		"ActionBody": "Giraffa_image",
		"BgColor": "#f6f7f9",
		"Image": "http://www.pngonly.com/wp-content/uploads/2017/05/Starfish-Small-PNG.png"
	}, {
		"Columns": 4,
		"Rows": 2,
		"Text": "<br><b>\u00A0\u00A0Giraffa</b><br>\u00A0\u00A0Minimum: 55 \u20BD Delivery: 10 \u20BD<br>\u00A0\u00A012:00 - 23:45<br>\u00A0\u00A0aprox. delivery time: 120 min.<br>\u00A0\u00A0Rating: 4.5 stars, 1300 reviews",
		"TextSize": "regular",
		"TextHAlign": "left",
		"TextVAlign": "top",
		"ActionType": "reply",
		"ActionBody": "Giraffa_text",
		"BgColor": "#71FFFF"
	}, {
		"Columns": 2,
		"Rows": 2,
		"ActionType": "reply",
		"ActionBody": "Giraffa_image",
		"BgColor": "#f6f7f9",
		"Image": "http://www.pngonly.com/wp-content/uploads/2017/06/Scissor-Free-PNG-Image.png"
	}, {
		"Columns": 4,
		"Rows": 2,
		"Text": "<br><b>\u00A0\u00A0Giraffa</b><br>\u00A0\u00A0Minimum: 55 \u20BD Delivery: 10 \u20BD<br>\u00A0\u00A012:00 - 23:45<br>\u00A0\u00A0aprox. delivery time: 120 min.<br>\u00A0\u00A0Rating: 4.5 stars, 1300 reviews",
		"TextSize": "regular",
		"TextHAlign": "left",
		"TextVAlign": "top",
		"ActionType": "reply",
		"ActionBody": "Giraffa_text",
		"BgColor": "#FFB46A"
	}
	]
};

// --- 29.12.2018 17:45



//--- 29.12.2018 14:09  все работает
const KeyboardBotViberRest = {
	"Type": "keyboard",
	"Revision": 1,
	"keyboard": {
		"DefaultHeight": true,
		"BgColor": "#e3e4da"
	},
	"Buttons": [
		{
			"Columns": 2,
			"Rows": 1,
			"Text": "<font color=\"#ECEBEB\"><b>Сообщение</b></font>",
			"TextSize": "medium",
			"TextHAlign": "center",
			"TextVAlign": "middle",
			"BgColor": "#ECEBEB",
			"ActionType": "reply",
			"ActionBody": "Images",
			"Image": "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/butm1-1.png"
		},{
			"Columns": 2,
			"Rows": 1,
			"Text": "<font color=\"#ECEBEB\"><b>Video</b></font>",
			"TextSize": "medium",
			"TextHAlign": "center",
			"TextVAlign": "middle",
			"BgColor": "#ECEBEB",
			"ActionType": "reply",
			"ActionBody": "Video",
			"Image": "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/butm1-2.png"
		},{
			"Columns": 2,
			"Rows": 1,
			"Text": "<font color=\"#ECEBEB\"><b>Audio</b></font>",
			"TextSize": "medium",
			"TextHAlign": "center",
			"TextVAlign": "middle",
			"BgColor": "#ECEBEB",
			"ActionType": "reply",
			"ActionBody": "Audio",
			"Image": "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/butm1-3.png"
		},{
			"Columns": 2,
			"Rows": 1,
			"Text": "<font color=\"#ECEBEB\"><b>Карусель</b></font>",
			"TextSize": "medium",
			"TextHAlign": "center",
			"TextVAlign": "middle",
			"BgColor": "#ECEBEB",
			"ActionType": "reply",
			"ActionBody": "Audio",
			"Image": "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/butm2-1.png"
		},{
			"Columns": 2,
			"Rows": 1,
			"Text": "<font color=\"#ECEBEB\"><b>Dictionary</b></font>",
			"TextSize": "medium",
			"TextHAlign": "center",
			"TextVAlign": "middle",
			"BgColor": "#ECEBEB",
			"ActionType": "reply",
			"ActionBody": "Dictionary",
			"Image": "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/butm2-2.png"
		},{
			"Columns": 2,
			"Rows": 1,
			"Text": "<font color=\"#ECEBEB\"><b>List story</b></font>",
			"TextSize": "medium",
			"TextHAlign": "center",
			"TextVAlign": "middle",
			"BgColor": "#ECEBEB",
			"ActionType": "reply",
			"ActionBody": "List",
			"Image": "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/butm2-3.png"
		}
	]
};

//04.02.19
function sayRichMediaMessage(response, BotMessageTextCarouselContent, BotNextOperation) {
	var MessageTextCarouselContentDefMem = "словник";
	var imagesLinkPicture = "https://images.pexels.com/photos/6997/books-writing-reading-sonja-langford.jpg?auto=compress&cs=tinysrgb&h=650&w=940";
	var BotMessageTextCarouselContent = "Dictionary hollow muscular";
	console.log("836 "+BotMessageTextCarouselContent);

	var CarouselContentMessage = {
		'ButtonsGroupColumns'	: 6,
        'ButtonsGroupRows'		: 4,
        'BgColor' 				: "#d3e29d",
        "FavoritesMetadata"		: {
          "type"				: "gif",
          "url"					: "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/dulBotViberPA.png",
          "title"				: "Dulbot",
          "thumbnail"			: "JPEG",
          "width"				: 480,
          "height"				: 320
        },
        "keyboard"				: {
          "DefaultHeight"		: false
	},
	"Buttons": [{
			"Columns"			: 6,
			"Rows"				: 1,
			"BgColor"			: "#acc864",
			"ActionType"		: "none",
			"TextSize"			: 'small',
			"TextVAlign"		: 'middle',
			"TextHAlign"		: 'left'
        },{
			"Columns"			: 6,
			"Rows"				: 2,
			"BgColor"			: "#ffffff",
			"Image"				: "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/plashka-knopka6x2.png",
			"Text"				: `<font color=\'#604d9e\'><b>${BotMessageTextCarouselContent}</b></font>`,
			"ActionType"		: 'none',
			"TextSize"			: 'large',
			'TextVAlign'		: 'middle',
			'TextHAlign'		: 'center'
     	},{
			'Columns'			: 1,
			'Rows'				: 1,
			"BgColor"			: "#ffffff",
			'ActionType'		: "open-url",
			"ActionBody"		: "https://www.merriam-webster.com",
			"Image"				: "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/merriamwebsterlogo.png"
     	},{
			"Columns"			: 2,
			"Rows"				: 1,
			"BgColor"			: "#acc864",
			"Image"				: "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/plashkaMerriamWebsterDefinition.png",
			"Text"				: `<font color=\'#acc864\'><br>${BotMessageTextCarouselContent}</font>`,
			"ActionType"		: 'reply',
			"ActionBody"   		: BotMessageTextCarouselContent,
			"TextSize"			: 'small',
			"TextVAlign"		: 'bottom',
			"TextHAlign"		: 'left'
     	},{
			"Columns"			: 2,
			"Rows"				: 1,
			"BgColor"			: "#acc864",
			"Image"				: "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/plashkaMerriamWebsterThesaurus.png",
			"Text"				: `<font color=\'#acc864\'><br>${BotMessageTextCarouselContent}</font>`,
			"ActionType"		: 'none',
			"ActionBody"    	: BotMessageTextCarouselContent,
			"TextSize"			: 'small',
			"TextVAlign"		: 'bottom',
			"TextHAlign"		: 'left'
     	},{
			'Columns'			: 1,
			'Rows'				: 1,
			"BgColor"			: "#ffffff",
			'ActionType'		: "open-url",
			"ActionBody"		: "http://www.ulif.org.ua",
			"Image"				: "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/UMIFlogo.png"
     	}]
};
console.log("300 "+CarouselContentMessage);
var messagereply = new RichMediaMessageK(CarouselContentMessage);
response.send(messagereply);

}



//--- 30.12.2018 20:40

function sayRichMediaMessageLinkPicture(response, BotMessageTextCarouselContent, BotNextOperation) {
	var imagesLinkPicture = "https://images.pexels.com/photos/6997/books-writing-reading-sonja-langford.jpg?auto=compress&cs=tinysrgb&h=650&w=940";
	var BotMessageTextCarouselContent = "Dictionary";
	console.log("836 "+BotMessageTextCarouselContent);

	var CarouselContentLinkPicture = {
	"ButtonsGroupColumns": 6,
	"ButtonsGroupRows": 7,
	"BgColor": "#d3e29d",
	"FavoritesMetadata"		: {
		"type"				: "link",
		"url"				: "",
		"title"				: "Лексикографічна система",
		"thumbnail"			: "JPEG",
		"width"				: 480,
		"height"			: 320
	},
	"keyboard": {
		"DefaultHeight": false
	},
	"Buttons": [{
        'Columns'			: 2,
        'Rows'				: 1,
		"BgColor"			: "#acc864",
        'ActionType'		: 'none',
		"Image"				: "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/pixelslogowhite.png",
        "TextSize"			: 'medium',
        'TextVAlign'		: 'middle',
        'TextHAlign'		: 'left'

   	},{
        'Columns': 4,
        'Rows': 1,
		"BgColor"			: "#ffffff",
        'Text'				: `<font color=\'#072a16\'>Photos provided by Pexels</font>`,
        "ActionType"		: "open-url",
		"ActionBody"		: "https://www.pexels.com",
        'TextSize'			: 'small',
        'TextVAlign'		: 'middle',
        'TextHAlign'		: 'left'
   	},{
		"Columns"			: 6,
		"Rows"				: 4,
		"BgColor"			: "#FFFFFF",
		"BgMediaType"		: "gif",
		"ActionType"		: "reply",
		"ActionBody"		: imagesLinkPicture,
		"Image"				: imagesLinkPicture
	},{
        'Columns'			: 6,
        'Rows'				: 1,
		"BgColor"			: "#acc864",
		'Text'				: `<font color=#323232><b>Definition: ${BotMessageTextCarouselContent}</b></font>`,
        'ActionType'		: 'reply',
		"ActionBody"   		: BotNextOperation+" "+BotMessageTextCarouselContent,
        'TextSize'			: 'medium',
        'TextVAlign'		: 'middle',
        'TextHAlign'		: 'left'
   	},{
        'Columns'			: 6,
        'Rows'				: 1,
		"BgColor"			: "#acc864",
		'Text'				: `<font color=#323232><b>Memory translate: ${BotMessageTextCarouselContent}</b></font>`,
        'ActionType'		: 'reply',
		"ActionBody"    	: BotNextOperation+" "+BotMessageTextCarouselContent,
        'TextSize'			: 'medium',
        'TextVAlign'		: 'middle',
        'TextHAlign'		: 'left'
   	}]
};
console.log("300 "+CarouselContentLinkPicture);
var messagereply = new RichMediaMessageK(CarouselContentLinkPicture);
response.send(messagereply);

}


// ответ без клавиатуры
async function say(response, message) {
//    response._bot.name    = BotViberName;
//    response._bot.avatar  = BotViberAvatar;
//    console.log(response._bot);
    await response.send(new TextMessageBotViber(message));
}


// ответ с клавиатурой
/*
function sayKeyboardBotViber(response, message) {
    response.send(new TextMessageBotViber(message, KeyboardBotViber));
}

*/

/* работает базовая клавиатура

function sayKeyboardBotViberObject(response, message) {

	const messagereply = new KeyboardMessageBotViber(KeyboardBotViberObj);

    response.send(new KeyboardMessageBotViber(KeyboardBotViberObj));
}

*/

//--- 29.12.2018 14:09 все работает

function sayKeyboardBotViberRest(response, message) {

	const messagereply = new KeyboardMessageBotViber(KeyboardBotViberRest);

    response.send(messagereply);

}
//--- 29.12.2018 14:09



//--- 29.12.2018 17:45

function sayKeyboardBotViberRestList(response, message) {

	const messagereply = new KeyboardMessageBotViber(KeyboardBotViberRestList);

    response.send(new KeyboardMessageBotViber(KeyboardBotViberRestList));

}


//--- 29.12.2018 18:15

//--- 30.12.2018 11:30

function sayRichMediaMessageVideo(response, BotMessageTextCarouselContent, BotNextOperation) {
	var imagesLinkVideo = "https://player.vimeo.com/external/300147672.sd.mp4?s=6d900d96a6b388de86f30c61c6edd92b2355ff49&profile_id=164&oauth2_token_id=57447761";
	var imagesLinkVideoPicture = "https://static-videos.pexels.com/videos/1584831/pictures/preview-1.jpg";
	var BotMessageTextCarouselContent = "Dictionary";
	console.log("836 "+BotMessageTextCarouselContent);

const CarouselContentMessageVideo = {
	"ButtonsGroupColumns": 6,
	"ButtonsGroupRows": 6,
	"BgColor": "#acc864",
	"FavoritesMetadata"		: {
		"type"				: "gif",
		"url"				: "http://personal.psu.edu/xqz5228/jpg.jpg",
		"title"				: "Заголовок моего контента",
		"thumbnail"			: "JPEG",
		"width"				: 480,
		"height"			: 320
	},
	"keyboard": {
		"DefaultHeight": false
	},
	"Buttons": [{
        'Columns'			: 1,
        'Rows'				: 1,
		"BgColor"			: "#acc864",
        'ActionType'		: 'none',
		"Image"				: "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/pixelslogo.png",
        'TextSize'			: 'medium',
        'TextVAlign'		: 'middle',
        'TextHAlign'		: 'left'
   	},{
        'Columns': 5,
        'Rows': 1,
		"BgColor"			: "#ffffff",
        'Text': `<font color=\'#072a16\'><b>Photos provided by Pexels</b></font>`,
        "ActionType"		: "open-url",
		"ActionBody"		: "https://www.pexels.com",
        'TextSize': 'medium',
        'TextVAlign': 'middle',
        'TextHAlign': 'left'
   	},{
		"Columns"			: 6,
		"Rows"				: 4,
		"BgColor"			: "#acc864",
		"BgMediaType"		: "gif",
		"ActionType"		: "open-url",
		"ActionBody"		: imagesLinkVideo,
		"OpenURLType"		: "internal",
		"OpenURLMediaType"	: "video",
		"MediaPlayer"		: {
			"Title"			: "Пробное видео",
			"Subtitle"		: "Использование плеера",
			"ThumbnailURL"	: "https://youtu.be/x0Q8jC6aVLI",
			"Loop"			: "false"
		},
		"Image"				: imagesLinkVideoPicture,
		"TextOpacity"		: 60
	},{
        'Columns'		: 6,
        'Rows'			: 1,
		"BgColor"		: "#acc864",
        'Text'			: `<font color=\'#072a16\'><b>${BotMessageTextCarouselContent}</b></font>`,
        'ActionType'	: 'reply',
		"ActionBody"    : BotNextOperation+" "+BotMessageTextCarouselContent,
        'TextSize'		: 'medium',
        'TextVAlign'	: 'middle',
        'TextHAlign'	: 'left'
   	}]
};

console.log(CarouselContentMessageVideo);

	var messagereply = new RichMediaMessageK(CarouselContentMessageVideo);

    response.send(messagereply);
}

//--- 30.12.2018 11:30

function sayRichMediaMessageObject(response, messageSay, BotViberGoogleTranslate) {

	var BotMessageTextCarouselContentMessage = messageSay;
	console.log("836 "+BotMessageTextCarouselContentMessage);

	var 	CarouselContentMessage = {
	"ButtonsGroupColumns"	: 5,
	"ButtonsGroupRows"		: 4,
	"BgColor"				: "#ECEBEB",
	"FavoritesMetadata"		: {
		"type"				: "gif",
		"url"				: "http://personal.psu.edu/xqz5228/jpg.jpg",
		"title"				: "Заголовок моего контента",
		"thumbnail"			: "JPEG",
		"width"				: 480,
		"height"			: 320
	},
	"keyboard": {
		"DefaultHeight": false
	},
	"Buttons": [{
        "Columns"		: 5,
        "Rows"			: 1,
        "Text"			: `<font color=\'#ECEBEB\'><b>${BotMessageTextCarouselContentMessage}</b></font>`,
        "ActionType"	: "reply",
		"ActionBody"	: BotViberGoogleTranslate+" "+BotMessageTextCarouselContentMessage,
		"Image"			: "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/butm1-1.png",
        "TextSize"		: "large",
        "TextVAlign"	: "middle",
        "TextHAlign"	: "left"
   	},{
        'Columns': 5,
        'Rows': 1,
        'Text': "<font color='#ECEBEB'><b>\Dictionary</b></font>",
        'ActionType': 'reply',
		"ActionBody"	: "RichMediaMessage",
		"Image"			: "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/butm2-2.png",
        'TextSize': 'large',
        'TextVAlign': 'middle',
        'TextHAlign': 'left'
   	},{
        'Columns': 5,
        'Rows': 1,
        'Text': "<font color='#ECEBEB'><b>\u00A0glossary</b></font>",
        'ActionType': 'reply',
		"ActionBody"	: "RichMediaMessage",
		"Image"			: "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/butm1-3.png",
        'TextSize': 'large',
        'TextVAlign': 'middle',
        'TextHAlign': 'left'
   	},{
        'Columns': 5,
        'Rows': 1,
        'Text': "<font color='#ECEBEB'><b>\u00A0lexicon</b></font>",
         'ActionType': 'reply',
		"ActionBody"	: "RichMediaMessage",
		"Image"			: "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/butm2-3.png",
        'TextSize': 'large',
        'TextVAlign': 'middle',
        'TextHAlign': 'left'
   	}]
};
	console.log(CarouselContentMessage);

	var messagereply = new RichMediaMessageK(CarouselContentMessage);

    response.send(messagereply);
}

//--- 29.12.2018

//--- 30.12.2018 11:30
// function sayRichMediaMessageVideo(response, message) {

//	const messagereply = new RichMediaMessage(CarouselContentMessageVideo);

//    response.send(new RichMediaMessageK(CarouselContentMessageVideo));
//}

//--- 30.12.2018 11:30
//--- 30.12.2018 12:40
 function sayRichMediaMessageAudio(response, message) {

//	const messagereply = new RichMediaMessage(CarouselContentMessageAudio);

    response.send(new RichMediaMessageK(CarouselContentMessageAudio));
}
//--- 30.12.2018 12:40

//--- 30.12.2018 20:40
 function sayRichMediaMessageLink(response, message) {

//	const messagereply = new RichMediaMessage(CarouselContentMessageLink);

    response.send(new RichMediaMessageK(CarouselContentMessageLink));
}

function changeResponseName(response, answerName) {

var responseName;
var responseAvatar;

  switch(answerName) {
    case 'ULIF':
    responseName    = BotViberNameULIF;
    responseAvatar  = BotViberAvatarULIF;
    break;
    case 'Glosbe':
    responseName    = BotViberNameGlosbe;
    responseAvatar  = BotViberAvatarGlosbe;
    break;
    case 'GoogleT':
    responseName    = BotViberNameGoogleTranslate;
    responseAvatar  = BotViberAvatarGoogleTranslate;
    break;
    case 'MicrosoftT':
    responseName    = BotViberNameAzure;
    responseAvatar  = BotViberAvatarAzure;
    break;
    case 'Oxford':
    responseName    = BotViberNameOxford;
    responseAvatar  = BotViberAvatarOxford;
    break;
    case 'MW':
    responseName    = BotViberNameMerriamWebster;
    responseAvatar  = BotViberAvatarMerriamWebster;
    break;
    default:
    responseName    = BotViberName;
    responseAvatar  = BotViberAvatar;
   }
    response._bot.name    = responseName;
    response._bot.avatar  = responseAvatar;

}

function sayRichMediaMessageHello(response, sayanswerName) {

  let carouselBuilder = new CarouselContentMessageHello('#F9F9F9');

  var BgColorCarouselHello = "#F9F9F9";
  var BgColorButtonHello = "#ebe5e2";
  var FontColorTextMain = "#000000";
  var FontColorTextDischarge = "#00418a";
  var FontColorTextNotation = "#646464";
  var ImagelogoPoland = 'https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/polandlogo.png';
  var ImagelogoUMIF = "https://raw.githubusercontent.com/ExampleBotDictionary/dulbot/master/images/UMIFlogo.png";
  var urllogoUMIF = "http://www.ulif.org.ua";
  var TextCarouselMain1 = "Написав слово чи словосполучення: ";
  var TextCarouselKoma = ",";
  var TextCarouseDischargeSlovo = "крига";
  var TextCarouseDischargeSlovospoluch = "біла крига";
  var TextCarouselMain2 = " бот здійснить переклад з української на англійську мови, надасть дифеніції, синоніми.";
  var TextCarouselMain3 = "Натисніть кнопку зі словом.";
  var TextCarouselMain4 = "Словник української мови в 20 томах охоплює загальновживану лексику сучасної української літературної мови, поширені терміни, діалектизми, усталені словосполучення. Словник української мови. ©Український мовно-інформаційний фонд НАН України,2015-2019";


  carouselBuilder.addElement(BgColorCarouselHello, FontColorTextMain, TextCarouselMain1, FontColorTextDischarge, TextCarouseDischargeSlovo, TextCarouselKoma, TextCarouseDischargeSlovospoluch, TextCarouselMain2, TextCarouselMain3, TextCarouselMain4);

  changeResponseName(response, sayanswerName);
  var messagereply = new RichMediaMessageK(carouselBuilder.build());
  response.send(messagereply);
}




function sayRichMediaMessageTest(response, sayanswerName, TextCarouselMain, CarouseRowssayRMMT,  CarouseTextSize) {

  let carouselBuilder = new CarouselContentMessageTest('#F9F9F9',CarouseRowssayRMMT);
  var BgColorCarouselHello = "#F9F9F9";
  var CarouseRowsaddElement = CarouseRowssayRMMT;

  switch (CarouseTextSize) {
    case 's':
      CarouseTextSize = 'small';
      break;
    case 'r':
      CarouseTextSize = 'regular';
      break
    case 'l':
      CarouseTextSize = 'large';
      break
    default:
      CarouseTextSize = 'regular';
  }

  say(response, ` TextCarouselMain -> ${TextCarouselMain.length}\n CarouseRows -> ${CarouseRowssayRMMT}\n CarouseTextSize -> ${CarouseTextSize}`);

  carouselBuilder.addElement(CarouseRowsaddElement, BgColorCarouselHello, CarouseTextSize, TextCarouselMain);

  changeResponseName(response, sayanswerName);
  var messagereply = new RichMediaMessageK(carouselBuilder.build());
  console.log('726. messagereply');
  console.log(messagereply);
  console.log('728. messagereply.richMedia');
  console.log(messagereply.richMedia);
/*
  console.log('728. response');
  console.log(response);
*/

  response.send(messagereply);

}

function formirovanieStrokiNaPodschetSymbol(kolvoNaPodschetSymbol) {
  let strokaNaPodschetSymbol = '';
  let cyfraNaPodschet = 1;

  for (var iSymbol = 0; iSymbol < kolvoNaPodschetSymbol; iSymbol++) {
      let iSymbolString = iSymbol.toString();
      let lastCyfraISymbol = iSymbolString.substring(iSymbolString.length -1);
    switch (lastCyfraISymbol) {
      case '0':
      strokaNaPodschetSymbol = strokaNaPodschetSymbol + `${cyfraNaPodschet}`;
        break;
      case '2':
      strokaNaPodschetSymbol = strokaNaPodschetSymbol + `${cyfraNaPodschet}`;
        break;
      case '4':
      strokaNaPodschetSymbol = strokaNaPodschetSymbol + `${cyfraNaPodschet}`;
        break;
      case '6':
      strokaNaPodschetSymbol = strokaNaPodschetSymbol + `${cyfraNaPodschet}`;
        break;
      case '8':
      strokaNaPodschetSymbol = strokaNaPodschetSymbol + `${cyfraNaPodschet}`;
      cyfraNaPodschet = cyfraNaPodschet + 1;
        break;
      case '1':
      strokaNaPodschetSymbol = strokaNaPodschetSymbol +' ';
        break;
      case '3':
      strokaNaPodschetSymbol = strokaNaPodschetSymbol +' ';
        break;
      case '5':
      strokaNaPodschetSymbol = strokaNaPodschetSymbol +' ';
        break;
      case '7':
      strokaNaPodschetSymbol = strokaNaPodschetSymbol +' ';
        break;
      case '9':
      strokaNaPodschetSymbol = strokaNaPodschetSymbol +' ';
        break;
    }
    if (cyfraNaPodschet == 10) {
      cyfraNaPodschet = 0;
    }
  }
  return strokaNaPodschetSymbol;
}
//--- 30.12.2018 20:40

// Creating the bot Viber with access token, name and avatar
//const bot = new BotViber( logger, {
const bot = new BotViber({

    authToken : VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY,
    name      : BotViberName,
    avatar    : BotViberAvatar
});



function sayRichMediaPrimerViber(response) {
  const richMedia = {
    "receiver": response.userProfile.id,
    "type": "rich_media",
    "min_api_version": "6",
    "rich_media": {
        "Type": "rich_media",
        "Buttons": [{ "Columns": 6,
                      "Rows": 3,
                      "BgColor": "#F9F9F9",
                      "Silent": true,
                      "ActionType": "none",
                      "ActionBody": "text",
                      "TextSize": "small",
                      "Text":
                       "1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5 6 6 6 6 6 7 7 7 7 7 8 8 8 8 8 9 9 9 9 9 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5 6 6 6 6 6 7 7 7 7 7 8 8 8 8 8 9 9 9 9 9 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5",
                      "TextOpacity": 60 },
                      { "Columns": 6,
                      "Rows": 3,
                      "BgColor": "#F9F9F9",
                      "Silent": true,
                      "ActionType": "none",
                      "ActionBody": "text",
                      "TextSize": "small",
                      "Text":
                       "1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5 6 6 6 6 6 7 7 7 7 7 8 8 8 8 8 9 9 9 9 9 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5 6 6 6 6 6 7 7 7 7 7 8 8 8 8 8 9 9 9 9 9 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5",
                      "TextOpacity": 60 },
                      { "Columns": 6,
                      "Rows": 1,
                      "BgColor": "#F9F9F9",
                      "Silent": true,
                      "ActionType": "none",
                      "ActionBody": "text",
                      "TextSize": "small",
                      "Text":
                       "1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5 6 6 6 6 6 7 7 7 7 7 8 8 8 8 8 9 9 9 9 9 ",
                      "TextOpacity": 60 }
        ]
    }
  }

  var optionsSendMessage = {
    method: 'post',
    body:    JSON.stringify(richMedia),
    headers: {
      'Content-Type': 'application/json',
      'X-Viber-Auth-Token': VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY
    }
  };

  console.log('911. optionsSendMessage >>> ', optionsSendMessage);

  fetch('https://chatapi.viber.com/pa/send_message', optionsSendMessage)
  .then(res => res.json())
  .then(json => console.log('933. json >>>>> ', json));

}

function sayRichMediaPrimerViber2(response) {
  const richMedia = {
    "receiver": response.userProfile.id,
    "type": "rich_media",
    "min_api_version": "6",
    "rich_media": {
        "Type": "rich_media",
        "Buttons": [{ "Columns": 6,
                      "Rows": 7,
                      "BgColor": "#F9F9F9",
                      "Silent": true,
                      "ActionType": "none",
                      "ActionBody": "text",
                      "TextSize": "small",
                      "Text":
                       "1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5 6 6 6 6 6 7 7 7 7 7 8 8 8 8 8 9 9 9 9 9 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5 6 6 6 6 6 7 7 7 7 7 8 8 8 8 8 9 9 9 9 9 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5",
                      "TextOpacity": 60 },
                      { "Columns": 6,
                      "Rows": 7,
                      "BgColor": "#F9F9F9",
                      "Silent": true,
                      "ActionType": "none",
                      "ActionBody": "text",
                      "TextSize": "small",
                      "Text":
                       "1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5 6 6 6 6 6 7 7 7 7 7 8 8 8 8 8 9 9 9 9 9 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5 6 6 6 6 6 7 7 7 7 7 8 8 8 8 8 9 9 9 9 9 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5",
                      "TextOpacity": 60 },
                      { "Columns": 6,
                      "Rows": 7,
                      "BgColor": "#F9F9F9",
                      "Silent": true,
                      "ActionType": "none",
                      "ActionBody": "text",
                      "TextSize": "small",
                      "Text":
                       "1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5 6 6 6 6 6 7 7 7 7 7 8 8 8 8 8 9 9 9 9 9 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5 6 6 6 6 6 7 7 7 7 7 8 8 8 8 8 9 9 9 9 9 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 3 3 3 3 3 4 4 4 4 4 5 5 5 5 5",
                      "TextOpacity": 60 }
        ]
    }
  }

  var optionsSendMessage = {
    method: 'post',
    body:    JSON.stringify(richMedia),
    headers: {
      'Content-Type': 'application/json',
      'X-Viber-Auth-Token': VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY
    }
  };

  console.log('970. optionsSendMessage >>> ', optionsSendMessage);
  fetch('https://chatapi.viber.com/pa/send_message', optionsSendMessage)
  .then(res => res.json())
  .then(json => console.log('933. json >>>>> ', json));

}


bot.onTextMessage(/./, async (messageBot, responseBot) => {
  console.log(messageBot);
  const ZaprosSlovo = messageBot.text;
  let pervie3SymbolaZaprosSlovoViber = ZaprosSlovo.substring(0, 3);
  switch (pervie3SymbolaZaprosSlovoViber) {
    case '000':
        var masivKomandZaprosSlovo = ZaprosSlovo.split(' ');

        var kolvoSymbol = masivKomandZaprosSlovo[1];
        var kolvoCarouseRows = masivKomandZaprosSlovo[2];
        var razmerCarouseTextSize = masivKomandZaprosSlovo[3];

        var strokaTextCarouselMain = formirovanieStrokiNaPodschetSymbol(kolvoSymbol);

        sayRichMediaMessageTest(responseBot, 'ULIF', strokaTextCarouselMain, kolvoCarouseRows,  razmerCarouseTextSize);
      break;
    case '00 ':
        sayRichMediaMessageHello(responseBot,'ULIF');
      break;
    case '111':
    console.log('975 >>>>>>>>>>>>>');
    sayRichMediaPrimerViber(responseBot);
    console.log('977 >>>>>>>>>>>>>');
      break;
    case '222':
      sayRichMediaPrimerViber2(responseBot);
      break;
    default:

        console.log("stroka 820 ", new Date());
        console.log('821---------------------------------------------------------------------------------------------------------');

        const nazvanieClassaSum20ua = 'FORMULA';
        var otvetSum20uaFetch = await sum20uaFetch(ZaprosSlovo, nazvanieClassaSum20ua);

        for (const dannieSlova of otvetSum20uaFetch) {
          if (dannieSlova.tolkovanieSlovaINTF != undefined || dannieSlova.tolkovanieSlovaINTF != undefined) {
            var slovoSum20ua          = dannieSlova.classSlovoSum20ua;
            var tolkovanieINTFSum20ua = dannieSlova.tolkovanieSlovaINTF.join(' ');
            var tolkovanieINTNSum20ua = dannieSlova.tolkovanieSlovaINTN.join(' ');
            var lpartSum20ua          = dannieSlova.classLPART;
            await say(responseBot, `${slovoSum20ua}${lpartSum20ua} ${tolkovanieINTFSum20ua} ${tolkovanieINTNSum20ua}`);
          }
        }

        console.log('836. otvetSum20uaFetch >>>', otvetSum20uaFetch);
        console.log("stroka 898 ", new Date());

  }
});
/*
const http = require('http');
const port = process.env.PORT || 8080;

return ngrok.getPublicUrl().then(publicUrl => {
    console.log('Set the new webhook to"', publicUrl);
    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl,true));
}).catch(error => {
    console.log('Can not connect to ngrok server. Is it running?');
    console.error(error);
});
*/

if (process.env.NOW_URL || process.env.HEROKU_URL) {
    const http = require('http');
    const port = process.env.PORT || 8080;

    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(process.env.NOW_URL || process.env.HEROKU_URL));
} else {
    logger.debug('Could not find the now.sh/Heroku environment variables. Trying to use the local ngrok server.');
    return ngrok.getPublicUrl().then(publicUrl => {
        const http = require('http');
        const port = process.env.PORT || 8080;

        http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));

    }).catch(error => {
        console.log('Can not connect to ngrok server. Is it running?');
        console.error(error);
        process.exit(1);
    });
};
