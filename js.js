
"use strict";
let counterQuestions = 0;
let counterCorrectQuestions = 0;
let mainDb = [
    {
        question: "What is the description of NaN? ",
        answers: ["Not a Null",
            "Nothing else Needed",
            "Not a Number",
            "Negotiate a Number"
        ],
        rightAnswer: "Not a Number",
    },
    {
        question: "Find incorrect option to empty an array in JavaScript?",
        answers: ["By assigning an empty array: array = array.clear();",
            "By assigning array length to 0: array.length = 0;",
            "By popping the elements of the array: while(array.length > 0) { array.pop(); }",
            "By using the splice array function: array.splice(0, array.length);"
        ],
        rightAnswer: "By assigning an empty array: array = array.clear();",
    },
    {
        question: "What way is incorrect to create an array in JS?",
        answers: ["By creating instance of an array: var someArray = new Array(); ",
            "By using an array function: var someArray = function Array(‘value1’, ‘value2’,…, ‘valueN’);",
            "By using an array constructor: var someArray = new Array(‘value1’, ‘value2’,…, ‘valueN’); ",
            "By using an array literal: var someArray = [value1, value2,…., valueN];"
        ],
        rightAnswer: "By using an array function: var someArray = function Array(‘value1’, ‘value2’,…, ‘valueN’);",
    },
    {
        question: "What is a result of using typeof null?",
        answers: ["Null",
            "Number",
            "Function",
            "Object"
        ],
        rightAnswer: "Object",
    }
];

document.getElementById("submit-btn").onclick = nextQuestion;

const questionText = document.getElementById("question");
const progressValue = document.getElementById("progress-value");

const answerCheckboxes = document.getElementsByName("question-form__answer-checkbox");
const answersText = document.getElementsByClassName("question-form__answer-text");

window.onload = initialize;

function nextQuestion() {
    checkRight();
    counterQuestions++;
    console.dir(counterCorrectQuestions + " right from " + counterQuestions + " questions.");
    if (counterQuestions == mainDb.length) {
        alert(`Task finished, your score ${counterCorrectQuestions} from ${mainDb.length}`);
        initialize();
    };

    display();
}

function initialize() {
    counterQuestions = 0;
    counterCorrectQuestions = 0;

    for (let i = 0; i < mainDb.length; i++) {  // random sort question objects
        mainDb.sort((a, b) => 0.5 - Math.random());
    }

    for (let i = 0; i < mainDb.length; i++) {  // random sort answers in objects
        mainDb[i].answers.sort(() => 0.5 - Math.random());
    }

    display();
}

function checkRight() {
    let rightCheckbox;
    let flagChosen = false;
    for (let i = 0; i < answerCheckboxes.length; i++) {
        if (answerCheckboxes[i].checked == true) {
            rightCheckbox = answerCheckboxes[i];
            flagChosen = true;
        }
    }
    if (flagChosen) {
        if (mainDb[counterQuestions].rightAnswer == rightCheckbox.nextElementSibling.innerText) {
            counterCorrectQuestions++
        }  //works better then next method
    }

    //rightCheckbox = Array.prototype.filter.call(answerCheckboxes, item => item.checked == true );
    // don`t work, when user didn`t choose answer option

    /*if (rightCheckbox != undefined && mainDb[counterQuestions].rightAnswer == rightCheckbox[0].nextElementSibling.innerText) {
        counterCorrectQuestions++
    }*/   // there should work rule of short hand operations in "if" comparemant
}

function display() {
    answerCheckboxes.forEach((i) => { i.checked = false });

    questionText.innerText = `${counterQuestions + 1}. ${mainDb[counterQuestions].question}`;

    for (let i = 0; i < answersText.length; i++) {
        answersText[i].innerText = `${mainDb[counterQuestions].answers[i]}`;
    }

    progressValue.value = counterQuestions;
}
