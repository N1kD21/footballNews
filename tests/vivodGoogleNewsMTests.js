'use strict';
const vivodGoogleNewsM = require('../lib/vivodGoogleNewsM');

const assert                  = require('assert').strict;

const testModificationObj = async (input, output) => {
  const n = await vivodGoogleNewsM(input);
  assert.deepStrictEqual(n, output);
};


const arr1 = [
  {
    immage: 'https://pic.sport.ua/images/news/0/13/75/social_535084.jpg',
    caption: 'Олександр ДЕНИСОВ: «Чорна смуга Шахтаря виглядає безмежною» - Спорт.ua\n' +
      '<a href="https://sport.ua/uk/news/535084-aleksandr-denisov-chernaya-polosa-shahtera-vyglyadit-bezgranichnoy">Sport.ua</a>'
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/75/social_535078.jpg',
    caption: 'ЛЕОНЕНКО: «Футболісти Шахтаря вже розуміють, що Каштру в команді не буде» - Спорт.ua\n' +
      '<a href="https://sport.ua/uk/news/535078-leonenko-futbolisty-shahtera-uzhe-ponimayut-chto-kashtru-v-komande-ne-budet">Sport.ua</a>'
  },
  {
    immage: 'https://footballhub.com.ua/footballhub-static/2021/02/Sol_gol_Rajo-Valyekano_-scaled.jpg',
    caption: 'Поки Динамо святкує – він продовжує забивати! Орендований у киян гравець тягне свою команду. ВІДЕО - FootballHub\n' +
      '<a href="https://footballhub.com.ua/poky-dynamo-svyatkuye-vin-prodovzhuye-zabyvaty-orendovanyj-u-kyyan-gravets-tyagne-svoyu-komandu-video/">Footballhub.com.ua</a>'
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/75/social_535058.jpg',
    caption: 'КУРЙОЗ ДНЯ. Трофей Євро-2020 впав на землю у прямому ефірі - Спорт.ua\n' +
      '<a href="https://sport.ua/uk/news/535058-kuryez-dnya-trofey-evro-2020-upal-na-zemlyu-v-pryamom-efire">Sport.ua</a>'
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/75/social_535057.jpg',
    caption: 'Суперліга. Круте піке Дніпра, відомі всі учасники плей-оф, Київ-Баскет - Спорт.ua\n' +
      '<a href="https://sport.ua/uk/news/535057-superliga-krutoe-pike-dnepra-izvestny-vse-uchastniki-pley-off">Sport.ua</a>'
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/75/social_535051.jpg',
    caption: 'Гей-паради - це круто. Сеньків жорстко відповів Костишину - Спорт.ua\n' +
      '<a href="https://sport.ua/uk/news/535051-gey-parady-eto-kruto-senkiv-zhestko-otvetil-kostyshinu">Sport.ua</a>'
  },
  {
    immage: 'https://s.032.ua/section/newsIcon/upload/images/news/icon/000/053/364/17752832717646573903806517548954138437951515n_608665da89fef.jpg',
    caption: '«Карпати» не витримали натиску «Епіцентру», - ФОТО, ВІДЕО - 032.ua - Новини Львова\n' +
      '<a href="https://www.032.ua/news/3086557/karpati-ne-vitrimali-natisku-epicentru-foto-video">Www.032.ua</a>'
  },
  {
    immage: 'https://static.ua-football.com/img/upload/20/28dea2.jpeg',
    caption: '"Він пручався, але знайшов свою позицію". Гасперіні – про прогрес Маліновського в Аталанті - UA-Футбол\n' +
      '<a href="https://www.ua-football.com/ua/foreign/italy/1619419186-vin-pruchavsya-ale-znayshov-svoyu-poziciyu-gasperini-pro-progres-malinovskogo-v-atalanti.html">Ua-football.com</a>'
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/75/social_535050.jpg',
    caption: 'ТаТоТаке. Луческу треба валити, чемпіонство Динамо - не подія - Спорт.ua\n' +
      '<a href="https://sport.ua/uk/news/535050-tatotake-luchesku-nado-valit-chempionstvo-dinamo-ne-sobytie">Sport.ua</a>'
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/75/social_535047.jpg',
    caption: 'Рейтинг ATP. Надаль знову другий, Ваншельбойм оновив особистий рекорд - Спорт.ua\n' +
      '<a href="https://sport.ua/uk/news/535047-reyting-atp-nadal-snova-vtoroy-vanshelboym-obnovil-lichniy-rekord">Sport.ua</a>'
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/75/social_535044.jpg',
    caption: 'Рейтинг WTA. Новий рекорд Костюк, Соболєва розпочинає підйом - Спорт.ua\n' +
      '<a href="https://sport.ua/uk/news/535044-reyting-wta-noviy-rekord-kostyuk-soboleva-nachinaet-podem">Sport.ua</a>'
  },
  {
    immage: 'https://pic.sport.ua/images/news/0/13/75/social_535045.jpg',
    caption: 'ЛУЧЕСКУ - про Де Дзербі в Шахтарі: «Я був би щасливий» - Спорт.ua\n' +
      '<a href="https://sport.ua/uk/news/535045-luchesku-o-de-dzerbi-v-shahtere-ya-byl-by-schastliv">Sport.ua</a>'
  },
  {
    immage: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660506.jpg',
    caption: 'Президент Динамо Ігор Суркіс розповів про селекційні плани клубу у літнє міжсезоння.\n' +
      '"Я це ще не обговорював. У нас буде час. Основне завдання виконано, будемо спілкуватися. Луческу скаже про свої побажання. Селекціонери скажуть, що вони напрацювали – підійде йому чи ні.\n' +
      'Минулого сезону, коли у нас було вісім здорових футболістів, я пропонував Луческу придбати або терміново взяти в оренду якогось досвідченого футболіста. Було кілька кандидатур, які він переглянув і відхилив. Сказав, що хлопці в нього вірять, що він бачить це на тренуваннях і повірить їм в надії, що вони не підведуть.\n' +
      'Це говорить про колосальний досвід Луческу, який він накопичив протягом свого життя. Він вселив гравцям, що можна перемагати. Ми перестали втрачати очки там, де ми їх завжди втрачали. Налаштовуватися на два матчі проти Шахтаря в році можна. Це подразник. А налаштовуватися на такі команди, як Інгулець так, щоб у мене не вилітало серце і до 15-ї хвилині вести 2:0 – це мені вже подобається. Сподіваюся, що наступного сезону це буде продовжуватися", – сказав Суркіс в ефірі "Великого футболу".\n' +
      'Нагадаємо, Динамо напередодні розгромило Інгулець з рахунком 5:0 і достроково стало чемпіоном України. Після 23-х турів кияни випереджають Шахтар на 13 пунктів.\n' +
      '<a href="https://football24.ua/surkis__pro_potentsiyni_transferi_dinamo_luchesku_skazhe_pro_svoyi_pobazhannya_n660506/">Football24.ua</a>'
  },
  {
    immage: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660452.jpg',
    caption: 'Хавбек Олександрії Дмитро Гречишкін продемонстрував могутність свого удару – позаздрить навіть Роберто Карлос.\n' +
      'Наприкінці першого тайму матчу 23-го туру УПЛ Олександрія заробила право на пенальті – Тете зіграв рукою в карному майданчику, і арбітр після перегляду VAR вказав на позначку.\n' +
      "Гречишкін досить впевнено пробив у кут, хоча здалось, що м'яч пролетів повз. Насправді ж хавбек своїм могутнім ударом примудрився прошити сітку воріт. Цікаво, що свою ігрову кар'єру Дмитро розпочинав саме у складі Шахтаря.\n" +
      'До слова, цей гол допоміг Олександрії обіграти "гірників" із рахунком 2:0 – другий гол в активі Шастала. Таким чином, підопічні Шарана вперше обіграли Шахтар на своєму полі та залишились на сьомій сходинці з 29 пунктами в активі.\n' +
      ' \n' +
      '\n' +
      '<a href="https://football24.ua/grechishkin_udarom_z_penalti_porvav_sitku_vorit_shahtarya__video_garmatnogo_postrilu_n660452/">Football24.ua</a>'
  },
  {
    immage: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660498.jpg',
    caption: 'Головний тренер Реала Зінедін Зідан поспілкувався з журналістами напередодні першого матчу 1/2 фіналу ЛЧ проти Челсі.\n' +
      '"Ми добре підготувались. Хочемо продемонструвати свої найкращі якості. Найважливіша гра? Кожен наступний матч – найважливіший, це черговий фінал.\n' +
      'Мадрид дискваліфікують з ЛЧ? Абсурд. Зараз багато про це говориться, але нас не хвилюють спекуляції. Ми готуємось до Челсі, і будемо брати участь в наступній ЛЧ. Ось що я думаю. Ми повинні виконувати наші прямі обов’язки – виходити на поле і конкурувати. Можливе упередження з боку арбітрів через Суперлігу? Якщо будемо думати про ці речі, то збожеволіємо. Це нісенітниці.\n' +
      'Так, Челсі добре захищається, але я не вважаю, що це закрита команда. Челсі – збалансований. Вони вміють абсолютно все – і оборонятися, і атакувати. У нас немає пріоритетного турніру.\n' +
      'Ми боремося за усі трофеї попри очевидні труднощі, зокрема, насичений календар. Челсі та Мадрид заслужено пробилися до півфіналу. Так, ми володіємо величезним досвідом схожих матчів, але те саме можна сказати про Челсі. До початку гри у обох команд шанси рівні.\n' +
      'Азар? Він почувається дуже добре. Ми розраховуємо на нього. Азар значно розширює можливості команди. 15 хвилин проти Бетіса додали йому впевненості. Кроос готовий зіграти завтра, Менді – ні.\n' +
      'Мене не бачили в Реалі після поразок від Шахтаря? Такі розмови завжди трапляються. Це доля тренера. Зараз я сконцентрований лише на Челсі", – сказав Зідан.\n' +
      '<a href="https://football24.ua/zidan_ziznavsya_yak_spriynyav_shkval_kritiki_pislya_porazok_vid_shahtarya_n660498/">Football24.ua</a>'
  },
  {
    immage: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660494.jpg',
    caption: 'Виявляється, навіть між потенційними учасниками Суперліги не було єдності. \n' +
      'Як відомо, про створення Суперліги оголосили 12 клубів (список засновників пізніше мав би розширитися до 15), але не всім подобалася присутність серед постійних членів мадридського Атлетіко.\n' +
      'За інформацією Cadena SER, представники АПЛ були проти участі в проекті "матрацників". Причиною такого ставлення стали низькі рейтинги Атлетіко на медіаринку, а також мала кількість підписників у соцмережах. Вважається, що за таких умов мадридці більше отримають, ніж зможуть дати Суперлізі.\n' +
      'До слова, наразі через гнівну реацію УЄФА та уболівальників більшість клубів-засновників Суперліги оголосили про наміри покинути організацію. Мілан, Ювентус, Барселона та Реал все ще залишаються у проекті.\n' +
      '<a href="https://football24.ua/klubi_apl_buli_proti_uchasti_atletiko_v_superlizi__nefutbolna_prichina_n660494/">Football24.ua</a>'
  },
  {
    immage: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660476.jpg',
    caption: 'Головний тренер Лілля Крістоф Гальтьє не стримував емоцій після матчу 34-го туру Ліги 1 проти Ліона (3:2).\n' +
      `"Доги" ведуть боротьбу за чемпіонство, випереджаючи ПСЖ лише на одне очко. Відтак потрібно лише перемагати. Ліон упродовж матчу вів у рахунку з перевагою у два м'ячі, але Лілль зумів здійснити камбек і врятувати лідерство у Лізі 1.\n` +
      'Такий напружений сценарій нікого не може залишити байдужим, а безпосередніх учасників матчу і поготів. Крістоф Гальтьє після фінального свистка ледве контролював себе, а його святкування стало вірусним. На радощах 54-річний фахівець продемонстрував, що навіть елементи із гімнастики йому під силу.\n' +
      'Додамо, що за чотири тури до завершення чемпіонату Франції Лілль очолює турнірну таблицю, маючи одне очко переваги над ПСЖ. "Догам" належить зіграти проти Ніцци, Анже, Ланса та Сент-Етьєна.\n' +
      '<a href="https://football24.ua/peredchuttya_chempionstva_znosit_dah__nastavnik_lillya_bozhevilno_vidsvyatkuvav_shalenu_peremogu_nad_lionom_n660476/">Football24.ua</a>'
  },
  {
    immage: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660468.jpg',
    caption: "Люксембурзький легіонер Динамо Жерсон Родрігес після завершення кар'єри футболіста цілком може проявити себе у якості інтерв'юера. \n" +
      "Як відомо, напередодні Динамо розгромило Інгулець з рахунком 5:0 і достроково завоювало золоті медалі української Прем'єр-ліги. Емоції після здобуття омріяного трофею кожен проявляв по-різному.\n" +
      "Форвард киян Жерсон Родрігес вирішив відчути себе акулою пера, і озброївшись мікрофоном на чемпіонському святкуванні в роздягальні киян особисто взяв інтерв'ю у всієї команди!\n" +
      'Люксембуржець спілкувався з партнерами різними мовами, жартував і продемонстрував, що він талановитий не лише на футбольному полі, а й поза ним.\n' +
      'Нагадаємо, за три тури до фінішу Динамо у турнірній таблиці УПЛ випереджає Шахтар на 13 пунктів.\n' +
      '<a href="https://football24.ua/zherson_sprobuvav_sebe_u_roli_zhurnalista_pislya_zavoyuvannya_chempionstva_z_dinamo__atmosferne_video_n660468/">Football24.ua</a>'
  },
  {
    immage: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660469.jpg',
    caption: 'Раян Мейсон допрацює нинішній сезон, після чого Тоттенхем планує призначити більш досвідченого фахівця.\n' +
      '"Шпори" не стали шукати постійного тренера відразу після звільнення Жозе Моурінью, довіривши команду 29-річному Мейсону. Однак новий сезон лондонці планують розпочати на чолі з іменитим фахівцем.\n' +
      'Тоттенхем уже окреслив для себе коло бажаних кандидатів. Стівена Джеррарда, про якого була мова раніше, там немає. Натомість клубу імпонують Юліан Нагельсманн (РБ Лейпциг), Брендан Роджерс (Лестер), Марселіно Тораль (Атлетік Більбао) та Роберто Мартінес (збірна Бельгії), стверджує журналіст Ніколо Скіра.\n' +
      'Зазначається, що пріоритетним варіантом став 33-річний Нагельсманн, але здійснити це призначення буде вкрай складно. По-перше, його контракт з РБ Лейпциг діє ще два роки. По-друге, на молодого фахівця серйозно претендує Баварія. По-третє, "бики" нібито готові відпустити тренера лише після виплати компенсації, яка становить 30 млн євро.\n' +
      '<a href="https://football24.ua/tottenhem_obrav_chotiroh_kandidativ_na_zaminu_mourinyu__bez_dzherrarda_ale_zi_sproboyu_zipsuvati_plani_bavariyi_n660469/">Football24.ua</a>'
  },
  {
    immage: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660463.jpg',
    caption: 'Глава Комітету збірних команд УАФ Мирон Mаркевич прокоментував дострокове завоювання Динамо чемпіонського звання.\n' +
      '"На жаль, як і минулого року, інтрига у боротьбі за "золото" зникла задовго до фінішу. Думаю, що Шахтар змирився з втратою чемпіонського титулу після поразки від Львова ще у 19-му турі.\n' +
      'На мій погляд, було б неправильно у всьому звинувачувати головного тренера Луїша Каштру. Тут очевидне недопрацювання усіх клубних структур. А те, що всередині команди є вразливі місця, підтвердив календарний поєдинок з Олександрією – давно я не бачив Шахтар таким безпорадним на всеукраїнській арені.\n' +
      `Що стосується київського Динамо, то його зліт – заслужений. Після появи біля керма досвідченого Мірчі Луческу "біло-сині" порадували згуртованістю, а завдяки високій ігровій дисципліні не дозволяли собі тринькати очки в матчах з менш іменитими командами, чим у попередні роки часто грішили. І, вітаючи динамівців з поверненням на трон, бажаю, щоб вони стали конкурентоспроможними у Лізі чемпіонів. Для цього їм необхідно обов'язково підсилитися трьома-чотирма дуже серйозними виконавцями. Гравців такого рівня в Україні просто немає, тому потрібно кликати на допомогу легіонерів", – сказав Маркевич у коментарі Meta Ratings.\n` +
      'Нагадаємо, Динамо напередодні розгромило Інгулець з рахунком 5:0 і достроково стало чемпіоном України. Натомість Шахтар у матчі з Олександрією несподівано поступився 0:2. Після 23-х турів кияни випереджають "гірників" вже на 13 пунктів.\n' +
      '<a href="https://football24.ua/davno_ya_ne_bachiv_shahtartakim_bezporadnim_markevich_dva_vazhlivu_poradu_dinamo_pislya_zavoyuvannya_chempionstva_n660463/">Football24.ua</a>'
  },
  {
    immage: 'https://img.championat.com/news2/social/b/93/4332407.jpg',
    caption: 'Онопко: Ахметову надо было дать жёлтую карточку, а не красную. Карасёв подвел Кукуяна - Чемпионат\n' +
      '<a href="https://www.championat.com/football/news-4332407-onopko-ahmetovu-nado-bylo-dat-zhyoltuyu-kartochku-a-ne-krasnuyu-karasyov-podvel-kukuyana.html">Championat.com</a>'
  },
  {
    immage: 'https://www.sports.ru/dynamic_images/news/109/649/556/2/share/5b0d5e.jpg',
    caption: 'Нагельсманн согласился возглавить «Баварию». Мюнхенцы ведут переговоры с «Лейпцигом» - Sports.ru\n' +
      '<a href="https://www.sports.ru/football/1096495562-nagelsmann-soglasilsya-vozglavit-bavariyu-myunxenczy-vedut-peregovory-.html">Sports.ru</a>'
  },
  {
    immage: 'https://resizer.mail.ru/p/3528056b-0fbd-5b1e-9275-5b98a6a0c5b4/op:40/logo:bottom:sport.png/ot:0JIg0JjRgdC_0LDQvdC40Lgg0YPQvNC10YAgMjAt0LvQtdGC0L3QuNC5INGE0YPRgtCx0L7Qu9C40YHRgiDQm9GD0LjRgSDQntGF0LXQtNCwINCh0YPQsNGA0LXRgQ/AQAGaSgV3zA3VOPqLWiVB3kH-ciNxnd5tkrzNT0-9YJRzuZ8mHZ5j4S6SOH0CUyaOH1lBYGQZyVMO1kJUX1YHTgXFKY.jpg',
    caption: 'В Испании умер 20-летний футболист Луис Охеда Суарес - Спорт Mail.ru\n' +
      '<a href="https://sportmail.ru/news/football-foreign/46099144/">Sportmail.ru</a>'
  },
  {
    immage: 'https://img.championat.com/news2/social/1/2d/4332329.jpg',
    caption: 'Дмитрий Губерниев отреагировал на свадебное фото Александра Большунова и Анны Жеребятьевой\n' +
      '       - Чемпионат\n' +
      '<a href="https://www.championat.com/skiing/news-4332329-dmitrij-guberniev-otreagiroval-na-svadebnoe-foto-aleksandra-bolshunova-i-anny-zherebyatevoj.html">Championat.com</a>'
  },
  {
    immage: 'https://resizer.mail.ru/p/27b0335d-f869-5655-9921-f1801cc32455/op:40/logo:bottom:sport.png/ot:0J3QsNC30LLQsNC90Ysg0L_QtdGA0LLRi9C1INGH0LvQtdC90Ysg0JfQsNC70LAg0YHQu9Cw0LLRiyDQkNCf0Js/AQAGCvV4RvEeaqLBh00LJk8_VjRHl2qgdWCyp6UEyxJmN8Y5UgO2t6E2zeZx9vYqJnycOni5EGZLwnWIHTEr4XB8xmY.jpg',
    caption: 'Названы первые члены Зала славы АПЛ - Спорт Mail.ru\n' +
      '<a href="https://sportmail.ru/news/football-foreign/46097936/">Sportmail.ru</a>'
  },
  {
    immage: 'https://icdn.lenta.ru/images/2021/04/26/12/20210426122303318/share_e2d3df9d56b0b4ff90d16d550408f6f4.jpg',
    caption: 'Сломавший ногу о соперника бывший чемпион UFC перенес операцию - Lenta.ru\n' +
      '<a href="https://lenta.ru/news/2021/04/26/operation/">Lenta</a>'
  },
  {
    immage: 'https://s-cdn.sportbox.ru/images/shares/1200x600/node/73/1344737.jpg',
    caption: 'Карацев снялся с турнира ATP в Мюнхене. Теннис - news.Sportbox.ru\n' +
      '<a href="https://news.sportbox.ru/Vidy_sporta/Tennis/ATP/spbnews_NI1344737_Karacev_snalsa_s_turnira_ATP_v_Munkhene">Sportbox.ru</a>'
  },
  {
    immage: 'https://resizer.mail.ru/p/4dc54683-8bcd-5020-9e18-743241c1784c/op:40/logo:bottom:sport.png/ot:0J3QsNC00LDQu9GMINGB0LzQtdGB0YLQuNC7INCc0LXQtNCy0LXQtNC10LLQsCDRgdC-INCy0YLQvtGA0L7QuSDRgdGC0YDQvtGH0LrQuCDQvNC40YDQvtCy0L7Qs9C-INGA0LXQudGC0LjQvdCz0LA/AQAGMCBSXWohFhRKts-jLJkPBPtdjY_ubkC_qPkHMTuUtifJRvvCVy8APUAt67gu0iuc0MgEx1fln492zOQWHZsfP2o.jpg',
    caption: 'Надаль сместил Медведева со второй строчки мирового рейтинга - Спорт Mail.ru\n' +
      '<a href="https://sportmail.ru/news/tennis/46096366/">Sportmail.ru</a>'
  },
  {
    immage: 'https://icdn.lenta.ru/images/2021/04/26/11/20210426112008953/share_47dc4c45c3a1bdbffcc815c0593c3bb3.jpg',
    caption: 'Третьяк рассказал о неправильном использовании Овечкина в сборной России - Lenta.ru\n' +
      '<a href="https://lenta.ru/news/2021/04/26/nevernaya/">Lenta</a>'
  },
  {
    immage: 'https://s0.rbk.ru/v6_top_pics/media/img/3/45/756194268473453.jpg',
    caption: 'Норвежский лыжник рассказал об обвинениях в педофилии со стороны россиян - РБК Спорт\n' +
      '<a href="https://sportrbc.ru/news/60867dc29a79477776032473">Sportrbc.ru</a>'
  },
  {
    immage: 'https://img-sport.business-gazeta.ru/images/1b/5aa293-ac1d78.jpg',
    caption: 'Эмиль Гарипов: «Из «Ак Барса» мне никто предложений не делал!» - БИЗНЕС Online\n' +
      '<a href="https://sport.business-gazeta.ru/news/264415">Business-gazeta.ru</a>'
  },
  {
    immage: 'https://img.championat.com/news2/social/e/57/4332255.jpg',
    caption: 'Костылев: ЦСКА получил оплеухи в матче со «Спартаком». Не надо было увольнять Гончаренко - Чемпионат\n' +
      '<a href="https://www.championat.com/football/news-4332255-kostylev-cska-poluchil-opleuhi-v-matche-so-spartakom-ne-nado-bylo-uvolnyat-goncharenko.html">Championat.com</a>'
  },
  {
    immage: 'https://img.championat.com/news2/social/a/26/4332259.jpg',
    caption: 'VG сравнила бюджеты сборных России и Норвегии по лыжным гонкам - Чемпионат\n' +
      '<a href="https://www.championat.com/skiing/news-4332259-vg-sravnila-byudzhety-sbornyh-rossii-i-norvegii-po-lyzhnym-gonkam.html">Championat.com</a>'
  },
  {
    immage: 'https://resizer.mail.ru/p/232a93b5-f563-586e-b6fc-b3837ee0187c/op:40/logo:bottom:sport.png/ot:0JrRg9C00LXRgNC80LXRgtC-0LLQsCDQv9C-0LTQvdGP0LvQsNGB0Ywg0L3QsCDQvtC00L3RgyDQv9C-0LfQuNGG0LjRjiDQsiDRgNC10LnRgtC40L3Qs9C1INCW0LXQvdGB0LrQvtC5INGC0LXQvdC90LjRgdC90L7QuSDQsNGB0YHQvtGG0LjQsNGG0LjQuA/AQAGRfO5oqPlmEKvA_9bqPCjhlxhBxXi-bMA_iqqysh1mbJ9LjHCkWV2u2YmHkDiBD8-uucFEGv0BZjODiMSmT2j4h8.jpg',
    caption: 'Кудерметова поднялась на одну позицию в рейтинге Женской теннисной ассоциации - Спорт Mail.ru\n' +
      '<a href="https://sportmail.ru/news/tennis/46095721/">Sportmail.ru</a>'
  },
  {
    immage: 'https://img.championat.com/news2/social/5/c5/4332243.jpg',
    caption: 'Голкипер системы «Монреаля» Василий Демченко близок к продолжению карьеры в «Авангарде» - Чемпионат\n' +
      '<a href="https://www.championat.com/hockey/news-4332243-golkiper-sistemy-monrealya-vasilij-demchenko-blizok-k-prodolzheniyu-karery-v-avangarde.html">Championat.com</a>'
  },
  {
    immage: 'https://s-cdn.sportbox.ru/images/shares/1200x600/node/5c/1344734.jpg',
    caption: '«Динамо» обратилось в ЭСК РФС из-за двух эпизодов матча с «Химками» - news.Sportbox.ru\n' +
      '<a href="https://news.sportbox.ru/Vidy_sporta/Futbol/Russia/premier_league/spbnews_NI1344734_Dinamo_obratilos_v_ESK_RFS_iz_za_dvuh_epizodov_matcha_s_Khimkami">Sportbox.ru</a>'
  },
  {
    immage: 'https://news.mail.ru/social_preview/46093641/sport/?time=69f394288ff7f1726178305fbd3ca193',
    caption: 'UFC 261: Три боя за титул, три нокаута - Спорт Mail.ru\n' +
      '<a href="https://sportmail.ru/article/mma/46093641/">Sportmail.ru</a>'
  },
  {
    immage: 'https://radiokp.ru/modules/custom/kp_favicon/img/site-image-512x512.png?v=1.1',
    caption: '«Идеальна»: олимпийская чемпионка Тиманина показала топлес-фото - РАДИО «КОМСОМОЛЬСКАЯ ПРАВДА»\n' +
      '<a href="https://radiokp.ru/tags/anzhelika-timanina">Radiokp.ru</a>'
  },
  {
    immage: 'https://ss.sport-express.ru/userfiles/materials/167/1671077/large.jpg',
    caption: 'Миранчук забил, но главный герой «Аталанты» — Малиновский.\n' +
      '       Украинец разрывает серию А - Спорт-Экспресс\n' +
      '<a href="https://www.sport-express.ru/football/italy/reviews/kak-aleksey-miranchuk-igraet-za-atalantu-kak-ruslan-malinovskiy-stal-liderom-atalanty-seriya-a-1782608/">Sport-express.ru</a>'
  }
];


