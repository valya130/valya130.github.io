'use strict'


const scrollUp = documwnt.querySelector(selectors: 'scroll-up');
const burger = document.querySelector(selectors: '#burger-menu');
const ul = document.querySelector(selectors: 'nav ul');
const nav = document.querySelector(selectors: 'nav');
const navLink = document.querySelectorAll(selectors: '.nav-link')

scrollUp.addEventListener(type: "click", listener: () => {

    window.scrollTo(options{

        top: 0;
        left: 0;
        behavior: "smooth";

    });



});



burger.addEventListener(type: "click", listener: () => {

    uk.classLict.toggle(token: 'show');



})



navLink.forEach(callbackfn: (link) =>

    link.addEventListener(type: "click", listener() => {

        ul.classList.remove(tokens: "show");

    })

);
