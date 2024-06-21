$(document).ready(function() {
    var stickyOffset = 80; // Change from 62 to 64 as per your requirement

function checkScroll() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= stickyOffset) { // down state
        $('nav').css({"width": "60%", "height": "60px", "background": `${currColPallet.colNeutral}` + `ad`, "border-radius":"2px",  "border-bottom":"0px"});
        $('.hotbar_nav').css({"width": "28%"});
        $('.nav_hotbar').css({"width": "72%"});
        $('nav').css({"padding":"0 1% 0 1%"});
    } else { // up state
        $('nav').css({"width": "100%", "height": "80px", "background": `${currColPallet.colNeutral}`, "border-radius":"0px", "border-bottom":"6px solid #5945457a"});
        $('.hotbar_nav').css({"width": "22%"});
        $('.nav_hotbar').css({"width": "56%"});
        $('nav').css({"padding":"0 2% 0 2%"});
    }
}

$(window).on('scroll', checkScroll);
checkScroll(); // use on page load



})
// HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER
let themeSwitchOn = false;

const themes = {
    light: {
        navButton: "#594545",
        colDarker: "#281d16",
        colDark: "#392d26",
        colNeutral: "#815B5B",
        colLight: "#ffddcb",
        colLighter: "#ffeadf",
        globalButton: "#946e54",
        golbButtBorder: "#785740"
    },
    dark: {
        navButton: "#302222",
        colDarker: "#281c1f",
        colDark: "#2f2325",
        colNeutral: "#251716",
        colLight: "#4b3534",
        colLighter: "#372827",
        globalButton: "#553a27",
        golbButtBorder: "#4c301d"
    }
}

let currColPallet = themeSwitchOn ? themes.dark : themes.light // if true then themes.dark, if false then themes.light

$(document).ready(function() {
    applyTheme()
})


function applyTheme() {
    $('.hotbar_item').css('background', currColPallet.navButton)
    $('nav').css('background', currColPallet.colNeutral)
    $('header').css('background', currColPallet.colNeutral)
    $('.main_projects, .main_about').css('background', currColPallet.colLight)
    $('main').css('background', currColPallet.colLighter)
    $('footer').css('background', currColPallet.navButton)
    $('.button_color_pallet').css({'background': `${currColPallet.globalButton}`, "border-color": `${currColPallet.golbButtBorder}`})
    $('.contact').css({'background': `${currColPallet.colLight}`, "outline-color": `${currColPallet.colLighter}`})
    console.log(themeSwitchOn)
}
$(".theme_changer").click(function() {
    themeSwitchOn = !themeSwitchOn
    currColPallet = themeSwitchOn ? themes.dark : themes.light // wont switch back
    applyTheme()
})
$("#currThemeOff").click(function() {
    $('#currThemeOn').show()
    $('#currThemeOff').hide()
})
$("#currThemeOn").click(function() {
    $('#currThemeOn').hide()
    $('#currThemeOff').show()
})



$(".button_color_pallet").hover(function() {
    $('.button_color_pallet').css({'scale': `1.1`, "cursor": `pointer`})
})







