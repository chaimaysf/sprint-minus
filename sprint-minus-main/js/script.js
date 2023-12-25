// HEADER 

let burger = document.querySelector('#burger');
console.log(burger);
let nav = document.querySelector('#nav');
console.log(nav);


burger.addEventListener('click', function(){
    console.log('entered event');
    if (nav.classList.contains('navOff')){
        nav.classList.replace('navOff', 'navOn'); 
    } else {
        nav.classList.replace('navOn', 'navOff');
    }
});


// FOOTER 

let navMinus = document.querySelector('#nav-minus');
console.log(navMinus);

let navAbout = document.querySelector('#nav-about');
console.log(navAbout);

let navAide = document.querySelector('#nav-aide');
console.log(navAide);

let linkMinus = document.querySelector('#links-minus');
console.log(linkMinus);

let linkAbout = document.querySelector('#links-about');
console.log(linkAbout);

let linkAide = document.querySelector('#links-aide');
console.log(linkAide);

let chevronMinus = document.querySelector('#chevronMinus');
console.log(chevronMinus);

let chevronAbout = document.querySelector('#chevronAbout');
console.log(chevronAbout);

let chevronAide = document.querySelector('#chevronAide');
console.log(chevronAide);


navMinus.addEventListener('click', function(){
    console.log('entered event');
    if (linkMinus.classList.contains('nav-footer-off')){
        chevronMinus.setAttribute('src', 'img/chevron-down.svg')
        linkMinus.classList.replace('nav-footer-off', 'nav-footer-on'); 
    } else {
        chevronMinus.setAttribute('src', 'img/chevron-right.svg')
        linkMinus.classList.replace('nav-footer-on', 'nav-footer-off');
    }
});

navAbout.addEventListener('click', function(){
    console.log('entered event');
    if (linkAbout.classList.contains('nav-footer-off')){
        chevronAbout.setAttribute('src', 'img/chevron-down.svg')
        linkAbout.classList.replace('nav-footer-off', 'nav-footer-on'); 
    } else {
        chevronAbout.setAttribute('src', 'img/chevron-right.svg')
        linkAbout.classList.replace('nav-footer-on', 'nav-footer-off');
    }
});

navAide.addEventListener('click', function(){
    console.log('entered event');
    if (linkAide.classList.contains('nav-footer-off')){
        chevronAide.setAttribute('src', 'img/chevron-down.svg')
        linkAide.classList.replace('nav-footer-off', 'nav-footer-on'); 
    } else {
        chevronAide.setAttribute('src', 'img/chevron-right.svg')
        linkAide.classList.replace('nav-footer-on', 'nav-footer-off');
    }
});

