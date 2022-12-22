'use strict';

const arr = [
  [
    {
      nameResourse: 'Tsn.ua',
      author: 'Марія Пономаренко',
      zagolovok: 'Продовжить кар\'єру в Іспанії: Зозуля офіційно знайшов собі новий клуб - ТСН',
      linkArticle: 'https://tsn.ua/prosport/prodovzhit-kar-yeru-v-ispaniyi-zozulya-oficiyno-znayshov-sobi-noviy-klub-2219206.html',
      immageUrl: 'https://img.tsn.ua/cached/047/tsn-86026451a4bd5b82b0f7aa9436ae117b/thumbs/1200x630/ce/68/7159514e4d5a6b64d7a9b3a9d05168ce.jpeg',
      dataPublished: '2022-12-09T08:06:25Z'
    },
    {
      nameResourse: 'Ua-football.com',
      author: 'Влад Петрушевский',
      zagolovok: 'X-Фактор Мбаппе, пішохід Мессі, бунт Роналду, кайф Ван Гала, нова Бразилія: огляд 1/8 та анонс до 1/4 ЧС - UA-Футбол',
      linkArticle: 'https://www.ua-football.com/ua/foreign/worldcup/1670508065-x-faktor-mbappe-pishohid-messi-bunt-ronaldu-kayf-van-gala-nova-braziliya-oglyad-1-8-ta-anons-do-1-4-chs.html',
      immageUrl: 'https://static.ua-football.com/img/upload/21/2a6392.jpeg',
      dataPublished: '2022-12-09T06:52:00Z'
    },
    {
      nameResourse: 'Ua-football.com',
      author: 'Борис Сорокін',
      zagolovok: 'Зміна тренера у збірній Іспанії, новий клуб Романа Зозулі. Головні новини за 8 грудня - UA-Футбол',
      linkArticle: 'https://www.ua-football.com/ua/ukrainian/news/1670539350-zmina-trenera-u-zbirniy-ispaniyi-noviy-klub-romana-zozuli-golovni-novini-za-8-grudnya.html',
      immageUrl: 'https://static.ua-football.com/img/upload/21/2a630c.jpeg',
      dataPublished: '2022-12-08T23:29:02Z'
    },
    {
      nameResourse: 'Www.rbc.ua',
      author: 'Артур Родивилов',
      zagolovok: 'ФІФА оштрафувала збірну Сербії через прапор з Косово на Чемпіонаті світу - РБК-Украина',
      linkArticle: 'https://www.rbc.ua/rus/news/fifa-oshtrafuvala-zbirnu-serbiyi-cherez-prapor-1670535593.html',
      immageUrl: 'https://www.rbc.ua/static/img/g/e/gettyimages_491848899_1_1300x820_1_1300x820.jpg',
      dataPublished: '2022-12-08T21:41:15Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: 'Sport.ua',
      zagolovok: 'Луї ВАН ГАЛ: «Мені 71 рік, але я виглядаю як Бог» - Sport.ua',
      linkArticle: 'https://sport.ua/uk/news/606804-lui-van-gal-mne-71-god-no-ya-vyglyazhu-kak-bog',
      immageUrl: 'https://pic.sport.ua/images/news/0/15/34/social_606804.jpg',
      dataPublished: '2022-12-08T20:09:00Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: 'Sport.ua',
      zagolovok: 'Калініна обіграла чемпіонку Australian Open і вийшла у чвертьфінал турніру - Sport.ua',
      linkArticle: 'https://sport.ua/uk/news/606805-kalinina-obygrala-chempionku-australian-open-i-vyshla-v-chetvertfinal-turnira',
      immageUrl: 'https://pic.sport.ua/images/news/0/15/34/social_606805.jpg',
      dataPublished: '2022-12-08T20:01:00Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: 'Sport.ua',
      zagolovok: 'Тайсон Ф\'ЮРІ: «Погляньте на Роналду, вік не шкодує нікого» - Sport.ua',
      linkArticle: 'https://sport.ua/uk/news/606794-tayson-fyuri-posmotrite-na-ronaldu-vozrast-ne-shchadit-nikogo',
      immageUrl: 'https://pic.sport.ua/images/news/0/15/33/social_606794.jpg',
      dataPublished: '2022-12-08T17:21:00Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: 'Sport.ua',
      zagolovok: 'Шахтар не контактував з іншими клубами щодо продажу Мудрика - Sport.ua',
      linkArticle: 'https://sport.ua/uk/news/606793-shahter-ne-kontaktiroval-s-drugimi-klubami-po-prodazhe-mudrika',
      immageUrl: 'https://pic.sport.ua/images/news/0/15/33/social_606793.jpg',
      dataPublished: '2022-12-08T17:09:00Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: 'Sport.ua',
      zagolovok: 'Ібрагімович назвав бажаного для себе переможця ЧС-2022 - Sport.ua',
      linkArticle: 'https://sport.ua/uk/news/606774-ibragimovich-nazval-zhelaemogo-dlya-sebya-pobeditelya-chm-2022',
      immageUrl: 'https://pic.sport.ua/images/news/0/15/33/social_606774.jpg',
      dataPublished: '2022-12-08T14:55:00Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: 'Sport.ua',
      zagolovok: 'Гохфільцен-2022. Анастасія Меркушина посіла 35 місце в спринті - Sport.ua',
      linkArticle: 'https://sport.ua/uk/news/606770-hohfiltsen-2022-anastasiya-merkushina-zanyala-35-mesto-v-sprinte',
      immageUrl: 'https://pic.sport.ua/images/news/0/15/33/social_606770.jpg',
      dataPublished: '2022-12-08T14:28:00Z'
    },
    {
      nameResourse: 'Ua-football.com',
      author: 'Михаил Черныш',
      zagolovok: 'Аль-Айн Реброва пробився до 1/8 фіналу Кубка ОАЕ: Ярмоленко заробив пенальті - UA-Футбол',
      linkArticle: 'https://www.ua-football.com/ua/ukrainian/ukrainians/1670519489-al-ayn-rebrova-probivsya-do-1-8-finalu-kubka-oae-yarmolenko-zarobiv-penalti.html',
      immageUrl: 'https://static.ua-football.com/img/upload/21/2a3cb3.jpeg',
      dataPublished: '2022-12-08T13:36:41Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: 'Sport.ua',
      zagolovok: 'Євро-2023 U-19. Юнацька збірна України дізналася суперників в еліт-раунді - Sport.ua',
      linkArticle: 'https://sport.ua/uk/news/606751-evro-2023-u-19-yunosheskaya-sbornaya-ukrainy-uznala-sopernikov-v-elit-raunde',
      immageUrl: 'https://pic.sport.ua/images/news/0/15/33/social_606751.jpg',
      dataPublished: '2022-12-08T12:46:00Z'
    },
    {
      nameResourse: '24tv.ua',
      author: 'Ігор Саджениця',
      zagolovok: 'Без явного фаворита: хто має шанс на вихід в півфінал ЧС-2022 в парі Нідерланди – Аргентина - 24 Канал',
      linkArticle: 'https://sport.24tv.ua/niderlandi-argentina-anons-prognoz-match-chvertfinalu-chs-2022_n2214174',
      immageUrl: 'https://sport.24tv.ua/resources/photos/news/202212/2214174.jpg?v=1670523381000&w=1200&h=675',
      dataPublished: '2022-12-08T18:23:00Z'
    }
  ]
];

module.exports = arr;
