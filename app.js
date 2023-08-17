const btnOrder = document.querySelector('.btn-order');
const popup = document.querySelector('.popup-block');
const popupFon = document.querySelector('.popup');
const closeBtn = document.querySelector('#close');
const body = document.querySelector('body');
const btnForm = document.querySelector('#btn-number');
const linkBooking = document.querySelector('.booking');
linkBooking.addEventListener('click', clickMenu);
const anchors = document.querySelectorAll('a[href="#about-us"]');
const home = document.querySelectorAll('a[href="#home"]');
// --------------- scrolling "about us" link----------------------
for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const hrefAnchors = anchor.getAttribute('href');
        document.querySelector('' + hrefAnchors).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
// --------------- scrolling "home" link---------------------------
for (let homes of home) {
    homes.addEventListener('click', (event) => {
        event.preventDefault();
        const hrefHome = homes.getAttribute('href');
        document.querySelector('' + hrefHome).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
// ------------------- open popup ----------------------------------
btnOrder.addEventListener('click', clickMenu);
function clickMenu() {
    popup.classList.add('active')

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active')
        textUser.textContent = ``;
        textCall.textContent = ``;
    })
    // ------------ close popup when clicking on Escape -------------
    window.document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape') {
            popup.classList.remove('active')
            console.log('Закрыли popup путем клика на Escape');
            textUser.textContent = ``;
            textCall.textContent = ``;
        }
    })
}
// ------------- close popup when clicking on background ------------
window.document.addEventListener('click', (e) => {
    if (e.target === popupFon) {
        popup.classList.remove('active')
        console.log('Закрыли popup путем клика на фон')
        textUser.textContent = ``;
        textCall.textContent = ``;
    }
})
// ----------------------------------------------------------------->
// ---------------------- fill out the form popup ------------------>
class PersonInfo {
    constructor(name, number) {
        this.currentNameUser = name
        this.currentNumberUser = number;
    }
}
btnForm.addEventListener('click', () => {
    let inputNameUser = document.querySelector('#name').value;
    let inputNumberUser = document.querySelector('#number').value;
    if (inputNumberUser.length < 11) {
        return alert('Введите номер телефона: x(xxx) xxx-xxxx')
    }

    if (inputNumberUser.length > 11) {
        return alert('Введите номер телефона: x(xxx) xxx-xxxx')
    }

    if (inputNumberUser.length == 11) {
        const infoUser = new PersonInfo(inputNameUser, inputNumberUser);
        console.log(infoUser);
        let format = 'x (xxx) xxx-xxxx';
        for (let i = 0; i < inputNumberUser.length; i++) {
            format = format.replace('x', inputNumberUser[i])
        }

        document.querySelector('#number').value = '';
        document.querySelector('#name').value = '';
        textUser.textContent = `${infoUser.currentNameUser}, спасибо за заказ!`
        textCall.textContent = `Ожидайте звонка на номер: ${format}`;
    }

})


const textUser = document.querySelector('#text-user');
const textCall = document.querySelector('#text-call');
// ------------------------------------------------------- // 
const menuBurger = document.querySelector('.header__burger');
const openBurger = document.querySelector('.header__menu');
const list = document.querySelector('.list');
console.log(list)
menuBurger.addEventListener('click', activeBurger);
function activeBurger() {
    openBurger.classList.toggle('active');

    if (openBurger.classList.contains('active')) {
        body.style.overflow = 'hidden'
        list.addEventListener('click', () => {
            openBurger.classList.remove('active');
            body.style.overflow = 'visible'
        })
    }
    if (!openBurger.classList.contains('active')) {
        body.style.overflow = 'visible'
    }
}

// ---------------------------< promise >------------------- 
const btnMenu = document.querySelector('.btn-menu');
const viewMenu = document.querySelector('.viewmenu');
const backgroundViewMenu = document.querySelector('.viewmenu-box');
function clickDownoaldMenu(){
    viewMenu.classList.toggle('active');
    if(viewMenu.classList.contains('active')){
        body.style.overflow = 'hidden'
    }
    
}
const promiseClick = new Promise((resolve, reject) => {
    btnMenu.addEventListener('click', () => {
        resolve(
            setTimeout(() => {
                clickDownoaldMenu()
            }, 500)
        )

    })
});
window.document.addEventListener('click', (e) => {
    if (e.target !== backgroundViewMenu) {
        viewMenu.classList.remove('active')
        console.log('Закрыли popup путем клика на фон');
        body.style.overflow = 'visible'
    }
})