const obj1 = {
  otvet: [
    {
      nameResourse: 'Sport.ua',
      author: null,
      zagolovok: 'Олександр ДЕНИСОВ: «Чорна смуга Шахтаря виглядає безмежною» - Спорт.ua',
      linkArticle: 'https://sport.ua/uk/news/535084-aleksandr-denisov-chernaya-polosa-shahtera-vyglyadit-bezgranichnoy',
      immageUrl: 'https://pic.sport.ua/images/news/0/13/75/social_535084.jpg',
      dataPublished: '2021-04-26T11:05:00Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: null,
      zagolovok: 'ЛЕОНЕНКО: «Футболісти Шахтаря вже розуміють, що Каштру в команді не буде» - Спорт.ua',
      linkArticle: 'https://sport.ua/uk/news/535078-leonenko-futbolisty-shahtera-uzhe-ponimayut-chto-kashtru-v-komande-ne-budet',
      immageUrl: 'https://pic.sport.ua/images/news/0/13/75/social_535078.jpg',
      dataPublished: '2021-04-26T10:16:00Z'
    },
    {
      nameResourse: 'Footballhub.com.ua',
      author: 'Новак Олександр',
      zagolovok: 'Поки Динамо святкує – він продовжує забивати! Орендований у киян гравець тягне свою команду. ВІДЕО - FootballHub',
      linkArticle: 'https://footballhub.com.ua/poky-dynamo-svyatkuye-vin-prodovzhuye-zabyvaty-orendovanyj-u-kyyan-gravets-tyagne-svoyu-komandu-video/',
      immageUrl: 'https://footballhub.com.ua/footballhub-static/2021/02/Sol_gol_Rajo-Valyekano_-scaled.jpg',
      dataPublished: '2021-04-26T08:09:31Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: null,
      zagolovok: 'КУРЙОЗ ДНЯ. Трофей Євро-2020 впав на землю у прямому ефірі - Спорт.ua',
      linkArticle: 'https://sport.ua/uk/news/535058-kuryez-dnya-trofey-evro-2020-upal-na-zemlyu-v-pryamom-efire',
      immageUrl: 'https://pic.sport.ua/images/news/0/13/75/social_535058.jpg',
      dataPublished: '2021-04-26T07:59:00Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: 'Алексей Коляго',
      zagolovok: 'Суперліга. Круте піке Дніпра, відомі всі учасники плей-оф, Київ-Баскет - Спорт.ua',
      linkArticle: 'https://sport.ua/uk/news/535057-superliga-krutoe-pike-dnepra-izvestny-vse-uchastniki-pley-off',
      immageUrl: 'https://pic.sport.ua/images/news/0/13/75/social_535057.jpg',
      dataPublished: '2021-04-26T07:53:00Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: null,
      zagolovok: 'Гей-паради - це круто. Сеньків жорстко відповів Костишину - Спорт.ua',
      linkArticle: 'https://sport.ua/uk/news/535051-gey-parady-eto-kruto-senkiv-zhestko-otvetil-kostyshinu',
      immageUrl: 'https://pic.sport.ua/images/news/0/13/75/social_535051.jpg',
      dataPublished: '2021-04-26T07:24:00Z'
    },
    {
      nameResourse: 'Www.032.ua',
      author: null,
      zagolovok: '«Карпати» не витримали натиску «Епіцентру», - ФОТО, ВІДЕО - 032.ua - Новини Львова',
      linkArticle: 'https://www.032.ua/news/3086557/karpati-ne-vitrimali-natisku-epicentru-foto-video',
      immageUrl: 'https://s.032.ua/section/newsIcon/upload/images/news/icon/000/053/364/17752832717646573903806517548954138437951515n_608665da89fef.jpg',
      dataPublished: '2021-04-26T07:07:00Z'
    },
    {
      nameResourse: 'Ua-football.com',
      author: 'Влад Петрушевский',
      zagolovok: '"Він пручався, але знайшов свою позицію". Гасперіні – про прогрес Маліновського в Аталанті - UA-Футбол',
      linkArticle: 'https://www.ua-football.com/ua/foreign/italy/1619419186-vin-pruchavsya-ale-znayshov-svoyu-poziciyu-gasperini-pro-progres-malinovskogo-v-atalanti.html',
      immageUrl: 'https://static.ua-football.com/img/upload/20/28dea2.jpeg',
      dataPublished: '2021-04-26T07:02:00Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: null,
      zagolovok: 'ТаТоТаке. Луческу треба валити, чемпіонство Динамо - не подія - Спорт.ua',
      linkArticle: 'https://sport.ua/uk/news/535050-tatotake-luchesku-nado-valit-chempionstvo-dinamo-ne-sobytie',
      immageUrl: 'https://pic.sport.ua/images/news/0/13/75/social_535050.jpg',
      dataPublished: '2021-04-26T06:58:00Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: null,
      zagolovok: 'Рейтинг ATP. Надаль знову другий, Ваншельбойм оновив особистий рекорд - Спорт.ua',
      linkArticle: 'https://sport.ua/uk/news/535047-reyting-atp-nadal-snova-vtoroy-vanshelboym-obnovil-lichniy-rekord',
      immageUrl: 'https://pic.sport.ua/images/news/0/13/75/social_535047.jpg',
      dataPublished: '2021-04-26T06:53:00Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: null,
      zagolovok: 'Рейтинг WTA. Новий рекорд Костюк, Соболєва розпочинає підйом - Спорт.ua',
      linkArticle: 'https://sport.ua/uk/news/535044-reyting-wta-noviy-rekord-kostyuk-soboleva-nachinaet-podem',
      immageUrl: 'https://pic.sport.ua/images/news/0/13/75/social_535044.jpg',
      dataPublished: '2021-04-26T06:30:00Z'
    },
    {
      nameResourse: 'Sport.ua',
      author: null,
      zagolovok: 'ЛУЧЕСКУ - про Де Дзербі в Шахтарі: «Я був би щасливий» - Спорт.ua',
      linkArticle: 'https://sport.ua/uk/news/535045-luchesku-o-de-dzerbi-v-shahtere-ya-byl-by-schastliv',
      immageUrl: 'https://pic.sport.ua/images/news/0/13/75/social_535045.jpg',
      dataPublished: '2021-04-26T06:10:00Z'
    },
    {
      nameResourse: 'Football24.ua',
      author: 'football24.ua',
      zagolovok: 'Президент Динамо Ігор Суркіс розповів про селекційні плани клубу у літнє міжсезоння.\n' +
        '"Я це ще не обговорював. У нас буде час. Основне завдання виконано, будемо спілкуватися. Луческу скаже про свої побажання. Селекціонери скажуть, що вони напрацювали – підійде йому чи ні.\n' +
        'Минулого сезону, коли у нас було вісім здорових футболістів, я пропонував Луческу придбати або терміново взяти в оренду якогось досвідченого футболіста. Було кілька кандидатур, які він переглянув і відхилив. Сказав, що хлопці в нього вірять, що він бачить це на тренуваннях і повірить їм в надії, що вони не підведуть.\n' +
        'Це говорить про колосальний досвід Луческу, який він накопичив протягом свого життя. Він вселив гравцям, що можна перемагати. Ми перестали втрачати очки там, де ми їх завжди втрачали. Налаштовуватися на два матчі проти Шахтаря в році можна. Це подразник. А налаштовуватися на такі команди, як Інгулець так, щоб у мене не вилітало серце і до 15-ї хвилині вести 2:0 – це мені вже подобається. Сподіваюся, що наступного сезону це буде продовжуватися", – сказав Суркіс в ефірі "Великого футболу".\n' +
        'Нагадаємо, Динамо напередодні розгромило Інгулець з рахунком 5:0 і достроково стало чемпіоном України. Після 23-х турів кияни випереджають Шахтар на 13 пунктів.',
      linkArticle: 'https://football24.ua/surkis__pro_potentsiyni_transferi_dinamo_luchesku_skazhe_pro_svoyi_pobazhannya_n660506/',
      immageUrl: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660506.jpg',
      dataPublished: '2021-04-26T11:05:14Z'
    },
    {
      nameResourse: 'Football24.ua',
      author: 'football24.ua',
      zagolovok: 'Хавбек Олександрії Дмитро Гречишкін продемонстрував могутність свого удару – позаздрить навіть Роберто Карлос.\n' +
        'Наприкінці першого тайму матчу 23-го туру УПЛ Олександрія заробила право на пенальті – Тете зіграв рукою в карному майданчику, і арбітр після перегляду VAR вказав на позначку.\n' +
        "Гречишкін досить впевнено пробив у кут, хоча здалось, що м'яч пролетів повз. Насправді ж хавбек своїм могутнім ударом примудрився прошити сітку воріт. Цікаво, що свою ігрову кар'єру Дмитро розпочинав саме у складі Шахтаря.\n" +
        'До слова, цей гол допоміг Олександрії обіграти "гірників" із рахунком 2:0 – другий гол в активі Шастала. Таким чином, підопічні Шарана вперше обіграли Шахтар на своєму полі та залишились на сьомій сходинці з 29 пунктами в активі.\n' +
        ' \n',
      linkArticle: 'https://football24.ua/grechishkin_udarom_z_penalti_porvav_sitku_vorit_shahtarya__video_garmatnogo_postrilu_n660452/',
      immageUrl: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660452.jpg',
      dataPublished: '2021-04-26T10:12:56Z'
    },
    {
      nameResourse: 'Football24.ua',
      author: 'football24.ua',
      zagolovok: 'Головний тренер Реала Зінедін Зідан поспілкувався з журналістами напередодні першого матчу 1/2 фіналу ЛЧ проти Челсі.\n' +
        '"Ми добре підготувались. Хочемо продемонструвати свої найкращі якості. Найважливіша гра? Кожен наступний матч – найважливіший, це черговий фінал.\n' +
        'Мадрид дискваліфікують з ЛЧ? Абсурд. Зараз багато про це говориться, але нас не хвилюють спекуляції. Ми готуємось до Челсі, і будемо брати участь в наступній ЛЧ. Ось що я думаю. Ми повинні виконувати наші прямі обов’язки – виходити на поле і конкурувати. Можливе упередження з боку арбітрів через Суперлігу? Якщо будемо думати про ці речі, то збожеволіємо. Це нісенітниці.\n' +
        'Так, Челсі добре захищається, але я не вважаю, що це закрита команда. Челсі – збалансований. Вони вміють абсолютно все – і оборонятися, і атакувати. У нас немає пріоритетного турніру.\n' +
        'Ми боремося за усі трофеї попри очевидні труднощі, зокрема, насичений календар. Челсі та Мадрид заслужено пробилися до півфіналу. Так, ми володіємо величезним досвідом схожих матчів, але те саме можна сказати про Челсі. До початку гри у обох команд шанси рівні.\n' +
        'Азар? Він почувається дуже добре. Ми розраховуємо на нього. Азар значно розширює можливості команди. 15 хвилин проти Бетіса додали йому впевненості. Кроос готовий зіграти завтра, Менді – ні.\n' +
        'Мене не бачили в Реалі після поразок від Шахтаря? Такі розмови завжди трапляються. Це доля тренера. Зараз я сконцентрований лише на Челсі", – сказав Зідан.',
      linkArticle: 'https://football24.ua/zidan_ziznavsya_yak_spriynyav_shkval_kritiki_pislya_porazok_vid_shahtarya_n660498/',
      immageUrl: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660498.jpg',
      dataPublished: '2021-04-26T09:58:02Z'
    },
    {
      nameResourse: 'Football24.ua',
      author: 'football24.ua',
      zagolovok: 'Виявляється, навіть між потенційними учасниками Суперліги не було єдності. \n' +
        'Як відомо, про створення Суперліги оголосили 12 клубів (список засновників пізніше мав би розширитися до 15), але не всім подобалася присутність серед постійних членів мадридського Атлетіко.\n' +
        'За інформацією Cadena SER, представники АПЛ були проти участі в проекті "матрацників". Причиною такого ставлення стали низькі рейтинги Атлетіко на медіаринку, а також мала кількість підписників у соцмережах. Вважається, що за таких умов мадридці більше отримають, ніж зможуть дати Суперлізі.\n' +
        'До слова, наразі через гнівну реацію УЄФА та уболівальників більшість клубів-засновників Суперліги оголосили про наміри покинути організацію. Мілан, Ювентус, Барселона та Реал все ще залишаються у проекті.',
      linkArticle: 'https://football24.ua/klubi_apl_buli_proti_uchasti_atletiko_v_superlizi__nefutbolna_prichina_n660494/',
      immageUrl: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660494.jpg',
      dataPublished: '2021-04-26T09:28:32Z'
    },
    {
      nameResourse: 'Football24.ua',
      author: 'football24.ua',
      zagolovok: 'Головний тренер Лілля Крістоф Гальтьє не стримував емоцій після матчу 34-го туру Ліги 1 проти Ліона (3:2).\n' +
        `"Доги" ведуть боротьбу за чемпіонство, випереджаючи ПСЖ лише на одне очко. Відтак потрібно лише перемагати. Ліон упродовж матчу вів у рахунку з перевагою у два м'ячі, але Лілль зумів здійснити камбек і врятувати лідерство у Лізі 1.\n` +
        'Такий напружений сценарій нікого не може залишити байдужим, а безпосередніх учасників матчу і поготів. Крістоф Гальтьє після фінального свистка ледве контролював себе, а його святкування стало вірусним. На радощах 54-річний фахівець продемонстрував, що навіть елементи із гімнастики йому під силу.\n' +
        'Додамо, що за чотири тури до завершення чемпіонату Франції Лілль очолює турнірну таблицю, маючи одне очко переваги над ПСЖ. "Догам" належить зіграти проти Ніцци, Анже, Ланса та Сент-Етьєна.',
      linkArticle: 'https://football24.ua/peredchuttya_chempionstva_znosit_dah__nastavnik_lillya_bozhevilno_vidsvyatkuvav_shalenu_peremogu_nad_lionom_n660476/',
      immageUrl: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660476.jpg',
      dataPublished: '2021-04-26T08:03:06Z'
    },
    {
      nameResourse: 'Football24.ua',
      author: 'football24.ua',
      zagolovok: "Люксембурзький легіонер Динамо Жерсон Родрігес після завершення кар'єри футболіста цілком може проявити себе у якості інтерв'юера. \n" +
        "Як відомо, напередодні Динамо розгромило Інгулець з рахунком 5:0 і достроково завоювало золоті медалі української Прем'єр-ліги. Емоції після здобуття омріяного трофею кожен проявляв по-різному.\n" +
        "Форвард киян Жерсон Родрігес вирішив відчути себе акулою пера, і озброївшись мікрофоном на чемпіонському святкуванні в роздягальні киян особисто взяв інтерв'ю у всієї команди!\n" +
        'Люксембуржець спілкувався з партнерами різними мовами, жартував і продемонстрував, що він талановитий не лише на футбольному полі, а й поза ним.\n' +
        'Нагадаємо, за три тури до фінішу Динамо у турнірній таблиці УПЛ випереджає Шахтар на 13 пунктів.',
      linkArticle: 'https://football24.ua/zherson_sprobuvav_sebe_u_roli_zhurnalista_pislya_zavoyuvannya_chempionstva_z_dinamo__atmosferne_video_n660468/',
      immageUrl: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660468.jpg',
      dataPublished: '2021-04-26T07:17:12Z'
    },
    {
      nameResourse: 'Football24.ua',
      author: 'football24.ua',
      zagolovok: 'Раян Мейсон допрацює нинішній сезон, після чого Тоттенхем планує призначити більш досвідченого фахівця.\n' +
        '"Шпори" не стали шукати постійного тренера відразу після звільнення Жозе Моурінью, довіривши команду 29-річному Мейсону. Однак новий сезон лондонці планують розпочати на чолі з іменитим фахівцем.\n' +
        'Тоттенхем уже окреслив для себе коло бажаних кандидатів. Стівена Джеррарда, про якого була мова раніше, там немає. Натомість клубу імпонують Юліан Нагельсманн (РБ Лейпциг), Брендан Роджерс (Лестер), Марселіно Тораль (Атлетік Більбао) та Роберто Мартінес (збірна Бельгії), стверджує журналіст Ніколо Скіра.\n' +
        'Зазначається, що пріоритетним варіантом став 33-річний Нагельсманн, але здійснити це призначення буде вкрай складно. По-перше, його контракт з РБ Лейпциг діє ще два роки. По-друге, на молодого фахівця серйозно претендує Баварія. По-третє, "бики" нібито готові відпустити тренера лише після виплати компенсації, яка становить 30 млн євро.',
      linkArticle: 'https://football24.ua/tottenhem_obrav_chotiroh_kandidativ_na_zaminu_mourinyu__bez_dzherrarda_ale_zi_sproboyu_zipsuvati_plani_bavariyi_n660469/',
      immageUrl: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660469.jpg',
      dataPublished: '2021-04-26T07:05:17Z'
    },
    {
      nameResourse: 'Football24.ua',
      author: 'football24.ua',
      zagolovok: 'Глава Комітету збірних команд УАФ Мирон Mаркевич прокоментував дострокове завоювання Динамо чемпіонського звання.\n' +
        '"На жаль, як і минулого року, інтрига у боротьбі за "золото" зникла задовго до фінішу. Думаю, що Шахтар змирився з втратою чемпіонського титулу після поразки від Львова ще у 19-му турі.\n' +
        'На мій погляд, було б неправильно у всьому звинувачувати головного тренера Луїша Каштру. Тут очевидне недопрацювання усіх клубних структур. А те, що всередині команди є вразливі місця, підтвердив календарний поєдинок з Олександрією – давно я не бачив Шахтар таким безпорадним на всеукраїнській арені.\n' +
        `Що стосується київського Динамо, то його зліт – заслужений. Після появи біля керма досвідченого Мірчі Луческу "біло-сині" порадували згуртованістю, а завдяки високій ігровій дисципліні не дозволяли собі тринькати очки в матчах з менш іменитими командами, чим у попередні роки часто грішили. І, вітаючи динамівців з поверненням на трон, бажаю, щоб вони стали конкурентоспроможними у Лізі чемпіонів. Для цього їм необхідно обов'язково підсилитися трьома-чотирма дуже серйозними виконавцями. Гравців такого рівня в Україні просто немає, тому потрібно кликати на допомогу легіонерів", – сказав Маркевич у коментарі Meta Ratings.\n` +
        'Нагадаємо, Динамо напередодні розгромило Інгулець з рахунком 5:0 і достроково стало чемпіоном України. Натомість Шахтар у матчі з Олександрією несподівано поступився 0:2. Після 23-х турів кияни випереджають "гірників" вже на 13 пунктів.',
      linkArticle: 'https://football24.ua/davno_ya_ne_bachiv_shahtartakim_bezporadnim_markevich_dva_vazhlivu_poradu_dinamo_pislya_zavoyuvannya_chempionstva_n660463/',
      immageUrl: 'https://football24.ua/resources/photos/news/600x315_DIR/202104/660463.jpg',
      dataPublished: '2021-04-26T06:51:09Z'
    },
    {
      nameResourse: 'Championat.com',
      author: 'Чемпионат',
      zagolovok: 'Онопко: Ахметову надо было дать жёлтую карточку, а не красную. Карасёв подвел Кукуяна - Чемпионат',
      linkArticle: 'https://www.championat.com/football/news-4332407-onopko-ahmetovu-nado-bylo-dat-zhyoltuyu-kartochku-a-ne-krasnuyu-karasyov-podvel-kukuyana.html',
      immageUrl: 'https://img.championat.com/news2/social/b/93/4332407.jpg',
      dataPublished: '2021-04-26T11:56:48Z'
    },
    {
      nameResourse: 'Sports.ru',
      author: null,
      zagolovok: 'Нагельсманн согласился возглавить «Баварию». Мюнхенцы ведут переговоры с «Лейпцигом» - Sports.ru',
      linkArticle: 'https://www.sports.ru/football/1096495562-nagelsmann-soglasilsya-vozglavit-bavariyu-myunxenczy-vedut-peregovory-.html',
      immageUrl: 'https://www.sports.ru/dynamic_images/news/109/649/556/2/share/5b0d5e.jpg',
      dataPublished: '2021-04-26T11:43:00Z'
    },
    {
      nameResourse: 'Sportmail.ru',
      author: 'Спорт Mail.ru',
      zagolovok: 'В Испании умер 20-летний футболист Луис Охеда Суарес - Спорт Mail.ru',
      linkArticle: 'https://sportmail.ru/news/football-foreign/46099144/',
      immageUrl: 'https://resizer.mail.ru/p/3528056b-0fbd-5b1e-9275-5b98a6a0c5b4/op:40/logo:bottom:sport.png/ot:0JIg0JjRgdC_0LDQvdC40Lgg0YPQvNC10YAgMjAt0LvQtdGC0L3QuNC5INGE0YPRgtCx0L7Qu9C40YHRgiDQm9GD0LjRgSDQntGF0LXQtNCwINCh0YPQsNGA0LXRgQ/AQAGaSgV3zA3VOPqLWiVB3kH-ciNxnd5tkrzNT0-9YJRzuZ8mHZ5j4S6SOH0CUyaOH1lBYGQZyVMO1kJUX1YHTgXFKY.jpg',
      dataPublished: '2021-04-26T11:18:54Z'
    },
    {
      nameResourse: 'Championat.com',
      author: 'Чемпионат',
      zagolovok: `Дмитрий Губерниев отреагировал на свадебное фото Александра Большунова и Анны Жеребятьевой
       - Чемпионат`,
      linkArticle: 'https://www.championat.com/skiing/news-4332329-dmitrij-guberniev-otreagiroval-na-svadebnoe-foto-aleksandra-bolshunova-i-anny-zherebyatevoj.html',
      immageUrl: 'https://img.championat.com/news2/social/1/2d/4332329.jpg',
      dataPublished: '2021-04-26T10:40:31Z'
    },
    {
      nameResourse: 'Sportmail.ru',
      author: 'Спорт Mail.ru',
      zagolovok: 'Названы первые члены Зала славы АПЛ - Спорт Mail.ru',
      linkArticle: 'https://sportmail.ru/news/football-foreign/46097936/',
      immageUrl: 'https://resizer.mail.ru/p/27b0335d-f869-5655-9921-f1801cc32455/op:40/logo:bottom:sport.png/ot:0J3QsNC30LLQsNC90Ysg0L_QtdGA0LLRi9C1INGH0LvQtdC90Ysg0JfQsNC70LAg0YHQu9Cw0LLRiyDQkNCf0Js/AQAGCvV4RvEeaqLBh00LJk8_VjRHl2qgdWCyp6UEyxJmN8Y5UgO2t6E2zeZx9vYqJnycOni5EGZLwnWIHTEr4XB8xmY.jpg',
      dataPublished: '2021-04-26T10:09:37Z'
    },
    {
      nameResourse: 'Lenta',
      author: null,
      zagolovok: 'Сломавший ногу о соперника бывший чемпион UFC перенес операцию - Lenta.ru',
      linkArticle: 'https://lenta.ru/news/2021/04/26/operation/',
      immageUrl: 'https://icdn.lenta.ru/images/2021/04/26/12/20210426122303318/share_e2d3df9d56b0b4ff90d16d550408f6f4.jpg',
      dataPublished: '2021-04-26T10:04:00Z'
    },
    {
      nameResourse: 'Sportbox.ru',
      author: null,
      zagolovok: 'Карацев снялся с турнира ATP в Мюнхене. Теннис - news.Sportbox.ru',
      linkArticle: 'https://news.sportbox.ru/Vidy_sporta/Tennis/ATP/spbnews_NI1344737_Karacev_snalsa_s_turnira_ATP_v_Munkhene',
      immageUrl: 'https://s-cdn.sportbox.ru/images/shares/1200x600/node/73/1344737.jpg',
      dataPublished: '2021-04-26T09:30:17Z'
    },
    {
      nameResourse: 'Sportmail.ru',
      author: 'Спорт Mail.ru',
      zagolovok: 'Надаль сместил Медведева со второй строчки мирового рейтинга - Спорт Mail.ru',
      linkArticle: 'https://sportmail.ru/news/tennis/46096366/',
      immageUrl: 'https://resizer.mail.ru/p/4dc54683-8bcd-5020-9e18-743241c1784c/op:40/logo:bottom:sport.png/ot:0J3QsNC00LDQu9GMINGB0LzQtdGB0YLQuNC7INCc0LXQtNCy0LXQtNC10LLQsCDRgdC-INCy0YLQvtGA0L7QuSDRgdGC0YDQvtGH0LrQuCDQvNC40YDQvtCy0L7Qs9C-INGA0LXQudGC0LjQvdCz0LA/AQAGMCBSXWohFhRKts-jLJkPBPtdjY_ubkC_qPkHMTuUtifJRvvCVy8APUAt67gu0iuc0MgEx1fln492zOQWHZsfP2o.jpg',
      dataPublished: '2021-04-26T09:20:56Z'
    },
    {
      nameResourse: 'Lenta',
      author: null,
      zagolovok: 'Третьяк рассказал о неправильном использовании Овечкина в сборной России - Lenta.ru',
      linkArticle: 'https://lenta.ru/news/2021/04/26/nevernaya/',
      immageUrl: 'https://icdn.lenta.ru/images/2021/04/26/11/20210426112008953/share_47dc4c45c3a1bdbffcc815c0593c3bb3.jpg',
      dataPublished: '2021-04-26T09:17:23Z'
    },
    {
      nameResourse: 'Sportrbc.ru',
      author: null,
      zagolovok: 'Норвежский лыжник рассказал об обвинениях в педофилии со стороны россиян - РБК Спорт',
      linkArticle: 'https://sportrbc.ru/news/60867dc29a79477776032473',
      immageUrl: 'https://s0.rbk.ru/v6_top_pics/media/img/3/45/756194268473453.jpg',
      dataPublished: '2021-04-26T09:14:07Z'
    },
    {
      nameResourse: 'Business-gazeta.ru',
      author: null,
      zagolovok: 'Эмиль Гарипов: «Из «Ак Барса» мне никто предложений не делал!» - БИЗНЕС Online',
      linkArticle: 'https://sport.business-gazeta.ru/news/264415',
      immageUrl: 'https://img-sport.business-gazeta.ru/images/1b/5aa293-ac1d78.jpg',
      dataPublished: '2021-04-26T09:13:26Z'
    },
    {
      nameResourse: 'Championat.com',
      author: 'Чемпионат',
      zagolovok: 'Костылев: ЦСКА получил оплеухи в матче со «Спартаком». Не надо было увольнять Гончаренко - Чемпионат',
      linkArticle: 'https://www.championat.com/football/news-4332255-kostylev-cska-poluchil-opleuhi-v-matche-so-spartakom-ne-nado-bylo-uvolnyat-goncharenko.html',
      immageUrl: 'https://img.championat.com/news2/social/e/57/4332255.jpg',
      dataPublished: '2021-04-26T09:11:35Z'
    },
    {
      nameResourse: 'Championat.com',
      author: 'Чемпионат',
      zagolovok: 'VG сравнила бюджеты сборных России и Норвегии по лыжным гонкам - Чемпионат',
      linkArticle: 'https://www.championat.com/skiing/news-4332259-vg-sravnila-byudzhety-sbornyh-rossii-i-norvegii-po-lyzhnym-gonkam.html',
      immageUrl: 'https://img.championat.com/news2/social/a/26/4332259.jpg',
      dataPublished: '2021-04-26T09:10:00Z'
    },
    {
      nameResourse: 'Sportmail.ru',
      author: 'Спорт Mail.ru',
      zagolovok: 'Кудерметова поднялась на одну позицию в рейтинге Женской теннисной ассоциации - Спорт Mail.ru',
      linkArticle: 'https://sportmail.ru/news/tennis/46095721/',
      immageUrl: 'https://resizer.mail.ru/p/232a93b5-f563-586e-b6fc-b3837ee0187c/op:40/logo:bottom:sport.png/ot:0JrRg9C00LXRgNC80LXRgtC-0LLQsCDQv9C-0LTQvdGP0LvQsNGB0Ywg0L3QsCDQvtC00L3RgyDQv9C-0LfQuNGG0LjRjiDQsiDRgNC10LnRgtC40L3Qs9C1INCW0LXQvdGB0LrQvtC5INGC0LXQvdC90LjRgdC90L7QuSDQsNGB0YHQvtGG0LjQsNGG0LjQuA/AQAGRfO5oqPlmEKvA_9bqPCjhlxhBxXi-bMA_iqqysh1mbJ9LjHCkWV2u2YmHkDiBD8-uucFEGv0BZjODiMSmT2j4h8.jpg',
      dataPublished: '2021-04-26T09:08:10Z'
    },
    {
      nameResourse: 'Championat.com',
      author: 'Чемпионат',
      zagolovok: 'Голкипер системы «Монреаля» Василий Демченко близок к продолжению карьеры в «Авангарде» - Чемпионат',
      linkArticle: 'https://www.championat.com/hockey/news-4332243-golkiper-sistemy-monrealya-vasilij-demchenko-blizok-k-prodolzheniyu-karery-v-avangarde.html',
      immageUrl: 'https://img.championat.com/news2/social/5/c5/4332243.jpg',
      dataPublished: '2021-04-26T08:59:30Z'
    },
    {
      nameResourse: 'Sportbox.ru',
      author: null,
      zagolovok: '«Динамо» обратилось в ЭСК РФС из-за двух эпизодов матча с «Химками» - news.Sportbox.ru',
      linkArticle: 'https://news.sportbox.ru/Vidy_sporta/Futbol/Russia/premier_league/spbnews_NI1344734_Dinamo_obratilos_v_ESK_RFS_iz_za_dvuh_epizodov_matcha_s_Khimkami',
      immageUrl: 'https://s-cdn.sportbox.ru/images/shares/1200x600/node/5c/1344734.jpg',
      dataPublished: '2021-04-26T08:59:05Z'
    },
    {
      nameResourse: 'Sportmail.ru',
      author: 'Спорт Mail.ru',
      zagolovok: 'UFC 261: Три боя за титул, три нокаута - Спорт Mail.ru',
      linkArticle: 'https://sportmail.ru/article/mma/46093641/',
      immageUrl: 'https://news.mail.ru/social_preview/46093641/sport/?time=69f394288ff7f1726178305fbd3ca193',
      dataPublished: '2021-04-26T08:57:24Z'
    },
    {
      nameResourse: 'Radiokp.ru',
      author: 'АО «ИЗДАТЕЛЬСКИЙ ДОМ «КОМСОМОЛЬСКАЯ ПРАВДА».',
      zagolovok: '«Идеальна»: олимпийская чемпионка Тиманина показала топлес-фото - РАДИО «КОМСОМОЛЬСКАЯ ПРАВДА»',
      linkArticle: 'https://radiokp.ru/tags/anzhelika-timanina',
      immageUrl: 'https://radiokp.ru/modules/custom/kp_favicon/img/site-image-512x512.png?v=1.1',
      dataPublished: '2021-04-26T08:24:00Z'
    },
    {
      nameResourse: 'Sport-express.ru',
      author: 'Отдел футбола «СЭ»',
      zagolovok: `Миранчук забил, но главный герой «Аталанты» — Малиновский.
       Украинец разрывает серию А - Спорт-Экспресс`,
      linkArticle: 'https://www.sport-express.ru/football/italy/reviews/kak-aleksey-miranchuk-igraet-za-atalantu-kak-ruslan-malinovskiy-stal-liderom-atalanty-seriya-a-1782608/',
      immageUrl: 'https://ss.sport-express.ru/userfiles/materials/167/1671077/large.jpg',
      dataPublished: '2021-04-26T08:15:00Z'
    }
  ],
  chatId: '594504840'
};


testModificationObj(obj1, arr1);