// language change
let ua =  ["Twirbic", 
"Початок",
"Інформація",
"Роботи",
"З'єднатися", "|",
"Привіт! Мене звати Степан",
"Я здебільшого спеціалізуюся на веб-розробці та частково на JS з декількома іншими навичками розробки.",
"Гарного перегляду!",
"Про себе",
"Я Васільєв Степан, мені 16, Українець, достатньо володію українською та англійською мовами. Також я знаюсь в мові програмування JavaScript і вмію викоримтовувати HTMl CSS розом з бібліотекою jQuery. Маю змогу працювати в Sublime Text та React.",
"За своє навчання я створий велику кількість сайтів різноманітних сайтів, деякі з них були складні та корисні, а деякі прості листівки. Зазвичай сайти створені мною мали якесь значення в навчанні мови програмувіння, програми яку я використовував чи бібліотеки. ",
"Знизу зібрані одні з найкращих моїх робіт за 4 роки..",
"Проекти зроблені мною",
"Це мій перший серйозний проект який я створив. Зібраний з великою кількості різноманітної інформації яка розповідала про важливість та методи збереження природи. Проект був поставленим завданням від для навчання тому в ньому можна помітити майбутьні плани класу про допомогу природі",
`Проект складається з чотирьох старінок з можливістю переходити між ними, має головний блок "header" який присутній на всіх сторінках, та достатню кількість анімацій в сайті загалом.`,
`Ще один проект присвячений темі літака АН-27 Мрія. Цей проект був створений деякий час після знищення самого літака тому мені хотілось увіковічити деякі аспекти, заслуги та факти про Мрію.`,
`Цей проект також має при собі янімації, структуру з чотирьох сторінок і головної частини яка дозволяє переходити між ними. Також в чьому проекті я проексперементував деякі дизайнерські рішення для презентування тексту на сторінці.`,
"Ідеєю цього проекту було допомога звичайним людям та військовим при повітряних атакак та освітлиння героїв які ьрали участь в війні..",
"Данний проект складається з однієї сторінки у якій компактно складена унформація. Також в ній присутня зміна мови, теми та відправка повідомлення написаного користувачем на комп'ютері.",
`Проект з великою ідеєю під назвою "TraineeType" був створений з метою зробити повоцінний та корисний сайт для користувачів. Все на сайті було повністю номальоване з задумкою зробити щось між грубим кривим та смішним.`,
"Проект складається з чотирьох сторінок: головна де знаходитьня навігація між всіма сторінками та мотиваційна фраза дня; сторінка магазину де мозна купити за валюту та увімкнути альтернативні дизайни для певних аспектів сайту; сторінка уроків в якій можна навчатися швидкості та точності печаті та отримувати валюту за гарне виконання роботи; сторінка допомоги на якій можна відправити лист на мою пошту по бажанню",
"Надіслати листа",
"Зв'яжись за мною",
"Якщо випадково ви захочете поговорити зі мною, використовуйте цю електронну пошту/номер телефону. Або ви можете скористатися кнопкою нижче, щоб написати листа.",
"bobster666666@gmail.com",
"+380 8805552525",
"Facebook",
"Twitter",
"Instagram",
"Telegram",
"Youtube",
"Discord",
"Надіслати листа"]
let eng =  [
"Twirbic",
"Begining",
"About",
"Works",
"Contact", /* 5 */ "|",
"Greatings, my name is Stepan",
"I am mostly specializing in web development and partially JS with sprincls of other development skills.",
"Have a good time reading!",
"About myself", // 10
"I'm Vasiliev Stepan, I'm 16, Ukrainian, I speak Ukrainian and English well enough. I also know the JavaScript programming language and can use HTML CSS together with the jQuery library. I can work in Sublime Text and React.",
"During my studies I created a large number of sites of various types, some of them were complex and useful, and some were simple postcards. Usually, the sites I created had some significance in learning the programming language, the program I used, or the library.",
"Down below are some of my best works over the last 4 years.",
"Projects made by me",
"This is my first serious project that I created. Collected from a large amount of various information that talked about the importance and methods of preserving nature. The project was a task set by for education, so it can be seen in it the future plans of the class to help nature",// 15
`The project consists of four pages with the ability to switch between them, has the main "header" block that is present on all pages and a sufficient number of animations.`,
`Another project is dedicated to the AN-27 "Mriya" aircraft. This project was created some time after the destruction of the plane itself, so I wanted to immortalize some aspects, merits and facts about the "Mriya"`,
"This project also has animations, a structure of four pages and a main part that allows you to switch between them. Also, in whose project I experimented with some design solutions for presenting the text on the page.",
"This project consists of one page in which the information is compactly compiled. It also includes changing the language, topic and sending a message written by the user at the computer scren.", // 20
`The idea of this project was to help ordinary people and military during air raids and to enlighten the heroes who participated in the war.`,
`A project with a big idea called "TraineeType" was created with the goal of making a valuable and useful site for users. Everything on the site was completely normalized with the idea of doing something between gross and funny.`,
"The project consists of four pages: the main location navigation between all pages and a motivational phrase of the day; a shop page where you can buy with currency and enable alternative designs for certain aspects of the site; a page of lessons where you can learn speed and accuracy of printing and receive currency for a good job done; a help page on which you can send a letter to my mail if you wish.",
"Send a mail",
"Contact me",
"If by any chance you want to talk to me use this email/phone number. Or you can use the button below to write a letter now.", // 25
"bobster666666@gmail.com",
"+380 8805552525",
"Facebook",
"Twitter",
"Instagram", // 30
"Telegram",
"Youtube",
"Discord",
"Send a mail"] //34

let currLangUa = $("#currLanUkr")
let currLangEn = $("#currLanEn")

function enLn() {
    currLangEn.css("color", "#ffc453")
    currLangUa.css("color", "white")

    for (let i = 0; i <= 34; i++) {
        $(`.par${i + 1}`).text(eng[i])
    }
}

function ukrLn() {
    currLangEn.css("color", "white");
    currLangUa.css("color", "#ffc453")

    for (let i = 0; i <= 34; i++) {
        $(`.par${i + 1}`).text(ua[i])
    }
}

$("#currLanUkr").click(function() {
    ukrLn()
})

$("#currLanEn").click(function() {
    enLn()
})
$(document).ready(function() {
    ukrLn()
})
// language change 





// HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER
// NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV
$("#scrollToStart").click(function() {
    $('html, body').animate({
        scrollTop: $("body").offset().top
    },200)
})
$("#scrollToBegining").click(function() {
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 400)
})
$("#scrollToAbout").click(function() {
    $('html, body').animate({
        scrollTop: $("main").offset().top
    }, 400)
})
$("#scrollToWorks").click(function() {
    $('html, body').animate({
        scrollTop: $("#works_headline").offset().top - 80
    }, 400)
})

$("#scrollToContact").click(function() {
    $('html, body').animate({
        scrollTop: $("footer").offset().top
    }, 400)
})
// NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV
// MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN

// let isBlockFull = false

// // main_about
// $(".main_projects").click(function() {

// })




// MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN MAIN
// FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER



$("#mailBlockRaiser").click(function() {
    $(".contact").css({"display": "flex"})
})
$(".contact_back").click(function() {
    $(".contact").css({"display": "none"})
})
































// let facts = ["Голодеш.",
// "Щоб не рне сталось.",
// "Пишиудеш."]
// let random = Math.floor(Math.random()*(3-1+1))
// let ranfacts = document.getElementById("ranfacts")
// ranfacts.innerText = facts[random]


// $('.debugMode').click(function(){
// $('.debugMode').css({"display":"none"})
// })
// $('.debugMode_active').click(function(){
// $('.debugMode').css({"display":"block"})
// })





