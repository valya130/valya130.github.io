// JavaScript source code
'use strict'

                                        //задание первое

function message() {
    let name = 'John';
    function displayMessage() {
        return 'Hi' + ' ' + name;
    }
    return displayMessage;
}   
let m1 = message();

console.log(m1());

                                       //задание второе

let x = function (x, y) {
                                 // обычная функция
    return x * y;                    

}


let x = (x, y) => x * y;         //стрелочная функия из обычной



                                       //задание третье

let message = () => console.log('hello');
                                           //стрелочная функция без параметров
message();

Let number = x => console.log(x);
                                            //стрелочная функция 1 аргумент
number(x: 5);

let age = 5;

let welcome = (age < 18) ?

    () => console.log('вход запрещен') :

    () => console.log('проходи');

welcome();
