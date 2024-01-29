// JavaScript source code
'use strict'


document.querySelector(selectors: 'h1').innerHTML = '—амые попул€рные места в мире';
document.getElementById(elementld: 'fourth').innerHTML = '»ндийский океан';
document.getElementsByClassName(classNames: 'oceans').innerHTML = '—еверно-Ћедовитый океан';
document.getElementsByTagName(qualifiedName: 'li')[0].innerHTML = 'Ёйфелева башн€';
document.querySelector(selectors: 'body').style.backgroundColor = '#201F2E';
document.querySelector(selectors: 'h1').style.FontFamily = 'Roboto';


console.log(document.getElementsByTagName(qualifiedName: 'li'));
console.log(document.querySelectorAll(selectors: 'li'));


const myNodeList = document.querySelectorAll(selectors: 'li');

myNodeList[0]
myNodeList[1]