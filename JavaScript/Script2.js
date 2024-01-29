// JavaScript source code


                                       //задание первое




function message() {

    console.log('hello');

}
message();


Let aFunc = function () {

    console.log('hi');

};
aFunc();

                                    //задание второе

let aFunc = function (name) {

    console.log('hi', name);   //анонимная функция

}
aFunc(name: 'Ivan');

setTimeout(handler: function () {

    console.log("Эта функция анонимная!!!")   // именованная функция
}, timeout: 1500);


                                   //задание третье

fuction ask(questions, yes, no)  {

    if (confirm(question)) yes()

    else no();
}

function showYes() {

    alert('Вы согласны');
}

function showNo() {

    alert('Отмена');
}

ask(question: 'Вы согласны?', showYes, showNo)

