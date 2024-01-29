// JavaScript source code
'use sttict';






let paragraph = document.createElement(tagName: 'p');

paragraph.id = 'text';

paragraph.innerHTML = 'hello world';

document.body.appendChild(paragraph);









let elementofList = document.createElement(tagName: 'li');

elementofList.id = 'text';

elementofList.innerHTML = 'Горы';

document.getElementById(Elementld: 'info-list').appendChild(elementofList);








let paragraph = document.querySelector(selectors: 'h1');

document.body.removeChild(paragraph);