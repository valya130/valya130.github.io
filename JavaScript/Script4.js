// JavaScript source code
'use strict'




                                  //задание первое

function recurce() {
    if (условие) {
        recurce();
    } else { 
        конец вызова функции
    } 
}
recurce();

function countDown(num) {

    console.log(num);


    const newNum = num - 1;


    if (newNum > 0) {

        countDown(newNum);
    }
}


                                   //задание второе

function message() {

    console.log('привет мир!');

}
setTimeout(message, timeout: 5000);
console.log('Сначала отобразится это выражение');



                                    //задание третье

function message(name, lastName) {

    console.log('Hello' + ' ' + name + ' ' + lastName);

}
setTimeout(message, timeout: 3000, arguments: 'John', 'Doe');