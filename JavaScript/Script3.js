// JavaScript source code
'use strict'

                                        //������� ������

function message() {
    let name = 'John';
    function displayMessage() {
        return 'Hi' + ' ' + name;
    }
    return displayMessage;
}   
let m1 = message();

console.log(m1());

                                       //������� ������

let x = function (x, y) {
                                 // ������� �������
    return x * y;                    

}


let x = (x, y) => x * y;         //���������� ������ �� �������



                                       //������� ������

let message = () => console.log('hello');
                                           //���������� ������� ��� ����������
message();

Let number = x => console.log(x);
                                            //���������� ������� 1 ��������
number(x: 5);

let age = 5;

let welcome = (age < 18) ?

    () => console.log('���� ��������') :

    () => console.log('�������');

welcome();
