// JavaScript source code
'use strict'




                                  //������� ������

function recurce() {
    if (�������) {
        recurce();
    } else { 
        ����� ������ �������
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


                                   //������� ������

function message() {

    console.log('������ ���!');

}
setTimeout(message, timeout: 5000);
console.log('������� ����������� ��� ���������');



                                    //������� ������

function message(name, lastName) {

    console.log('Hello' + ' ' + name + ' ' + lastName);

}
setTimeout(message, timeout: 3000, arguments: 'John', 'Doe');