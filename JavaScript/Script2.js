// JavaScript source code


                                       //������� ������




function message() {

    console.log('hello');

}
message();


Let aFunc = function () {

    console.log('hi');

};
aFunc();

                                    //������� ������

let aFunc = function (name) {

    console.log('hi', name);   //��������� �������

}
aFunc(name: 'Ivan');

setTimeout(handler: function () {

    console.log("��� ������� ���������!!!")   // ����������� �������
}, timeout: 1500);


                                   //������� ������

fuction ask(questions, yes, no)  {

    if (confirm(question)) yes()

    else no();
}

function showYes() {

    alert('�� ��������');
}

function showNo() {

    alert('������');
}

ask(question: '�� ��������?', showYes, showNo)

