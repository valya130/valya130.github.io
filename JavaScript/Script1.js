// JavaScript source code
'use strict';


                                         //������ �������


    function addSquare(a, b) {
        function square(x) {

            return x * x;

        }

        return square(a) + square(b);

    }

let result = addSquare(a: 2; b: 4; );

console.log(result);


                                        //������ �������


    function calc(a, b) {

        return a + b;

    }
console.log(calc(a: 2, b: 5));




function message() {

    Let a;
    return a = 'hello';

}

console.log(message()); 




function number() {

    Let a;
    a = 6;
    return a;

}

console.log(number());



                                              //������ �������



function first() {
    setTimeout(handler: function () {
        console.log(1);

    }, timeout: 500);
    

}

function second() {

    console.log(2);

}


first();
second();