// JavaScript source code
'use strict'


document.querySelector(selectors: 'h1').innerHTML = '����� ���������� ����� � ����';
document.getElementById(elementld: 'fourth').innerHTML = '��������� �����';
document.getElementsByClassName(classNames: 'oceans').innerHTML = '�������-��������� �����';
document.getElementsByTagName(qualifiedName: 'li')[0].innerHTML = '�������� �����';
document.querySelector(selectors: 'body').style.backgroundColor = '#201F2E';
document.querySelector(selectors: 'h1').style.FontFamily = 'Roboto';


console.log(document.getElementsByTagName(qualifiedName: 'li'));
console.log(document.querySelectorAll(selectors: 'li'));


const myNodeList = document.querySelectorAll(selectors: 'li');

myNodeList[0]
myNodeList[1]