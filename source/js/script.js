document.querySelector('body').classList.remove('no-js'); //ну или какой-там у тебя класс

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var modal = document.querySelector('.modal');
var modalBtn = document.querySelector('.modal-js');
var modalBackground = document.querySelector('.modal-background');

//navMain.classList.remove('main-nav--nojs'); - это не нужно


// кнопка не на всех страницах есть, надо проверять наличие

if (modalBtn) {
    modalBtn.addEventListener('click', function() {
        if (modal.classList.remove('modal-close'));
        if (modalBackground.classList.remove('modal-close'));
    });
}

// модалка не на всех страницах есть, надо проверять наличие

if (modal) {
    modalBackground.addEventListener('click', function() {
        if (modal.classList.add('modal-close'));
        if (modalBackground.classList.add('modal-close'));
    });
}

navToggle.addEventListener('click', function() {
if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav__toggle--opened');
} else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav__toggle--opened');
}
});
